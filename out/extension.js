"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
//VARS
var firstTime;
//Settings to be written
var userSettings;
//the actual extension settings
var extensionConfig;
function setVars() {
    firstTime = true;
    //Settings to be written
    userSettings = vscode.workspace.getConfiguration();
    //the actual extension settings
    extensionConfig = vscode.workspace.getConfiguration('SunflowerSeeds');
}
//END VARS
function activate(context) {
    console.log('Congratulations, your extension "sunflowerseeds" is now active!');
    let disposable = vscode.commands.registerCommand('extension.praiseTheSun', () => {
        setVars();
        setInterval(() => {
            themeSwitch();
        }, 60 * 1000);
        themeSwitch();
        vscode.window.showInformationMessage('Praise the Sun!');
    });
    vscode.commands.registerCommand('extension.showRemainingTime', () => {
        vscode.window.showInformationMessage('Remaining time till Theme Change: 30 minutes.');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function toMinutes(x) {
    return Number(x[0] + x[1]) * 60 + Number(x[3] + x[4]);
}
function themeSwitch() {
    var sunTime = toMinutes(extensionConfig.sunTime);
    var moonTime = toMinutes(extensionConfig.moonTime);
    //Gets date Formatted
    var date = new Date;
    var curTime = date.getHours() * 60 + date.getMinutes();
    // var curTime = 9*60 + 50;
    console.log(curTime, moonTime, sunTime);
    if (!firstTime) {
        if (sunTime === curTime) {
            userSettings.update("workbench.colorTheme", extensionConfig.themes.light, true);
        }
        if (moonTime === curTime) {
            userSettings.update("workbench.colorTheme", extensionConfig.themes.dark, true);
        }
    }
    else {
        //If curTime is bigger than suntime
        if (curTime >= sunTime) {
            //and curTime is smaller than moonTime => it's inside the sunTime window 
            if (curTime < moonTime) {
                userSettings.update("workbench.colorTheme", extensionConfig.themes.light, true);
            }
            else //It's inside moonTime Window
             {
                userSettings.update("workbench.colorTheme", extensionConfig.themes.dark, true);
            }
        }
        else {
            userSettings.update("workbench.colorTheme", extensionConfig.themes.dark, true);
        } //inside moonTime window
        firstTime = false;
    }
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
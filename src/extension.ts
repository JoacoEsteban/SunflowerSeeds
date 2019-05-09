import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "sunflowerseeds" is now active!');
	
	
	let disposable = vscode.commands.registerCommand('extension.praiseTheSun', () => 
	{
		
		//get configs
		
		
		//get date
		
		
		enable();	
		
		
		//set interval
		
		
		
		
		
		
		vscode.window.showInformationMessage('Praise the Sun!');
	});
	
	vscode.commands.registerCommand('extension.showRemainingTime', () => 
	{
		vscode.window.showInformationMessage('Remaining time till Theme Change: 30 minutes.');
	});
	
	context.subscriptions.push(disposable);
}


function enable()
{
	setInterval(() =>
	{
		themeSwitch();
	}, 2000);
	
}


function themeSwitch()
{
	//To be written
	var userSettings = vscode.workspace.getConfiguration();
    //the actual extension settings
    var extensionConfig = vscode.workspace.getConfiguration('SunflowerSeeds');


    //Gets date Formatted
    var date = new Date;
	var curTime = date.getHours()*100 + date.getMinutes();




    if(extensionConfig.sunTime ===  curTime)
    {
		userSettings.update("workbench.colorTheme", extensionConfig.themes[0], true);
	}
	
    if(extensionConfig.moonTime ===  curTime)
    {
		userSettings.update("workbench.colorTheme", extensionConfig.themes[1], true);
    }

}


// this method is called when your extension is deactivated
export function deactivate() {}

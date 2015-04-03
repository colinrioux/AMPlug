/*

  Copyrighted (c) 2014 by Colin Rioux (ArdosMusic)
  Please do not modify or use without permission

*/

// Global Variables :

var message = "-= AMPlug now enabled! Do '/am' for a list of commands =-";
var autowoot = 0;
var automeh = 0;
var sock;

// $('#chat-messages').css("color","#E5E500"); <-- Example how to modify color



startup();

function startup() {
  API.chatLog(message); // Temp. Bootup Message


}

// Custom Commands :

API.on(API.CHAT_COMMAND, customcommand);

function customcommand(value) {

    // Help :

    if (value == "/am help" || value == "/am") {
    	API.chatLog("----------------------------------------------------------");
        API.chatLog("Type '/am help' for a list of commands");
        API.chatLog("Type '/am info' for information about the plugin");
        API.chatLog("Type '/am autowoot <on/off>' to enable or disable autowoot");
        API.chatLog("----------------------------------------------------------");
    }

    // Info :

    if (value == "/am info") {
    	API.chatLog("------------------------------------------------------------");
        API.chatLog("AMPlug developed by Colin Rioux (ArdosMusic). For more info, check him out on twitter @ArdosMusic");
        API.chatLog("------------------------------------------------------------");
    }

    // Autowoot:

    if (value == "/am autowoot on") {
        autowoot = 1;
        $('#woot').click();
        API.chatLog("-= Autowoot has been enabled! =-");
    }

    if (value == "/am autowoot off") {
        autowoot = 0;
        API.chatLog("-= Autowoot will deactivate after the current song! =-");
    }

    // Autojoin:

    if (value == "/am autojoin on") {

    }

}

// Next DJ Advances:

API.on(API.ADVANCE, advanceDj);

function advanceDj() {
    if (autowoot = 1) {
        $('#woot').click();
    }

    if (automeh = 1) {
      $('meh').click();
    }

}

//Bot ? Test ::

var PlugAPI = require('plugapi');

var bot = new PlugAPI ({
  "email": "ArdosMusic@yahoo.com",
  "password": "goEDM2014"
});

bot.connect('tastycat');
bot.on('tastycat', function(room) {
  console.log("Joined " + room);
  API.chatLog("Joined " + room);
});

// Logging Functions that are run to a file that way if the bookmarklet is clicked again it will clear it

function WriteFile(d) {
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var fh = fso.OpenTextFile("log.txt", 8, false, 0);
	fh.WriteLine(d);
    fh.Close();
} 

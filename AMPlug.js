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
  WriteFile("startup()"); // Didn't work ** Todo : Fix 


}

// Custom Commands :

API.on(API.CHAT_COMMAND, customcommand);

function customcommand(value) {

    // Help :

    if (value == "/am help" || value == "/am") {
        API.chatLog("Type '/am help' for a list of commands");
        API.chatLog("Type '/am info' for information about the plugin");
        API.chatLog("Type '/am autowoot <on/off>' to enable or disable autowoot");
    }

    // Secret Commands :

    if (value == "/am secretcommands") {
      API.chatLog("You have just provoked a secret....");
      API.chatLog("");
      API.chatLog("Disclaimer: Please limit use as in some rooms it is frowned upon.");
      API.chatLog("You may type '/am automeh <on/off>' to automatically meh the song the song");
    }

    // Info :

    if (value == "/am info") {
        API.chatLog("AMPlug developed by Colin Rioux (ArdosMusic). For more info, check him out on twitter @ArdosMusic");
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

    // Automeh: •Todo: Delete? Decide.

    if (value == "/am automeh on") {
        automeh = 1;
        $('#meh').click();
        API.chatLog("[Secret Command]: Automeh has been activated!");
    }

    if (value == "/am automeh off") {
      automeh = 0;
      API.chatLog("[Secret Command]: You will stop meh-ing after the current song");
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

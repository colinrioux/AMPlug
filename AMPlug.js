/*
 *  Original File by : Colin Rioux 
 *  Remodeled file
 *
 */

var message = "[AMPlug]: Plugin now enabled! Type '+am' for a list of commands.";

startup();

function startup() {
    API.chatLog(message);
}

API.on(API.CHAT_COMMAND, custom);

function custom(value) {
   
    if (value == "/am") {
        API.chatLog("Test");
    }

}

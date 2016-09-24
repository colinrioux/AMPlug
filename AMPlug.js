/*
 *  Original File by : Colin Rioux 
 *  Remodeled file
 *
 */

var boot_message = "[AMPlug]: Plugin now enabled! Type '+am' for a list of commands.";

boot();

function boot() {
    API.chatLog(boot_message);
}

API.on(API.CHAT_COMMAND, cHandler);

function cHandler(value) {
   
    if (value == "/am") {
        API.chatLog("Test");
    }

}

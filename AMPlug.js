/*
 *  Original File by : Colin Rioux 
 *  Remodeled file
 *
 */

const boot_message = "[AMPlug]: Plugin now enabled! Type '+am' for a list of commands.";

boot();

function boot() {
    API.chatLog(boot_message);
}

API.on(API.CHAT_COMMAND, cHandler);

function cHandler(value) {
    let prefix = "+";
    var cArr = value.split(" ");
    if (value == "+am") {
        API.chatLog("Test");
    }

}

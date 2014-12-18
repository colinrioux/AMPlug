/*

  Copyrighted (c) 2014 by Colin Rioux (ArdosMusic / doetrioux)
  Please do not modify or use without permission

*/




var message = "AMPlug now enabled!";
var autowoot = 0;
var autograb = 0;

// $('#chat-messages').css("color","#E5E500"); <-- Example how to modify color



API.chatLog(message);
loadSettings();

Chat('init', message);

API.on(API.CHAT_COMMAND, customcommand);

function customcommand(value) {

    if (value == "/am help" || value == "/am") {
        API.chatLog("Type '/am help' for a list of commands");
        API.chatLog("Type '/am info' for information about the plugin");
        API.chatLog("Type '/am autowoot <on/off>' to enable or disable autowoot");
        API.chatLog("Type '/am autograb <on/off>' to enable autograb. If you enable this, please create a playlist called autograb");

    }

    if (value == "/am info") {
        API.chatLog("AMPlug developed by Colin Rioux (ArdosMusic). For more info, check him out on twitter @ArdosMusic");
    }

    if (value == "/am autowoot on") {
        autowoot = 1;
        $('#woot').click();
        API.chatLog("Autowoot has been activated!");
    }

    if (value == "/am autowoot off") {
        autowoot = 0;
        API.chatLog("You will stop wooting after the current song");
    }

    if (value == "/am autograb on") {
        autograb = 1;
        $('#grab').click();
        API.chatLog("Autograb has been activated!");
    }

    if (value == "/am autograb off") {
        autograb = 0;
        API.chatLog("You will stop grabbing after the current song");
    }
}

API.on(API.ADVANCE, advancedj);

function advancedj() {
    if (autowoot = 1) {
        $('#woot').click();
    }

    if (autograb = 1) {
        $('#grab').click();
    }
}

function Chat(type, dest) {

  if ($('#chat-message').css('display') == 'block') {
      var chat = $('#chat-messages'), a = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;
      chat.append('<div class="update am-' + type + '"><span class="text">' + dest + '</span></div>');
      if (a) chat.scrollTop(chat[0].scrollHeight);
      if (chat.children().length >= 512) chat.children().first().remove();
    } else API.chatLog(m.replace(/<br>/g,', ').replace(/<\/?span>/g,''),true);

}

function loadSettings() {

  $('head').append('<style type=text/css id=amplug-css> .am-init{border-left:3px solid #D1D119}#chat .update.am-init .text{color:#D1D119}');


}

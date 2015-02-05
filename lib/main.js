var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var preferences = require("sdk/simple-prefs").prefs;

// Declare variables for replacing the Private Browsing hotkey
var { Hotkey } = require("sdk/hotkeys");
var hotKey

var button = buttons.ActionButton({
    id: "link",
    label: "Open preset URL in Private Browsing window",
    icon: {
	"16": "./icon-16.png",
	"32": "./icon-32.png",
	"64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    tabs.open({
	url: preferences.privateHome,
	inNewWindow: true,
	isPrivate: true
    });
}


// enable replacing Private Browsing hotkey

function setHotKey(prefName) {
    if(preferences.replacePrivateHotKey) {
    	hotKey = Hotkey({
    	    combo: "accel-shift-p",
    	    onPress: function() {
    		handleClick();
    	    }
    	});
    } else if (typeof hotKey !== 'undefined') {
    	hotKey.destroy();
    }
}

require("sdk/simple-prefs").on("replacePrivateHotKey", setHotKey);

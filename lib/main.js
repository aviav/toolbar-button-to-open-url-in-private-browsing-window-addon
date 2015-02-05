var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var preferences = require("sdk/simple-prefs").prefs;

var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Visit Mozilla",
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

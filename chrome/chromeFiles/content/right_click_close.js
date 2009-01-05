function tabInit() {
	gBrowser.mStrip.addEventListener("contextmenu", closeTab, true);
}
function closeTab(e) {
	if(e.shiftKey) {
		return;
	}
	if(e.target.localName == "tab") {
		gBrowser.removeTab(e.target);
	}
	e.preventDefault();
}

const FlexLayout = require("sf-core/ui/flexlayout");
const Image = require("sf-core/ui/image");
const ImageView = require("sf-core/ui/imageview");
const Application = require("sf-core/application");
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const OS = require('sf-core/device/system').OS;


const extend = require('js-base/core/extend');
const NewPage001Design = require('ui/ui_newPage001');

const NewPage001 = extend(NewPage001Design)(
	// Constructor
	function(_super) {
		// Initalizes super class for this page scope
		_super(this);
		// Overrides super.onShow method
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		// Overrides super.onLoad method
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
	superOnShow();
	
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
// alert("welcome");
	


}

module.exports = NewPage001;

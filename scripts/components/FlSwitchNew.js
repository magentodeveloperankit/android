const extend = require('js-base/core/extend');
const FlSwitchNewDesign = require('library/FlSwitchNew');

const FlSwitchNew = extend(FlSwitchNewDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlSwitchNew;

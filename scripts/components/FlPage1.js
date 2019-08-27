const extend = require('js-base/core/extend');
const FlPage1Design = require('library/FlPage1');

const FlPage1 = extend(FlPage1Design)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlPage1;

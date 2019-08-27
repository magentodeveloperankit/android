const extend = require('js-base/core/extend');
const Label1Design = require('library/Label1');

const Label1 = extend(Label1Design)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = Label1;

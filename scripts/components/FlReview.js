const extend = require('js-base/core/extend');
const FlReviewDesign = require('library/FlReview');

const FlReview = extend(FlReviewDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlReview;

const extend = require('js-base/core/extend');
const LviReviewsDesign = require('library/LviReviews');

const LviReviews = extend(LviReviewsDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;

		Object.defineProperties(this, {
			img: {
				set: url => this.imgCustomer.loadFromUrl({ url })
			},
			name: {
				set: name => this.lbName.text = name

			},
			date: {
				set: date => this.lbDate.text = date
			},
			details: {
				set: details => {
					this.lbDetails.text = details;
					this.lbDetails.multiline = true;
				}
			}
		});
	}
);

module.exports = LviReviews;

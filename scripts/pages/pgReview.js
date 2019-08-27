const Image = require("sf-core/ui/image");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const System = require("sf-core/device/system");
const Color = require("sf-core/ui/color");
const LviReviews = require("components/LviReviews");
const extend = require('js-base/core/extend');
const PgReviewDesign = require('ui/ui_pgReview');
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");


const PgReview = extend(PgReviewDesign)(
	// Constructor
	function(_super) {
		// Initalizes super class for this page scope
		_super(this);
		// Overrides super.onShow method
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		// Overrides super.onLoad method
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

		this.initListView = initListView.bind(this);
		this.refreshListView = refreshListView.bind(this);

		this.data = [{
			url: 'https://icon-library.net/images/image-icon-png/image-icon-png-6.jpg',
			name: 'Ankit Jaiswal',
			date: "SEP 5, 2015",
			details: " 123Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			url: 'https://icon-library.net/images/image-icon-png/image-icon-png-6.jpg',
			name: 'kishan',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			url: 'https://icon-library.net/images/image-icon-png/image-icon-png-6.jpg',
			name: 'fooo',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			url: 'https://icon-library.net/images/image-icon-png/image-icon-png-6.jpg',
			name: 'asdasd',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			name: 'zxvzxv',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			url: 'https://icon-library.net/images/image-icon-png/image-icon-png-6.jpg',
			name: 'qweqwe',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			name: 'Sqweqwe',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			url: 'https://icon-library.net/images/image-icon-png/image-icon-png-6.jpg',
			name: 'sdfsdfsd',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}, {
			url: 'https://icon-library.net/images/image-icon-png/image-icon-png-6.jpg',
			name: 'Sxcvxcvxcv',
			date: "SEP 5, 2015",
			details: "Wait a minute, Doc. What are you talking about? What happens to us in the future? What do we become assholes or something? Ho ho ho, look at it roll."
		}];

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
	page.headerBar.title = "The Single Wallet";  // this will update from lang   
	var headerBar = System.OS === "Android" ? page.headerBar : page.parentController.headerBar;
    headerBar.backgroundColor =  Color.create("#017260");

	var myItem = new HeaderBarItem({
		image: Image.createFromFile("images://cart_icon.png")
	});
page.headerBar.setItems([myItem]);

		
		
	page.initListView();

	setTimeout(() => {
		this.refreshListView();
	}, 1000);


}


function initListView() {
	const page = this;
	let id = 0;
	page.lvReview.onRowCreate = () => {
		let item = new LviReviews();
		componentContextPatch(item, `item${id++}`);
		return item;
	};

	page.lvReview.onRowBind = function(listViewItem, index) {
		let { url, name, date, details } = page.data[index];
		listViewItem.img = url;
		listViewItem.name = name;
		listViewItem.date = date;
		listViewItem.details = details;
	};

	page.lvReview.rowHeight = 220;



}



function refreshListView() {
	const page = this;
	page.lvReview.itemCount = page.data.length;
	page.backgroundColor =  Color.RED,
	page.lvReview.refreshData();

}

module.exports = PgReview;

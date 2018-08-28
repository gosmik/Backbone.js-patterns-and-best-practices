// Pagination constructor function
var Pagination = function (collection,noOfItemsInPage) {
	if(!collection){
		throw "No collection passed";
	}
	this.currentPage = 1;
	this.noOfItemsInPage = noOfItemsInPage 	||10;
	this.collection = collection;
}

// Use Underscore's extend method to add properties to your plugin
_.extend(Pagination.prototype, {
	nextPage: function () {},
	prevPage: function () {}
});

var paging1 = new Pagination(10,new Users());
var paging2 = new Pagination(20,new Users());

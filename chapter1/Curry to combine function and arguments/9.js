// Curry method as described by Douglas Crockford
Function.prototype.curry = function ( ) {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function (  ) {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
};

// Functional mixin with cache
var DraggableMixin = (function(){
	var startDrag = function(options){
		console.log('Options = ', options);
	};
	var onDrag = function(){};

	return function(config){
		this.startDrag = startDrag.curry(config);
		this.onDrag = onDrag;

		return this;
	};
})(); 


// UserItemView already extends BaseView
var UserItemView = BaseView.extend({
	tagName : 'div',
	template : '<%= name %>'
});

// DraggableMixin method is called passing the config object 
DraggableMixin.call(UserItemView.prototype, {
	foo : "config example"
});

// SortableMixin.call(UserItemView.prototype);
itemView = new UserItemView({
	model : new User()
}).render();

itemView.startDrag();
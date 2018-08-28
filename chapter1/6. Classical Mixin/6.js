// A simple object with some methods
var DraggableMixin = {
	startDrag : function(){
		// It will have the context of the main class 
		console.log('Called startDrag Context = ', this);
	},
	onDrag : function(){}
}

// UserItemView already extends BaseView
var UserItemView = BaseView.extend({
	tagName : 'div',
	template : '<%= itemName %>'
});

// We just copy the Mixin's properties into the View
_.extend(UserItemView.prototype, DraggableMixin, {
	foo : 'bar',
	otherFn : function(){
		console.log("Called otherFn");
	}
});

var itemView = new UserItemView();

// Call the mixin's method
itemView.startDrag();
itemView.otherFn();
console.log(itemView.foo);


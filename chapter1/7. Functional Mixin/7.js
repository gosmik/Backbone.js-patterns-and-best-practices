// Functional mixin
var DraggableMixin = function(config){
	this.startDrag = function(){
		console.log('Called startDrag');
	};
	this.onDrag = function(){};

	return this;
}

// UserItemView already extends BaseView
var UserItemView = BaseView.extend({
	tagName : 'div',
	template : '<%= name %>'
});

// DraggableMixin method is called passing the config object 
DraggableMixin.call(UserItemView.prototype, {
	foo : 'bar',
	otherFn : function(){
		console.log("Called otherFn");
	}
});
// SortableMixin.call(UserItemView.prototype);

itemView= new UserItemView({
	model : new User()
});
// Call the mixin's method
itemView.startDrag();
//itemView.otherFn(); error call is not equal to extend so itemView has no otherFn method
console.log(itemView.foo); // TO-DO passing params will be examined later on


var UserItemView = BaseView.extend({
	tagName: 'div',
	template: '<span><%= name %></span>',
	render: function(){
    	// Call the parent view’s render function
    	BaseView.prototype.render.apply(this, arguments);

    	// Add your code here
    	this.anotherFn();
    	return this;
    },

    anotherFn : function(){
		console.log("Another Function has been called from render method")
		return "Another Function";
	}
});

// Create a view instance passing a new model instance
var userItem = new UserItemView({
	model: new User
});

$(document.body).append(userItem.render().el);
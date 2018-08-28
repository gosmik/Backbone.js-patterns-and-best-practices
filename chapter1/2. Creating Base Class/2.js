var User = Backbone.Model.extend({
	defaults: {
		name: 'Yusuf',
		surname:'Unlu',
		adress:'Istanbul'
	}
});

// Parent view which has the render function
var BaseView = Backbone.View.extend({
	render: function () {
		var tpl = _.template(this.template),
		data = (this.model) ? this.model.toJSON() : {},
		html = tpl(data);

		this.$el.html(html);
		return this;
	}
});

// A simpler view class
var UserItemView = BaseView.extend({
	tagName: 'div',
	template: '<span><%= name %></span> <br> <span><%= surname %></span>'
});

var AdressItemView = BaseView.extend({
	tagName: 'div',
	template: '<span><%= adress %></span>'
});



// Create a view instance passing a new model instance
var userItem = new UserItemView({
	model: new User
});
var userAdressItem = new AdressItemView({
	model: new User
});

$(document.body).append(userItem.render().el);
$(document.body).append(userAdressItem.render().el);
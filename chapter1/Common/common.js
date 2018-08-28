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

var Users = Backbone.Collection.extend({
	model:User
});
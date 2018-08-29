// Functional mixin with cache
// The closure executes only once to define 
// even if the mixin is called several times
var DraggableMixin = (function() {
    var startDrag = function() {};
    var onDrag = function() {};

    return function(config) {
        this.startDrag = startDrag;
        this.onDrag = onDrag;

        return this;
    };
})();

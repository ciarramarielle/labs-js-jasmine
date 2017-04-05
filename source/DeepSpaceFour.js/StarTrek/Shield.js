Shield = function() {
	this.raised = false
	this.energy = 0
};

Shield.prototype = {
	raise: function() {
		this.raised = true
	},
	transferEnergy : function(n) {
		this.energy += n
	}
};
Shield = function() {
	this.raised = false
	this.strength = 0
	this.damagedSubsystem = false
	this.maxStrength = 10000
	this.minStrength = 0
	return this
};

Shield.prototype = new Subsystem()

Shield.prototype = {
	raise: function() {
		this.raised = true
	},
	lower: function() {
		this.raised = false
	},
	getHit : function(damage){
		if (shield.raised){
			var excessDamage = damage - shield.strength

			if (excessDamage > 0){
				shield.strength = 0;
				shield.lower()
				shield.damagedSubsystem = true
			}
			else {
				shield.strength -= damage	
			}
		}
	},
	getMaxStrength: function() {
		return this.maxStrength
	},
	getMinStrength: function() {
		return this.minStrength
	}
};
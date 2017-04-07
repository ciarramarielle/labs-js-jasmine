/**
 * Created by scottdunn on 4/6/17.
 */
Subsystem = function () {
    this.damaged = false
};

Subsystem.prototype = {
	isDamaged: function () {
		return this.damaged
	},
	damage: function () {
		this.damaged = true
	},
	repairFull: function () {
		this.damaged = false
	}
}
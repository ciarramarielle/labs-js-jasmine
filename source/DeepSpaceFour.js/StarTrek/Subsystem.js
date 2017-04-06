/**
 * Created by scottdunn on 4/6/17.
 */
Subsystem = function () {
    this.damaged = false
};

Subsystem.prototype = {
	damage: function () {
		this.damaged = true
	},

	isDamaged: function () {
		return this.damaged
	}
}
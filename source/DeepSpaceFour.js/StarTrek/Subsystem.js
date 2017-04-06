/**
 * Created by scottdunn on 4/6/17.
 */
Subsystem = function () {
    this.isDamaged = false
};

Subsystem.prototype = {
	damage: function () {
		this.isDamaged = true
	}
}
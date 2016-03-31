function Cat(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function() {
		return firstName + ' ' + lastName;
	}
}

function Kitten(firstName, lastName, colour) {
	Cat.call(this, firstName, lastName);
	this.colour = colour;
}

Kitten.prototype = Object.create(Cat.prototype);
var kitten = new Kitten('Pixie', 'Whitly', 'orange');
document.write('<p>' + kitten.fullName() + '</p>');
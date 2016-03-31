
function Person(firstName, lastName, address) {
	//var firstName = firstName;
	//var lastName = lastName;
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function() {
		return firstName + ' ' + lastName;
	}
	this.address = address;
}

function Address(street, number, city) {
	this.street = street;
	this.number = number;
	this.city = city;
}

function City(postalCode, name) {
	this.postalCode = postalCode;
	this.name = name;
}

var city = new City('1WK', 'London');
var address = new Address('Brook street', '23', city);
var person = new Person('Jimi', 'Hendrikx', address);

//with encapsulation no longer able to access this.
Person.prototype.getFullName = function() {
	return 'First name : ' + this.firstName + 'Last name : ' + this.lastName;
};

Address.prototype.getAddress = function() {
	var a = function() {
		return 'postal code: ' + city.postalCode + ' name : ' + city.name;
    };
	return 'Street: ' + this.street + ' number: ' + this.number + ' city : ' + a();
};

document.write('<p>' + person.getFullName() + '</p>') ;
document.write('<p>' + address.getAddress() + '</p>') ;

/*
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
*/

function Kid (firstName, lastName, address, petName) {
	Person.call(this, firstName, lastName, address);
	this.petName = petName;
}

Kid.prototype = new Person();

var aKid = new Kid('Emma', 'Shaikh', 'Oude Leuvensebaan', 'Pixie');

Kid.prototype.getPet = function() {
	return 'pet ' + this.petName; //undef
};


document.write('<p>' + aKid.getPet()+ '\nname :' + aKid.fullName() + '</p>') ;

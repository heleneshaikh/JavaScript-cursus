var person = {
	firstName : "jimi",
	lastName : "hendrix",
	emails: ["jimi.Hendrix@gmail.com",
			 "helene.shaikh@gmail.com",
			 "pixie@gmail.com"],
	address : {
		street : "Brook street",
		number: "23",
		city : {
			postalCode: "W1K",
			name: "London"
		}
	},
	fullName : function() {
		return this.firstName + ' ' + this.lastName;
	}
}

function printstuff(object, depth) {
	for (var key in object) {
		if(object.hasOwnProperty(key)) {
			var value = object[key];
			document.write(Array(depth * 4).join('&nbsp;&nbsp;&nbsp;&nbsp'));
			document.write(key + '   :   ');
			if (typeof value === 'object') {
				document.write("<br/>");
				printstuff(value, depth +1);
			} else if (typeof value === 'function'){
				var fullName = object[key]();
				document.write(fullName + '<br/>');
			} else {
				document.write(value + '<br/>');
			}
		}
	}
}

//How to make your own method based on var person, i.e. not a function?


printstuff(person, 0);

function Cat (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

var pixie = new Cat("Pixie", "Whitly");

Cat.prototype.toString= function() {
    return 'Cat '+ this.firstName;
};

document.write('<p>' + pixie.toString() + '</p>');




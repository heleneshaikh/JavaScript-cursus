document.write("<p>");

var person = { //3 niveau's
			firstName: "Jimi",
			lastName: "Hendrikx",
			emails: ["Jimi.hendrikx@gmail.com", "helene.shaikh@gmail.com"],
			address: { //value is een object op zich
				street: "Brook street",
				number: "24",
				city: {
					postalCode: "W1K",
					Name: "London"
				}
			},
			fullname: function() {
				return this.firstName + ' ' + this.lastName;
			}
		}

	function printStuff(object, depth) {
			for (var key in object) { //keys op eerste niveau
				if (object.hasOwnProperty(key)) { //van u eigen prototype
					var value = object[key]; //value opvragen vb person[lastName] => Hendrikx
					document.write(Array(depth * 4).join('&nbsp;&nbsp;&nbsp;&nbsp'));
					document.write(key + ': ');
					if (typeof value === 'object') { //if value is an object
						document.write("<br/>");
					   printStuff(value, depth + 1); // 1 niveau dieper
					} else if(typeof value === 'function') {
						var name = object[key]();
						document.write(name);
					}
					else { //"base case", otherwise might have endless loop. Make the recursion stop.
						document.write(value + "<br/>"); //value
					}
				}
			}
		}

		printStuff(person, 0); //prop, diepte 0

/*
	for (var key in person) {
		if(person.hasOwnProperty(key)) {
			document.write(key + " " + person[key] + " <br>");
		}
	}

*/
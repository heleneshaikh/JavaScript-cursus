document.write("<table class='tablestyle'>");
	var counter = 1;
	for (var i = 1 ; i <= 10; i++) {
		document.write("<tr>");
		for (var j = 1; j <= 10; j++) {
			document.write("<td>");
			document.write(counter);
			counter++;
		}
	}
var temp = 212
var farenheit = true
if (farenheit){
	var conversion = (temp - 32)*5/9;
	console.log(temp + " degrees Farenheit converts to " + conversion + " degrees Celsius");
	}
	else {
		var conversion = temp*9/5+32;
		console.log(temp + " degrees Celsius converts to " + conversion + " degrees Farenheit");
	}

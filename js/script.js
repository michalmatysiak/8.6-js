// 1
var a = 0;
    b = 0;

var value = (a * a) - (2 * a * b) - (b * b);
	document.write('Operation on variables: (a * a) - (2 * a * b) - (b * b)'+ '<br/>');
	document.write('var a = ' + a + '<br/>');
	document.write('var b = ' + b + '<br/>');
	document.write ('Value is Equal:' + ' ' +  value+ '<br/>');
	console.log('Value is Equal:' + ' ' +  value);
	
if (value > 0) {
	document.write('Positive result'+ '<br/>');
	console.log('Positive result');	
} 
else if (value < 0) {
  document.write('Negative result'+ '<br/>');
  console.log('Negative result');
}
else if(value == 0) {
	document.write('The value is zero');
	console.log('The value is zero');
}
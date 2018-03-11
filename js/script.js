// 1
var a = 220,
	b = 20;

var value = (a * a) - (2 * a * b) - (b * b);
	console.log ('Value is Equal:' + ' ' +  value)

// 1.1
var value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
	console.log('wynik dodatni');
} 
else if (value < 0) {
  console.log('wynik ujemny');
}

// 2
var  value = (a * a) - (2 * a * b) + (b * b);

if(value == 0) {
	console.log('wartość równa zero');
}
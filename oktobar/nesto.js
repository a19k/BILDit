
function testiranje(a, b = a * 2) {
	console.log(a);  
	console.log(b);
    console.log(testiranje.arguments);
    
}

testiranje(5);
testiranje(5, undefined);
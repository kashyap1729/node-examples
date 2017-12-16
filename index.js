var rect = require('./rectangle');

function solveRect(l,b) {
	console.log("Solving for rectangle with l = "+ l + " and b = " + b );
	
	if ( l<= 0 || b<= 0)
	{
		console.log("Rectangle dimension should be greater than zero .  l = " +l +" and b = " + b);	
	}
	   
    else {
		console.log("The are of the rectangle is "+ rect.area(l,b));
		console.log("The peremeter of the rectangle is "+ rect.perimeter(l,b));
	}
}

solveRect(2,3);
solveRect(5,5);
solveRect(2,-5);
solveRect(0,6);
solveRect(-9,-9);
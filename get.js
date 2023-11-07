let today=new Date();
console.log(today);



let year=today.getFullYear();
console.log(year);

document.write("Find this year is leap year or not:---"+"<br>");
if(year%4==0){
	console.log("This is leap year");
	
	document.write("Output:This is leap year"+"<br>");
}
else{
	console.log("This is not a leap year");
	
	document.write("Output:This is not leap year"+"<br>");
}
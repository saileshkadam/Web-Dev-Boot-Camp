age = prompt("What is your age")
errormsg = "Invalid Age"
ofAgeMsg = "happy 21st birthday!"
oddAgeMsg = "your age is odd"
perfSqrMsg = "perfectsquare!"

if (age < 0){
    console.log(errormsg);
} 
else if (age == 21){
    console.log(ofAgeMsg);
} else if(age%2 === 1){
    console.log(oddAgeMsg);
} else if (age % Math.sqrt(age) === 0){
    console.log(perfSqrMsg);
}
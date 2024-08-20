var dived=document.getElementById('ForCircle');
var display = 1;


function visable1()
{
if(display==1){

dived.style.display='block';

display=0;
}
else{
    dived.style.display='none';
    display=1;
}



}
var radiusField = document.getElementById('CircleRadiusField');

// Function to calculate the area of the circle
function AreaofCircle() {
    // Get the value from the input field and convert it to a number
    var radius = parseFloat(radiusField.value);
    
    // Check if the value is a valid number
    if (isNaN(radius) || radius <= 0) {
        window.alert('Please enter a valid positive number for the radius.');
        return;
    }
    
    // Calculate the area of the circle
    var result = Math.PI * radius * radius;
    
    // Display the result
    window.alert('The Area of the Circle is: ' + result);
}
//visable2()
var divSqueare=document.getElementById('ForSqueare');
var display = 1;
function visable2()
{
if(display==1){

divSqueare.style.display='block';

display=0;
}
else{
    divSqueare.style.display='none';
    display=1;
}



}

var AreaSqueareField = document.getElementById('SqueareField');

// Function to calculate the area of the Squeare
function AreaofSqueare(){
    // Get the value from the input field and convert it to a number
    var Area = parseFloat(AreaSqueareField.value);
    
    // Check if the value is a valid number
    if (isNaN(Area) || Area <= 0) {
        window.alert('Please enter a valid positive number for the radius.');
        return;
    }
    
    // Calculate the area of the circle
    var result = Area*Area;
    
    // Display the result
    window.alert('The Area of the Circle is: ' + result);
}

//visable3()
var divCylinder=document.getElementById('ForCylinder');
var display = 1;
function visable3()
{
if(display==1){

divCylinder.style.display='block';

display=0;
}
else{
    divCylinder.style.display='none';
    display=1;
}



}

var RadiusC = document.getElementById('CylinderRadius');
var HeightC = document.getElementById('CylinderHeight');


function AreaofCylinder()
{
    var Radius = parseFloat(RadiusC.value);
    var Height = parseFloat(HeightC.value);
    
    // Check if the value is a valid number
    if (isNaN(Radius) || Radius <= 0||isNaN(Height) || Height <= 0) {
        window.alert('Please enter a valid positive number for the radius.');
        return;
    }
    
    // Calculate the area of the circle
    var result = 2*3.14*Radius*Height+2*3.14*Radius*Radius;
    
    // Display the result
    window.alert('The Area of the Circle is: ' + result);




}




//visable4()
var divSI=document.getElementById('SimpleInterest');
var display = 1;
function visable4()
{
if(display==1){

divSI.style.display='block';

display=0;
}
else{
    divSI.style.display='none';
    display=1;
}



}

var P = document.getElementById('Principle');
var R = document.getElementById('Rate');
var t= document.getElementById('Time');

function SimpleInterest()
{
    var P1 = parseFloat(P.value);

    var Ra = parseFloat(R.value);
    var Ti = parseFloat(t.value);
    
    // Check if the value is a valid number
    if (isNaN(P1) || P1 <= 0||isNaN(Ra) || Ra <= 0||isNaN(Ti) || Ti <= 0) {
        window.alert('Please enter a valid positive number for the P, R,T.');
        return;
    }
    
    // Calculate the area of the circle
    var result =(P1*Ra*Ti)/100;
    
    // Display the result
    window.alert('The Simple Interest is ' + result+'%');



}























// var divCylinder=document.getElementById('ForCylinder');
// var display = 1;
// function visable3()
// {
// if(display==1){

//     divCylinder.style.display='block';

// display=0;
// }
// else{
//     divCylinder.style.display='none';
//     display=1;
// }

// }

// var AreaCylinderField = document.getElementById('CylinderField');

// // Function to calculate the area of the Squeare
// function AreaofCyliner(){
//     // Get the value from the input field and convert it to a number
//     var Area = parseFloat(AreaCylinderField.value);
    
//     // Check if the value is a valid number
//     if (isNaN(Area) || Area <= 0) {
//         window.alert('Please enter a valid positive number for the radius.');
//         return;
//     }
    
//     // Calculate the area of the circle
//     var result = ;
    
//     // Display the result
//     window.alert('The Area of the Circle is: ' + result);
// }
var a=document.getElementById('alapha1');



function visable5()
{
if(display==1){

a.style.display='block';

display=0;
}
else{
    a.style.display='none';
    display=1;
}



}
var resultF = document.getElementById('alpha');

// Function to calculate the area of the circle
function Alpha() {
    // Get the value from the input field and convert it to a number
    // var radius = resultF.value;
    
    // Check if the value is a valid number
    // if (isNaN(radius) || radius <= 0) {
    //     window.alert('Please enter a valid positive number for the radius.');
    //     return;
    // }
    
    // Calculate the area of the circle
    var result = resultF.value;
    
    // Display the result
    window.alert('You Typed: ' + result);
}
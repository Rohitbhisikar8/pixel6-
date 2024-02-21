//captcha number
var x =Math.floor((Math.random() * 10) +1);
var y =Math.floor((Math.random() * 10) +1);
document.getElementById("demo").innerHTML = `${x} + ${y}`;
let captcha =x+y;
document.getElementById("captcha").innerHTML;
console.log(document.getElementById("captcha").innerHTML);

//num to word

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rs Only.' : '';
    return str;
}

document.getElementById('card4').onkeyup = function () {
    document.getElementById('word').innerHTML = inWords(document.getElementById('card4').value);
};


function onSubmit(){
var firstname = document.forms ["Registration"] ["pin1"].value
var email = document.forms ["Registration"] ["pin2"].value
var pan =/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
var amount = document.forms ["Registration"] ["card5"].value
var pno = document.forms["Registration"]["pin3"].value;
var captcha=document.forms["Registration"]["captcha"].value


// validation//
if(firstname.length<4){
    document.getElementById("p1").innerHTML="Enter Your Name";
    document .getElementById("p1").style.color= "red";
    return false;  
}
if(email.length==0){
    document.getElementById("p2").innerHTML="Enter Your valid email";
    document .getElementById("p2").style.color= "red";
    return false;  
}
if(pno.length!=10) {
    document.getElementById("p3").innerHTML="Enter Your Pancard details";
    document .getElementById("p3").style.color= "red";
    return false;
}
   
if (amount.length==0 ){
    document.getElementById("p4").innerHTML="Enter Your amount)";
    document .getElementById("p4").style.color= "red";
    return false;  
}if(captcha.length==0){
    document.getElementById("p5").style.color="red";
    return false
}






alert("you Register successfully");

document.getElementById("p1").style.visibility=false;
document.getElementById("p2").style.visibility=false;
document.getElementById("p3").style.visibility=false;
document.getElementById("p4").style.visibility=false;
document.getElementById("p5").style.visibility=false;


var user = {
    firstName: firstname,
    Email: email,
    pan: pno,
    money: amount,
    captcha:captcha,
}
localStorage.setItem("user", JSON.stringify(user));

if(x+y==captcha){
    alert("you created successfully" );
    location.assign("/new.html");
    return false;
} else {
    document.getElementById ("p6").innerHTML="invalid try again"
document.getElementById("p6").style.color="red";
return false;

}

}
function getuserName(){
    var userstr=localStorage.getItem("user");
    var user=JSON.parse(userstr);

    console.log(user);
    var arr = user.firstName.split(" ")
    document.getElementById("h3").innerHTML+= `${arr[0]}`;
    document.getElementById("h4").innerHTML+= `${user.email}`;
}
function generatorOTP(){
    var otp = Math.floor(Math.random() * 10000);
    console.log(otp);
}
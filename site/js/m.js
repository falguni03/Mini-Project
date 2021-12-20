function validate_name(){
var regName=/^[a-zA-Z_ -]+$/;
var uname=document.getElementById('name').value;
if(!regName.test(uname)){
alert("Please enter a valid name");
document.getElementById('name').focus();
}
else{
return true;
}
}
function validate_number(){
var regName=/^[0-9]+$/;
var pnum=document.getElementById('no').value;
if(!regName.test(pnum) || document.f1.no.value.length>10 ){
alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
document.getElementById('no').focus();
}
else if(pnum == "" || pnum == null){
	alert("Please enter your Mobile No.");
}
else{
return true;
}
}
const API_URL="https://script.google.com/macros/s/AKfycbzY4mgGUxzUrMwvLM9nPbtFOy1WZAwI8EtmycjqlHf_3YB8xdV3qONStP8olqyhF71MMQ/exec";

async function checkMembership(){

let vehicle=document.getElementById("cv").value;

if(vehicle===""){
alert("Enter vehicle number");
return;
}

let res=await fetch(API_URL+"?action=check&vehicle="+vehicle);

let data=await res.json();

if(!data){
document.getElementById("result").innerHTML="Customer not found";
return;
}

document.getElementById("result").innerHTML=
"Name: "+data.name+
"<br>Total Wash: "+data.total+
"<br>Used: "+data.used+
"<br>Remaining: "+data.remaining;

}

async function addWash(){

let vehicle=document.getElementById("av").value;

if(vehicle===""){
alert("Enter vehicle number");
return;
}

await fetch(API_URL,{
method:"POST",
body:JSON.stringify({
action:"addWash",
vehicle:vehicle
})
});

alert("Wash Added");

}

async function registerCustomer(){

let name=document.getElementById("name").value;
let vehicle=document.getElementById("vehicle").value;
let phone=document.getElementById("phone").value;

if(name==="" || vehicle==="" || phone===""){
alert("Fill all fields");
return;
}

await fetch(API_URL,{
method:"POST",
body:JSON.stringify({
action:"register",
name:name,
vehicle:vehicle,
phone:phone
})
});

alert("Customer Registered");

}

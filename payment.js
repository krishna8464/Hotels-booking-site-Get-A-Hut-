let result = localStorage.getItem("success")
let username = document.querySelector("#username")

if(result==="succ"){
    let ans = JSON.parse(localStorage.getItem("login_detials"))
username.innerText=ans.name
}

let logout = document.querySelector("#logout")
logout.addEventListener("click",function(){
    let strr = false;
    localStorage.setItem("success",strr)
    alert("Logout sucessful")
    window.location.href="index.html"
})
// log-in sign in function completed
    
let contry = document.getElementsByClassName("dropdown-item").innerText
console.log(contry)
document.getElementById("nav_img").addEventListener("click",()=>{
    window.location.href="index.html"
})
//-------------------------------------------- nav barr ends ---------------------------------------------

let getData = JSON.parse(localStorage.getItem("booking_order"))
console.log(getData)

let photo = document.createElement("img")
photo.setAttribute("src",getData.image)
photo.style.width = "320px";
photo.style.height = "150px"
document.getElementById("image").append(photo)
let nam = getData.name
let loc = getData.locat
let type = getData.typ
let stardate = getData.enterDate
let enddate = getData.endDate
let numberofguests = getData.numberof
let totalprice = getData.price
console.log(numberofguests)
console.log(totalprice)
let sumof = eval(numberofguests*totalprice)
console.log(sumof)
// localStorage.setItem("totprice",totalprice)
// let ans = localStorage.getItem("totprice")

document.querySelector(".name").append(nam)
document.querySelector(".location").append(loc)
document.querySelector(".type").append(type)
document.querySelector(".Sd").append(stardate)
document.querySelector(".Ed").append(enddate)
document.querySelector("#GS").append(sumof)
document.querySelector(".ST").append("Sub Total: "+ sumof)
document.querySelector(".Tax").append("Tax: "+ 1300)
document.querySelector(".Cf").append("Cleaning Fee: "+ 327)
let totspend = eval(sumof+1300+327)
document.querySelector(".totl").append("Total Amount: "+totspend)
var val = Math.floor(1000 + Math.random() * 9000);
function sendotp(){
    let numb = document.querySelector("#numbercatch").value
    if(numb.length < 10 || numb.length >10){
        alert("Please Enter Correct Number")
    }else{
        alert(val) 
       localStorage.setItem("cretotp",val)
    }
}function paytime(){
    console.log("Hi")
    let enterotp = document.querySelector("#subotp").value
    let recevied = localStorage.getItem("cretotp")
    if(enterotp !== recevied){
        alert("Entered Wrong OTP pease try Again!")
    }else{
        alert("Hurray🎉 Rooms Are Booked")
        enterotp.innerText = ""

    }
}

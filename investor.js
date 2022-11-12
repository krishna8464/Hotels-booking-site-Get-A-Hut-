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
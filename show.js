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

let LSData = JSON.parse(localStorage.getItem("selected_Property"))
console.log(LSData);
console.log(LSData.faci[0])
let innerone = document.getElementById("det")
let info = document.getElementById("info")
let maps = document.getElementById("maps")
let bag = "";
for(let i = 0;i<LSData.faci.length;i++){
    bag += LSData.faci[i]+","
}
let cont = document.getElementById("show_content")
function displaycont(data){
    console.log(data.name)
    let image = document.createElement("img")
    image.setAttribute("src",data.img)
    image.setAttribute("id","image")

    let names = document.createElement("p")
    names.innerText = data.name
    names.setAttribute("id","name")

    let locon = document.createElement("p")
    locon.innerText ="Location: "+ data.location
    locon.setAttribute("id","location")

    let typ = document.createElement("p")
    typ.innerText = data.type
    typ.setAttribute("id","houset")

    let guest = document.createElement("p")
    guest.innerText= data.guests_allowed
    guest.setAttribute("id","members")

    let facilites = document.createElement("p")
    facilites.innerText ="Facilities: "+ bag
    facilites.setAttribute("id","comforts")

    let amount = document.createElement("p")
    amount.innerText="Price for one: "+ data.price
    amount.setAttribute("id","price")

    let map = document.createElement("img")
    map.setAttribute("src",data.map)
    map.setAttribute("id","map")

    innerone.append(image)
    info.append(locon,names,typ,guest,facilites,amount)

    maps.append(map)

}
displaycont(LSData)

//--------------------------------------------------- order book detials ----------------------------------------------------------

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()
    let numberof = document.querySelector("#guest_child").value
    let enterDate = document.querySelector("#checkin").value
    let endDate = document.querySelector("#checkout").value
    let price = LSData.price
    let image = LSData.img
    let name = LSData.name
    let typ = LSData.type
    let obj = {
        image,
        name,
        typ,
        price,
        endDate,
        enterDate,
        numberof
    }
    if(enterDate === "" || endDate === "" || numberof === ""){
        alert("Please enter all the detials")
    }else{
        localStorage.setItem("booking_order",JSON.stringify(obj))
        window.location.href = "payment.html"
        console.log(obj)
    }
       
    
    
    
    
    
})

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

let LSData = JSON.parse(localStorage.getItem("mid-selected"))
console.log(LSData)

function display(data){
    
        let image = document.createElement("img")
        image.setAttribute("src",data.img1)

        let para = document.createElement("p")
        para.innerText = data.name
        let div1 = document.createElement("div")
        div1.append(para)
        div1.setAttribute("class","one")
        let para1 = document.createElement("p")
        para1.innerText = data.msg
        let div2 = document.createElement("div")
        div2.append(para1)
        div2.setAttribute("class","two")
        let para2 = document.createElement("p")
        para2.innerText= "Community Managed By Tripvillas In "+data.loc
        let div3 = document.createElement("div")
        div3.append(para2)
        div3.setAttribute("class","three")

        ///////one
        let idiv1 = document.createElement("div")
        idiv1.setAttribute("class","al")
        let img1 = document.createElement("img")
        img1.setAttribute("src",data.img1)
        idiv1.append(img1)
        //////two
        let idiv2 = document.createElement("div")
        idiv2.setAttribute("class","al")
        let img2 = document.createElement("img")
        img2.setAttribute("src",data.img2)
        idiv2.append(img2)
        /////three
        let idiv3 = document.createElement("div")
        idiv3.setAttribute("class","al")
        let img3 = document.createElement("img")
        img3.setAttribute("src",data.img3)
        idiv3.append(img3)
        //////four
        let idiv4 = document.createElement("div")
        idiv4.setAttribute("class","al")
        let img4 = document.createElement("img")
        img4.setAttribute("src",data.img4)
        idiv4.append(img4)
        /////five
        let idiv5 = document.createElement("div")
        idiv5.setAttribute("class","al")
        let img5 = document.createElement("img")
        img5.setAttribute("src",data.img5)
        idiv5.append(img5)
        //////six
        let idiv6 = document.createElement("div")
        idiv6.setAttribute("class","al")
        let img6 = document.createElement("img")
        img6.setAttribute("src",data.img6)
        idiv6.append(img6)
        /////seven
        let idiv7 = document.createElement("div")
        idiv7.setAttribute("class","al")
        let img7 = document.createElement("img")
        img7.setAttribute("src",data.img7)
        idiv7.append(img7)
        //////eight
        let idiv8 = document.createElement("div")
        idiv8.setAttribute("class","al")
        let img8 = document.createElement("img")
        img8.setAttribute("src",data.img8)
        idiv8.append(img8)
        //////nine
        let idiv9 = document.createElement("div")
        idiv9.setAttribute("class","al")
        let img9 = document.createElement("img")
        img9.setAttribute("src",data.img9)
        idiv9.append(img9)

        let mapdiv = document.createElement("div")
        mapdiv.setAttribute("id","mapdiv")
        let map = document.createElement("img")
        map.setAttribute("src",data.map)
        mapdiv.append(map)


        

        document.querySelector(".topshow").append(image)
        document.querySelector(".det").append(div1,div2,div3)
        document.querySelector("#allimg").append(idiv1,idiv2,idiv3,idiv4,idiv5,idiv5,idiv6,idiv7,idiv8,idiv9)
        document.querySelector("#bot-child").append(mapdiv)
       
        

}
 display(LSData)
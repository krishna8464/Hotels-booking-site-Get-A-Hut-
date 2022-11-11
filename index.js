
// log-in and sign-in functionalitys
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

//----------------------------------------------my own web sit/...contry...-------------------------------------------------------------------
let hotels = [
    {
        img : "images/hotels/hotel1.jpeg",
        name : "2bhk Complex Villa",
        location : "Siolim, Goa, India | Marna",
        type : "Villa",
        guests_allowed : "MAX 5 GUESTS",
        price : 5888,
        map : "images/hotels/map1.png",
        faci : ["WIFI","TV"],
        state : "Goa"
        
    },
    {
        img : "images/hotels/hotel2.jpeg",
        name : "Two Bedroom Serviced Apartments",
        location : "Calangute, Goa, India | Behind Hyatt Place",
        type : "RESORT",
        guests_allowed : "MAX 5 GUESTS",
        price : 6000,
        map : "images/hotels/map2.png",
        faci : ["WIFI","TV","AC"],
        state : "Goa"
    },
    {
        img : "images/hotels/hotel3.jpeg",
        name : "2 BEDROOMS",
        location : "Calangute, Goa, India | Behind Hyatt Place",
        type : "RESORT",
        guests_allowed : "MAX 3 GUESTS",
        price : 6000,
        map : "images/hotels/map3.png",
        faci : ["WIFI","TV"],
        state : "Mumbai"
    },
    {
        /////4
        img : "images/hotels/hotel4.jpeg",
        name : "Ac Studio In Dabolim, Goa",
        location : "Dabolim, Goa, India",
        type : "Studio",
        guests_allowed : "MAX 2 GUESTS",
        price : 5868,
        map : "images/hotels/map4.png",
        faci : ["WIFI","TV","AC"],
        state : "Himachal"
    },
    {
        ///5///
        img : "images/hotels/hotel5.jpeg",
        name : "Pears Tree Deluxe Suite 2 Bed Rooms",
        location : "Kodaikanal, Tamil Nadu, India | K.C.Homes",
        type : "APARTMENT",
        guests_allowed : "MAX 5 GUESTS",
        price : 7888,
        map : "images/hotels/map5.png",
        faci : ["WIFI","TV","AC"],
        state : "Tamil Nadu"
    },
    {
        ////6
        img : "images/hotels/hotel6.jpeg",
        name : "Room Accommodation In A Homestay",
        location : "Bir, Himachal Pradesh, India | Bajinath",
        type : "PRIVATE ROOM",
        guests_allowed : "MAX 3 GUESTS",
        price : 3888,
        map : "images/hotels/map6.png",
        faci : ["WIFI","TV"],
        state : "Himachal"
    },
    {
        ////7
        img : "images/hotels/hotel7.jpeg",
        name : "La Gardenia Boutique Home",
        location : "Dehradun, Uttarakhand, India | Rajpur",
        type : "APARTMENT",
        guests_allowed : "MAX 5 GUESTS",
        price : 9888,
        map : "images/hotels/map7.png",
        faci : ["WIFI","TV"],
        state : "Uttarakhand"
    },
    {
        ///8
        img : "images/hotels/hotel8.jpeg",
        name : "Garden View Eco Hut",
        location : "Betalbatim, Goa, India",
        type : "Villa",
        guests_allowed : "MAX 5 GUESTS",
        price : 7888,
        map : "images/hotels/map8.png",
        faci : ["WIFI","TV","AC"],
        state : "Betalbatim"
    },
    {
        ////9
        img : "images/hotels/hotel9.jpeg",
        name : "Three Bhk Villa In Mahabaleshwar",
        location : "Siolim, Goa, India | Marna",
        type : "Villa",
        guests_allowed : "MAX 10 GUESTS",
        price : 9888,
        map : "images/hotels/map9.png",
        faci : ["WIFI","TV"],
        state : "Assam"
    },
    {
        /////10
        img : "images/hotels/hotel10.jpeg",
        name : "Exclusive Luxury Pool Villa",
        location : "Lonavala, Maharashtra, India | Della Adventure",
        type : "Villa",
        guests_allowed : "MAX 6 GUESTS",
        price : 2088,
        map : "images/hotels/map10.png",
        faci : ["WIFI","TV","AC"],
        state : "Maharashtra"
    },
    {
        ///11
        img : "images/hotels/hotel11.jpeg",
        name : "Deluxe Room",
        location : "Betalbatim, Goa, India",
        type : "PRIVATE ROOM",
        guests_allowed : "MAX 3 GUESTS",
        price : 8888,
        map : "images/hotels/map11.png",
        faci : ["WIFI","TV","AC"],
        state : "Bengal"
    },
    {
        ///12
        img : "images/hotels/hotel12.jpeg",
        name : "Cozy 2 Bhk Villa In Lonavala With Lounge Pool",
        location : "Lonavala, Maharashtra, India | Tungarli",
        type : "Villa",
        guests_allowed : "MAX 5 GUESTS",
        price : 12888,
        map : "images/hotels/map12.png",
        faci : ["WIFI","TV","AC"],
        state : "Kerala"
    },
    {
      //////  /13
        img : "images/hotels/hotel13.jpeg",
        name : "3bhk Luxury Villa",
        location : "Manali, Himachal Pradesh, India | Naggar",
        type : "RESORT",
        guests_allowed : "MAX 6 GUESTS",
        price : 5888,
        map : "images/hotels/map13.png",
        faci : ["WIFI","TV"],
        state : "Vizag"
    },
    {
        ////14
        img : "images/hotels/hotel14.jpeg",
        name : "Pinewood Cottage - Your Home Amidst Nature",
        location : "Dehradun, Uttarakhand, India | Mussoorie",
        type : "HOMESTAY",
        guests_allowed : "MAX 6 GUESTS",
        price : 6088,
        map : "images/hotels/map14.png",
        faci : ["WIFI","TV"],
        state : "Uttarakhand"
    },
    {
        ////15
        img : "images/hotels/hotel15.jpeg",
        name : "A'Lor (Homestay)",
        location : "Sodiem Siolim, Goa, India | Holy Cross School Siolim",
        type : "PRIVATE ROOM",
        guests_allowed : "MAX 4 GUESTS",
        price : 8888,
        map : "images/hotels/map1.png",
        faci : ["WIFI","TV","AC"],
        state : "Goa"
    },
    {
        ////16
        img : "images/hotels/hotel15.jpeg",
        name : "Independent Rooms Overlooking The Beautiful Mullayanagiri Mountains",
        location : "Chikmagalur, Karnataka, India",
        type : "PRIVATE ROOM",
        guests_allowed : "MAX 4 GUESTS",
        price : 7088,
        map : "images/hotels/map2.png",
        faci : ["WIFI","TV"],
        state : "Karnataka"
    },
] 

console.log(hotels)
 let top_cont = document.querySelector("#top_cont")

 function display(data){
    data.forEach((ele) => {
        let div = document.createElement("div")
        div.setAttribute("id","child_div")

        

        let imge = document.createElement("img")
        imge.setAttribute("src",ele.img)
        imge.setAttribute("id","adjustit")
        imge.addEventListener("click",function(){
            window.location.href="show.html"
            localStorage.setItem("selected_Property",JSON.stringify(ele))
        })
        let state = document.createElement("p")
        state.innerText = ele.state
        state.setAttribute("id","realone")

        let name = document.createElement("p")
        name.innerText=ele.name

        let loca = document.createElement("p")
        loca.innerText= "Location: "+ele.location;

        let type = document.createElement("p")
        type.innerText = "Type: "+ele.type;

        let guests = document.createElement("p")
        guests.innerText= "Limit: "+ele.guests_allowed

        let amount = document.createElement("p")
        amount.innerText= "Price for each: "+ele.price

        div.append(imge,state,name,loca,type,guests,amount)
        top_cont.append(div)

        

    });
 }
 display(hotels)

 /////--------------------------------------------------- scroll bar code--------------------////////////////////////////
let button = document.getElementById("right")
button.onclick = function(){
    var container = document.getElementById("top_cont");
    sideScroll(container,"right",25,100,10)
};

var back = document.getElementById("left");
back.onclick = function (){
    var container = document.getElementById("top_cont");
    sideScroll(container,"left",25,100,10);
};
function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function (){
        if(direction === "left"){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    },speed);
}

let topmid = [
    {
        img : "images/img1.jpeg",
        name : "Kenisha Holiday Home",
        loc : "Pawasalwadi,Maharastra",
        msg : "Beautifully Designed Designer Villas Off The Mumbai Pune Expressway. Very Close To Adlabs Imagica.",
        img1 : "images/img11/img1.jpeg",
        img2 : "images/img11/img2.jpeg",
        img3 : "images/img11/img3.jpeg",
        img4 : "images/img11/img4.jpeg",
        img5 : "images/img11/img5.jpeg",
        img6 : "images/img11/img6.jpeg",
        img7 : "images/img11/img7.jpeg",
        img8 : "images/img11/img8.jpeg",
        img9 : "images/img11/img9.jpeg",
        map : "images/img11/map.png"
    },
    {
        img : "images/img2.jpeg",
        name : "Tata Rio De Goa",
        loc : "Dabolim,Goa",
        msg : "Luxury Apartments 15mins From Dabolim Airport. Brought To You By The House Of Tata.",
        img1 : "images/img22/img1.jpeg",
        img2 : "images/img22/img2.jpeg",
        img3 : "images/img22/img3.jpeg",
        img4 : "images/img22/img4.jpeg",
        img5 : "images/img22/img5.jpeg",
        img6 : "images/img22/img6.jpeg",
        img7 : "images/img22/img7.jpeg",
        img8 : "images/img22/img8.jpeg",
        img9 : "images/img22/img9.jpeg",
        map : "images/img22/map.png"
    },
    {
        img : "images/img3.jpeg",
        name : "White Villas Shahapur",
        loc : "Shahapur, Maharashtra",
        msg : "Beautifully Designed Designer Villas Off The Mumbai Pune Expressway. Very Close To Adlabs Imagica.",
        img1 : "images/img22/img1.jpeg",
        img2 : "images/img22/img2.jpeg",
        img3 : "images/img22/img3.jpeg",
        img4 : "images/img22/img4.jpeg",
        img5 : "images/img22/img5.jpeg",
        img6 : "images/img22/img6.jpeg",
        img7 : "images/img22/img7.jpeg",
        img8 : "images/img22/img8.jpeg",
        img9 : "images/img22/img9.jpeg",
        map : "images/img22/map.png"
    },
    {
        img : "images/img4.jpeg",
        name : "White Villas Kasara",
        loc : "Kasara, Maharashtra",
        msg : "Beautifully Designed Designer Villas Off The Mumbai Pune Expressway. Very Close To Adlabs Imagica.",
        img1 : "images/img11/img1.jpeg",
        img2 : "images/img11/img2.jpeg",
        img3 : "images/img11/img3.jpeg",
        img4 : "images/img11/img4.jpeg",
        img5 : "images/img11/img5.jpeg",
        img6 : "images/img11/img6.jpeg",
        img7 : "images/img11/img7.jpeg",
        img8 : "images/img11/img8.jpeg",
        img9 : "images/img11/img9.jpeg",
        map : "images/img11/map.png"
    },
    {
        img : "images/img5.jpeg",
        name : "Puravankara Adora De Goa",
        loc : "Dabolim, Goa",
        msg : "Luxury Apartments 15mins From Dabolim Airport. Brought To You By The House Of Tata.",
        img1 : "images/img22/img1.jpeg",
        img2 : "images/img22/img2.jpeg",
        img3 : "images/img22/img3.jpeg",
        img4 : "images/img22/img4.jpeg",
        img5 : "images/img22/img5.jpeg",
        img6 : "images/img22/img6.jpeg",
        img7 : "images/img22/img7.jpeg",
        img8 : "images/img22/img8.jpeg",
        img9 : "images/img22/img9.jpeg",
        map : "images/img22/map.png"
    },
    {
        img : "images/img6.jpeg",
        name : "Dreamz Shiroda",
        loc : "Shiroda, Maharashtra",
        msg : "Beautifully Designed Designer Villas Off The Mumbai Pune Expressway. Very Close To Adlabs Imagica.",
        img1 : "images/img11/img1.jpeg",
        img2 : "images/img11/img2.jpeg",
        img3 : "images/img11/img3.jpeg",
        img4 : "images/img11/img4.jpeg",
        img5 : "images/img11/img5.jpeg",
        img6 : "images/img11/img6.jpeg",
        img7 : "images/img11/img7.jpeg",
        img8 : "images/img11/img8.jpeg",
        img9 : "images/img11/img9.jpeg",
        map : "images/img11/map.png"
    },
    {
        img : "images/img7.jpeg",
        name : "Pristine Bay Mahabalipuram",
        loc : "Thenpattinam, Tamil Nadu",
        msg : "Luxury Apartments 15mins From Dabolim Airport. Brought To You By The House Of Tata.",
        img1 : "images/img22/img1.jpeg",
        img2 : "images/img22/img2.jpeg",
        img3 : "images/img22/img3.jpeg",
        img4 : "images/img22/img4.jpeg",
        img5 : "images/img22/img5.jpeg",
        img6 : "images/img22/img6.jpeg",
        img7 : "images/img22/img7.jpeg",
        img8 : "images/img22/img8.jpeg",
        img9 : "images/img22/img9.jpeg",
        map : "images/img22/map.png"
    }
]

let usesamedata = document.querySelector(".top_two")

function displaytopmid(data){
    data.forEach((ele) => {
        let div = document.createElement("div")
        div.setAttribute("id","topchild_div")

        let imgdiv = document.createElement("div")
        imgdiv.setAttribute("id","topadjustit")
        let imge = document.createElement("img")
        imge.setAttribute("src",ele.img)
         imgdiv.append(imge)
        imge.addEventListener("click",function(){
            window.location.href="show2.html"
            localStorage.setItem("mid-selected",JSON.stringify(ele))
        })
        let name = document.createElement("p")
        name.innerText=ele.name
        name.setAttribute("class","centered")

        

        div.append(imgdiv,name)
        usesamedata.append(div)

    });
 }
 displaytopmid(topmid)

      



    

   




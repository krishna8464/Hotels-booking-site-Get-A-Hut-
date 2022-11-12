
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
        img1 : "images/img33/img1.jpeg",
        img2 : "images/img33/img2.jpeg",
        img3 : "images/img33/img3.jpeg",
        img4 : "images/img33/img4.jpeg",
        img5 : "images/img33/img5.jpeg",
        img6 : "images/img33/img6.jpeg",
        img7 : "images/img33/img7.jpeg",
        img8 : "images/img33/img8.jpeg",
        img9 : "images/img33/img9.jpeg",
        map : "images/img33/map.png"
    },
    {
        img : "images/img4.jpeg",
        name : "White Villas Kasara",
        loc : "Kasara, Maharashtra",
        msg : "Beautifully Designed Designer Villas Off The Mumbai Pune Expressway. Very Close To Adlabs Imagica.",
        img1 : "images/img44/img1.jpeg",
        img2 : "images/img44/img2.jpeg",
        img3 : "images/img44/img3.jpeg",
        img4 : "images/img44/img4.jpeg",
        img5 : "images/img44/img5.jpeg",
        img6 : "images/img44/img6.jpeg",
        img7 : "images/img44/img7.jpeg",
        img8 : "images/img44/img8.jpeg",
        img9 : "images/img44/img9.jpeg",
        map : "images/img44/map.png"
    },
    {
        img : "images/img5.jpeg",
        name : "Puravankara Adora De Goa",
        loc : "Dabolim, Goa",
        msg : "Luxury Apartments 15mins From Dabolim Airport. Brought To You By The House Of Tata.",
        img1 : "images/img55/img1.jpeg",
        img2 : "images/img55/img2.jpeg",
        img3 : "images/img55/img3.jpeg",
        img4 : "images/img55/img4.jpeg",
        img5 : "images/img55/img5.jpeg",
        img6 : "images/img55/img6.jpeg",
        img7 : "images/img55/img7.jpeg",
        img8 : "images/img55/img8.jpeg",
        img9 : "images/img55/img9.jpeg",
        map : "images/img55/map.png"
    },
    {
        img : "images/img6.jpeg",
        name : "Dreamz Shiroda",
        loc : "Shiroda, Maharashtra",
        msg : "Beautifully Designed Designer Villas Off The Mumbai Pune Expressway. Very Close To Adlabs Imagica.",
        img1 : "images/img66/img1.jpeg",
        img2 : "images/img66/img2.jpeg",
        img3 : "images/img66/img3.jpeg",
        img4 : "images/img66/img4.jpeg",
        img5 : "images/img66/img5.jpeg",
        img6 : "images/img66/img6.jpeg",
        img7 : "images/img66/img7.jpeg",
        img8 : "images/img66/img8.jpeg",
        img9 : "images/img66/img9.jpeg",
        map : "images/img66/map.png"
    },
    {
        img : "images/img7.jpeg",
        name : "Pristine Bay Mahabalipuram",
        loc : "Thenpattinam, Tamil Nadu",
        msg : "Luxury Apartments 15mins From Dabolim Airport. Brought To You By The House Of Tata.",
        img1 : "images/img77/img1.jpeg",
        img2 : "images/img77/img2.jpeg",
        img3 : "images/img77/img3.jpeg",
        img4 : "images/img77/img4.jpeg",
        img5 : "images/img77/img5.jpeg",
        img6 : "images/img77/img6.jpeg",
        img7 : "images/img77/img7.jpeg",
        img8 : "images/img77/img8.jpeg",
        img9 : "images/img77/img9.jpeg",
        map : "images/img77/map.png"
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


 ////// investorss///////////////////////////////////////////////////


 function investor(){
    window.location.href = "investor.html"
 }
      
////////////////////investors//////////////////////////////////
let holidayhom = [
    {
        cnt : "India",
        No : "3262 holiday homes"
    },
    {
        cnt : "Thailand",
        No : "1284 holiday homes"
    },
    {
        cnt : "Sri Lanka",
        No : "646 holiday homes"
    },
    {
        cnt : "Indonesia",
        No : "622 holiday homes"
    },
    {
        cnt : "Philippines",
        No : "378 holiday homes"
    },
    {
        cnt : "United Arab Emirates",
        No : "146 holiday homes"
    },
    {
        cnt : "Georgia",
        No : "102 holiday homes"
    },

    {
        cnt : "Turkey",
        No : "70 holiday homes"
    },
    {
        cnt : "Israel",
        No : "53 holiday homes"
    },

    {
        cnt : "Malaysia",
        No : "49 holiday homes"
    },
    {
        cnt : "Japan",
        No : "46 holiday homes"
    },
    {
        cnt : "Viet Nam",
        No : "37 holiday homes"
    },
    {
        cnt : "Cambodia",
        No : "26 holiday homes"
    },
    {
        cnt : "Nepal",
        No : "22 holiday homes"
    },
    {
        cnt : "Maldives",
        No : "19 holiday homes"
    },
    {
        cnt : "Taiwan, Province Of China",
        No : "17 holiday homes"
    },
    {
        cnt : "Hong Kong Special Administrative Region Of China",
        No : "16 holiday homes"
    },
    {
        cnt : "Republic Of Korea",
        No : "12 holiday homes"
    },
    {
        cnt : "India",
        No : "3262 holiday homes"
    },
    {
        cnt : "Oman",
        No : "7 holiday homes"
    },
    {
        cnt : "Bangladesh",
        No : "5 holiday homes"
    }
]


 let sencnt = [
    {
        cnt : "Croatia",
        No : "15594 holiday homes"
    },
    {
        cnt : "Denmark",
        No : "14385 holiday homes"
    },
    {
        cnt : "Italy",
        No : "9268 holiday homes"
    },
    {
        cnt : "Spain",
        No : "4737 holiday homes"
    },

    {
        cnt : "France",
        No : "3791 holiday homes"
    },
    {
        cnt : "Switzeland",
        No : "2770 holiday homes"
    },
    {
        cnt : "Finland",
        No : "2086 holiday homes"
    },

    {
        cnt : "Germany",
        No : "1910 holiday homes"
    },
    {
        cnt : "Hungary",
        No : "1260 holiday homes"
    },
    {
        cnt : "Austria",
        No : "1193 holiday homes"
    },
    {
        cnt : "Greece",
        No : "941 holiday homes"
    },
    {
        cnt : "United Kingdom Of Great Britain And Northern Ireland",
        No : "899 holiday homes"
    },
    {
        cnt : "Sweden",
        No : "677 holiday homes"
    },
    {
        cnt : "Cyprus",
        No : "593 holiday homes"
    },

    {
        cnt : "Czech Republic",
        No : "585 holiday homes"
    },
    {
        cnt : "Portugal",
        No : "566 holiday homes"
    },
    {
        cnt : "Norway",
        No : "513 holiday homes"
    },
    {
        cnt : "Netherlands",
        No : "491 holiday homes"
    },
    {
        cnt : "Poland",
        No : "308 holiday homes"
    },

    {
        cnt : "Belgium",
        No : "270 holiday homes"
    },
    {
        cnt : "Slovakia",
        No : "141 holiday homes"
    },
    {
        cnt : "Slovenia",
        No : "199 holiday homes"
    },
    {
        cnt : "Ireland",
        No : "68 holiday homes"
    },
    {
        cnt : "Malta",
        No : "64 holiday homes"
    },
    {
        cnt : "Bugria",
        No : "63 holiday homes"
    },
    {
        cnt : "Ukraine",
        No : "47 holiday homes"
    },
    {
        cnt : "Montenegro",
        No : "39 holiday homes"
    },
    {
        cnt : "Albania",
        No : "34holiday homes"
    },

    {
        cnt : "Bosnia And Herzegovina",
        No : "25holiday homes"
    },
    {
        cnt : "Romania",
        No : "17 holiday homes"
    },
    {
        cnt : "Luxembourg",
        No : "12 holiday homes"
    },
    {
        cnt : "Serbia",
        No : "7 holiday homes"
    },
    {
        cnt : "Iceland",
        No : "6 holiday homes"
    },
    {
        cnt : "Lithuania",
        No : "6 holiday homes"
    },
    {
        cnt : "The Former Yugosiav Republic Of Macedonia",
        No : "6 holiday homes"
    },
    {
        cnt : "Andorra",
        No : "5 holiday homes"
    }
 ]

 let thirdcnt = [
    {
        cnt : "United States Of America",
        No : "3017 holiday homes"
    },
    {
        cnt : "Mexixo",
        No : "569 holiday homes"
    },
    {
        cnt : "Dominican Republic",
        No : "365 holiday homes"
    },
    {
        cnt : "Cuba",
        No : "257 holiday homes"
    },
    {
        cnt : "Canada",
        No : "164 holiday homes"
    },
    {
        cnt : "Costa Rica",
        No : "147 holiday homes"
    },
    {
        cnt : "Jamaica",
        No : "115 holiday homes"
    },

    {
        cnt : "Aruba",
        No : "37 holiday homes"
    },
    {
        cnt : "Puerto Rico",
        No : "37 holiday homes"
    },
    {
        cnt : "Saint Martin",
        No : "34 holiday homes"
    },
    {
        cnt : "Sint Maarten",
        No : "10 holiday homes"
    },
    {
        cnt : "Belize",
        No : "9 holiday homes"
    },

    {
        cnt : "Panama",
        No : "9 holiday homes"
    },
    {
        cnt : "Curacao",
        No : "6 holiday homes"
    }
 ]

 let fortcnt = [
    {
        cnt : "Colombia",
        No : "198 holiday homes"
    },
    {
        cnt : "Chile",
        No : "44 holiday homes"
    },
    {
        cnt : "Brazil",
        No : "39 holiday homes"
    },
    {
        cnt : "Argentina",
        No : "28 holiday homes"
    },
    {
        cnt : "Peru",
        No : "15holiday homes"
    },
    {
        cnt : "Ecuador",
        No : "7 holiday homes"
    }

 ]

 let fifcnt = [
    {
        cnt : "Kenya",
        No : "613holiday homes"
    },
    {
        cnt : "south Africa",
        No : "277 holiday homes"
    },
    {
        cnt : "Morocco",
        No : "197 holiday homes"
    },
    {
        cnt : "Uganda",
        No : "194 holiday homes"
    },

    {
        cnt : "Mauritius",
        No : "71 holiday homes"
    },
    {
        cnt : "Tanzania",
        No : "70 holiday homes"
    },
    {
        cnt : "Rwanda",
        No : "21 holiday homes"
    },

    {
        cnt : "Burundi",
        No : "19 holiday homes"
    },
    {
        cnt : "Madagascar",
        No : "14 holiday homes"
    },

    {
        cnt : "Egypt",
        No : "12 holiday homes"
    },
    {
        cnt : "Tunisia",
        No : "7 holiday homes"
    },

    {
        cnt : "Seychelles",
        No : "5 holiday homes"
    }

 ]

 let sixcnt = [
    {
        cnt : "Australia",
        No : "397 holiday homes"
    },
    {
        cnt : "New Zealand",
        No : "48 holiday homes"
    },
    {
        cnt : "French Polynesia",
        No : "18 holiday homes"
    },

 ]

    console.log(holidayhom)
    function sendit(col){
        col.forEach((ele) => {
            let div = document.createElement("div")
            let para = document.createElement("h6")
            para.innerText= ele.cnt
            let para1 =  document.createElement("p")
            para1.innerText = ele.No
            div.append(para,para1)
            document.querySelector(".contrys").append(div)

        })
    }
    function Asia(){
        document.querySelector(".contrys").innerHTML=""
        sendit(holidayhom)
    }

    sendit(holidayhom)
     function Europe(){
        document.querySelector(".contrys").innerHTML=""
        sendit(sencnt)
     }

     function Northaamerica(){
        document.querySelector(".contrys").innerHTML=""
        sendit(thirdcnt)
     }

     function Southamerica(){
        document.querySelector(".contrys").innerHTML="";
        sendit(fortcnt)
     }

     function Africa(){
        document.querySelector(".contrys").innerHTML="";
        sendit(fifcnt)
     }

     function Oceanta(){
        document.querySelector(".contrys").innerHTML="";
        sendit(sixcnt)
     }


 
    

   




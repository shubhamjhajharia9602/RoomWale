const params = new URLSearchParams(window.location.search);
const roomId = params.get("id");
console.log(roomId); 

const rooms = {

    1: {
        title: "Furnished Room",
        price: "₹ 6,500 / Month",
        location: "📍 Vaishali Nagar, Jaipur",
        image: "../Images/Room1..png"
    },

    2: {
        title: "Relaxed Room",
        price: "₹ 8,000 / Month",
        location: "📍 Mansarovar, Jaipur",
        image: "../Images/Room2.png"
    },

    3: {
        title: "Cozy Studio",
        price: "₹ 9,500 / Month",
        location: "📍 Malviya Nagar, Jaipur",
        image: "../Images/Room3.png"
    },

    4: {
        title: "PG Room",
        price: "₹ 12,000 / Month",
        location: "📍 Jagatpura, Jaipur",
        image: "../Images/Room4.png"
    },

    5: {
        title: "Double Sharing Room",
        price: "₹ 7,300 / Month",
        location: "📍 Dadi Ka Phatak, Jaipur",
        image: "../Images/Room5.png"
    }

};
const room = rooms[roomId];
document.getElementById("roomTitle").innerText =
room.title;

document.getElementById("roomPrice").innerText =
room.price;

document.getElementById("roomLocation").innerText =
room.location;

document.getElementById("mainImage").src =
room.image;


function changeImage(imageSrc){
    document.getElementById("mainImage").src = imageSrc;
};



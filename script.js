function searchRooms() {

    let searchValue =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let rooms =
    document.querySelectorAll(".room-card");

    let visibleRooms = 0;

    rooms.forEach(function(room){

        let location =
        room.dataset.location.toLowerCase();

        if(location.includes(searchValue)){

            room.style.display = "";

            visibleRooms++;

        }
        else{

            room.style.display = "none";

        }

    });

    if(visibleRooms === 1){
    document.getElementById("roomCount").innerHTML = "1 Room found";
}
else{
    document.getElementById("roomCount").innerHTML = visibleRooms + " Rooms Found";
}

}


function sendMessage(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email ==="" || message === ""){
        alert("Please fill all Fields!!")
    }
    else{
        alert("Message Sent Successfully! ✅ ")
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
    }
}


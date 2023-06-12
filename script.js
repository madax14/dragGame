const draggbles = document.querySelectorAll(".dragMe");
const dropZone = document.querySelectorAll(".dropZone");
const dropSound = document.getElementById("dropSound");
const dropWrong = document.getElementById("dropWrong");
const btn = document.querySelector(".btn");
var draggedCount = 0; //to count how many img has been dragged to drogZone

draggbles.forEach(drag => {
    drag.addEventListener("dragstart", (event) =>{
        event.dataTransfer.setData("text/plain", event.target.id)
    });
});

dropZone.forEach(zone => {
    const dropZoneId = zone.id;
    // console.log(dropZoneId)
    zone.addEventListener("dragover", (event)=>{
        event.preventDefault(); 
        // console.log(event)
    });

    zone.addEventListener("dragenter", (event)=>{
        event.preventDefault(); 
        event.target.classList.add("yellowBorder");
    });

    zone.addEventListener("dragleave", (event)=>{
        event.preventDefault(); 
        event.target.classList.remove("yellowBorder");
    });

    zone.addEventListener("drop", (event)=>{
        event.preventDefault();
        event.target.classList.remove("yellowBorder");

        const draggedId = event.dataTransfer.getData("text/plain")
        //return the element that is in DATA transfer, which is the img
        const draggedElement = document.getElementById(draggedId);
        
        const draggedClass = draggedElement.classList[1];
        // console.log(draggedClass);
        if (draggedClass === dropZoneId) {
            console.log("true")
            //To append the img to zoneDrop if they match.
            zone.appendChild(draggedElement);
            zone.style.opacity = "1";
            dropSound.play();
            draggedCount++ //Increment the dropped count

            // When the user drag all images. Show btn replay & play engine sound
            if (draggedCount === draggbles.length) {
                console.log("You Won!")
                btn.style.display = "block"
                var carEngine = new Audio("/public/sounds/CarEngine.mp3");
                carEngine.play();
                // zone.target.classList.add("moveOut");
             }   
         // if place the img in wrong spot, play sound "wrong"
        } else {
            console.log("false")
            dropWrong.play();
        }
    });
    
});





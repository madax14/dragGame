const draggbles = document.querySelectorAll(".dragMe");
const dropZone = document.querySelectorAll(".dropZone");
// console.log(draggbles)
// console.log(dropZone)

draggbles.forEach(drag => {
    drag.addEventListener("dragstart", (event) =>{
        event.dataTransfer.setData("text/plain", event.target.id)
        // console.log(drag.id)
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
        
        //To append the zone div to the img dragged if them match.
        const draggedClass = draggedElement.classList[1];
        if (draggedClass === dropZoneId) {
            console.log("true")
            zone.appendChild(draggedElement);
            zone.style.opacity = "1";
            
        } else {
            console.log("false")
            // alert("Wrong place")
            // zone.style.border = "red"
        }
        
    });


    
});





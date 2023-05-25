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
    zone.addEventListener("dragover", (event)=>{
        event.preventDefault();        
    });
    zone.addEventListener("drop", (event)=>{
        event.preventDefault();
        // console.log(zone.id)
        // console.log(event)
        const draggedId = event.dataTransfer.getData("text/plain")
        const draggedElement = document.getElementById(draggedId);
        // console.log(draggedElement)

        //To append the zone div to the img dragged
        const appended = zone.appendChild(draggedElement);

        const draggedClass = draggedElement.classList[1];
        const dropId = zone.id;
        if (draggedClass === dropId) {
            console.log("true")
        } else {
            console.log("false")
        }

        
        return appended;
    });


    
});





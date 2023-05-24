const draggbles = document.querySelectorAll(".dragMe");
const dropZone = document.querySelectorAll(".dropZone");
console.log(draggbles)
// console.log(dropZone)

draggbles.forEach(drag => {
    drag.addEventListener("dragstart", (event) =>{
        // console.log(event)
        event.dataTransfer.setData("text/plain", event.target.id)
    });
});

dropZone.forEach(zone => {
    zone.addEventListener("dragover", (event)=>{
        event.preventDefault();
    });
    zone.addEventListener("drop", (event)=>{
        event.preventDefault();
        console.log(event)
        const draggbleId = event.dataTransfer.getData("text/plain")
        const draggbleElement = document.getElementById(draggbleId);
        
        zone.appendChild(draggbleElement)
    })
});





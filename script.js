const draggbles = document.querySelectorAll(".dragMe");
const dropZone = document.querySelectorAll(".dropZone");
// console.log(draggbles)
// console.log(dropZone)

draggbles.forEach(drag => {
    drag.addEventListener("dragstart", (event) =>{
        event.dataTransfer.setData("text/plain", event.target.id)
    });
});

dropZone.forEach(zone => {
    zone.addEventListener("dragover", (event)=>{
        event.preventDefault();
    });
    zone.addEventListener("drop", (event)=>{
        event.preventDefault();
        const draggedId = event.dataTransfer.getData("text/plain")
        const draggedElement = document.getElementById(draggedId);
        //To append the zone div to the img dragged
        const appended = zone.appendChild(draggedElement);

        //Strore the position of the dragged img
        const position = appended.getBoundingClientRect();
        const positionToStore = [{ left: position.left, top: position.top }]
        localStorage.setItem(draggedId, JSON.stringify(positionToStore))

        return appended;
    });

   ///////Retore the position on refresh page//////
    const draggedId = zone.firstChild?.id;
    const storedPosition = localStorage.getItem(draggedId);
    if (storedPosition) {
        const position = JSON.parse(storedPosition);
        zone.firstChild.style.left = position.left + "px";
        zone.firstChild.style.top = position.top + "px";
    }
    
});





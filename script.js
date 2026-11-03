//your JS code here. If required.
let box=document.querySelectorAll(".square");
for(let i=0;i<box.length;i++){
	box[i].addEventListener("mouseover",(e)=>{
		let hoveredbox=e.target.id;
		for(let i=0;i<box.length;i++){
			if(box[i].id!=hoveredbox){
				box[i].style.backgroundColor="#6F4E37";
			}
		}
	}
	for(let i=0;i<box.length;i++){						
	box.addEventListener("mouseout",(e)=>{	
			
		box.style.backgroundColor="#E6E6FA";
			
})
	}
	

const circles = document.querySelectorAll('.circle');

// SOLVED THE PROBLEM
for (var i = 0; i < circles.length; i++) {    
    circles[i].addEventListener('click', ((j) => {         
    return function() {
    		let sto = 1;
    		for (let ind = j; ind < circles.length; ind ++){
    			// Turning on the Circles up to the end of the array.
    			setTimeout(() =>{
    				circles[ind].classList.toggle('animColor');
    				// Turn each one off immediately after they'had been turned on.
    				setTimeout(()=>{
    					circles[ind].classList.toggle('animColor')
    				},1000)
    			},(sto++)* 1000)
   			 }
   			 // Start turning 'em on from beginning to where they started blinking!
			for (let ind = 0; ind <= j; ind ++){
				setTimeout(() =>{
					circles[ind].classList.toggle('animColor');
					setTimeout(()=>{
						circles[ind].classList.toggle('animColor')
					},1000)
				},(sto++)* 1000)
			}
    }}
  	)(i))
}


const creation = (a , b) => {
	
}

const deletion = (b) => {
	
}

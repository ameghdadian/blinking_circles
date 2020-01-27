const circles = document.querySelectorAll('.circle');

// SOLVED THE PROBLEM
for (let i = 0; i < circles.length; i++) {    
    circles[i].addEventListener('click', () => {         
    		let sto = 1;
    		for (let ind = i; ind < circles.length; ind ++){
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
			for (let ind = 0; ind <= i; ind ++){
				setTimeout(() =>{
					circles[ind].classList.toggle('animColor');
					setTimeout(()=>{
						circles[ind].classList.toggle('animColor')
					},1000)
				},(sto++)* 1000)
			}
    }
  	)
}

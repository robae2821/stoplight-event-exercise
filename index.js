(function() {
  'use strict';

  // YOUR CODE HERE
  console.log("java script working");

  // Grab all The Buttons
  const stopButton = document.querySelector('#stopButton')
  // grab slow button here
  const slowButton = document.querySelector('#slowButton')
  // grab go button here
  const goButton = document.querySelector('#goButton')

  // Change the lights
  function toggleLight(light){
    if (light === "stop") {
      console.log("Toggling the STOP light...")
      const stopLight = document.querySelector('#stopLight')
      stopLight.classList.toggle("stop");
    } else if (light === "slow"){
      console.log("Toggling the SLOW light...")
      // grab the slow light
      const slowLight = document.querySelector('#slowLight')
      // change the slow light's class
      slowLight.classList.toggle("slow");
    } else if (light === "go"){
      console.log("Toggling the GO light...")
      // grab the go light
      const goLight = document.querySelector('#goLight')
      // change the go light's class
      goLight.classList.toggle("go");
    } else {
      console.log("invalid choice")
    }
  }

  // Add event listeners
  stopButton.addEventListener("click", () => toggleLight("stop"))
  // add listener to slow
  slowButton.addEventListener("click", () => toggleLight("slow"))
  // add listener to go
  goButton.addEventListener("click", () => toggleLight("go"))


  // PART 2
  stopButton.addEventListener('mouseenter', () => console.log(`Entered ${stopButton.textContent} button`))
  stopButton.addEventListener('mouseleave', () => console.log(`Left ${stopButton.textContent} button`))
  // add for slow button
  slowButton.addEventListener('mouseenter', () => console.log(`Entered ${slowButton.textContent} button`))
  slowButton.addEventListener('mouseleave', () => console.log(`Left ${slowButton.textContent} button`))
  // add for go button
  goButton.addEventListener('mouseenter', () => console.log(`Entered ${goButton.textContent} button`))
  goButton.addEventListener('mouseleave', () => console.log(`Left ${goButton.textContent} button`))

})();

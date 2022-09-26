    //code for sliders and their relation with volume values
    let firstSlider = document.getElementById("myRange1");
    let outputOne = document.getElementById('volume1');
    outputOne.textContent = firstSlider.value;

    firstSlider.oninput = function(){
    	outputOne.textContent = this.value;
    }

    let secondSlider = document.getElementById("myRange2");
    let outputTwo = document.getElementById("volume2");
    outputTwo.textContent = secondSlider.value;

    secondSlider.oninput = function(){
    	outputTwo.textContent = this.value;
    }


    let title = document.getElementById('title');
    let settingMenu = document.querySelector('.setting-menu');
    let settings = document.querySelector('.setting');
    let closeIcon = document.querySelector('#close-icon');
    let firstBody = document.querySelector('.first-body');// From progress bar to add task div
    let pdro = document.querySelector('.pdro'); // variable for choice pomodoro
    let sB = document.querySelector('.s-b'); // variable for choice  short break
    let lB = document.querySelector('.l-b'); // variable for choice  long break
    let topDiv = document.querySelector('.top-wrapper'); // variable for the div that wraps the top since it's not in firstbody
    let topDiv2 = document.querySelector('.top'); // variable for top div itself
    let okButton = document.querySelector('.ok-button');
    let currentBackgroundColor;
   
    closeIcon.addEventListener('click', () => {
    		settingMenu.style.zIndex = "-1";
    		firstBody.style.backgroundColor = currentBackgroundColor;
    	});

    okButton.addEventListener('click', () => {
    	settingMenu.style.zIndex = "-1";
    });
    

    settings.addEventListener('click', () => {
            settingMenu.style.zIndex = "1";

    });
    

    var startStop = document.querySelector('.start-stop'); //start and stop button
    let clock = document.getElementById('clock');
    let faviconLink = document.getElementById('faviconLink');
    let countDown; // variable to set interval
    let breakTime; //varibale which gets the input value of either pomodoro,long break or short break
    let page; // 1 pomodoro, 2 shortbreak, 3 longbreak
    var state = 0; // 0 idle, 1 running, 2 stop, 3 resumed
    let time; // time variable which decreases and latet on converted to correct format
    let progress = document.getElementById('progress-bar');
    let longbreakCount = 0; //Variable that counts the number of short breaks before a long break is induced

    
    //Fonction when  the page is loaded to initialise the page at pomodoro

window.addEventListener('load', () => {
	page = 1;
	console.log(state);
});

//Code which checks if the timer is running to use a confirm popup message to ask the user if he wants to change pages while the clock is running

if (state === 3) {

                pdro.addEventListener('click', () => { 
    	if (confirm("The timer is still running are you sure you want to swith? ;-)")){
    		            page = 1;
    		            state = 0;
    					clearInterval(countDown);
    					firstBody.style.backgroundColor = "rgb(227, 66, 52)"; //changes the backgroundcolor
    	                currentBackgroundColor = "rgb(227, 66, 52)";
    	                faviconLink.setAttribute("href", "faviconp.ico");
    	                switchButton = 1;
    	                startStop.style.color = "rgb(227, 66, 52)";
    	                lB.style.backgroundColor = null;
    	                pdro.style.backgroundColor = "rgba(0,0,0,0.2)"; // changes the shade of the small divs indicating on which page we are
    	                sB.style.backgroundColor = null;
    	                console.log(page);
    	                startStop.textContent = "START";
    	                let breakTime = document.getElementById('pomodoro').value;
    	                clock.innerHTML = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00"; 
    	                title.textContent = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00";

    	}
    });

    			sB.addEventListener('click', () => {
    				if (confirm("The timer is still running are you sure you want to swith? ;-)")){
    				    page = 2;
    				    state = 0;
    					clearInterval(countDown);
    					firstBody.style.backgroundColor = "rgb(46,139,87)";
    	                currentBackgroundColor = "rgb(46,139,87)";
    	                faviconLink.setAttribute("href", "favicons.ico");
    	                switchButton = 1;
    	                startStop.style.color = "rgb(46,139,87)";    	                
    	                lB.style.backgroundColor = null;
    	                sB.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                console.log(page);
    	                pdro.style.backgroundColor = "transparent";
    	                startStop.textContent = "START";
    	                let breakTime = document.getElementById('s-break').value;
    	                clock.innerHTML = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00"; 
    	                title.textContent = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00";

    	              
                    }


    				});
 

    			 lB.addEventListener('click',() => {
    				if (confirm("The timer is still running are you sure you want to swith? ;-)")){
    					page = 3;
    					state = 0;
    					clearInterval(countDown);
    					firstBody.style.backgroundColor = "rgb(8, 143, 143)";
    	                currentBackgroundColor = "rgb(8, 143, 143)";
    	                startStop.style.color = "rgb(8, 143, 143)";
    	                faviconLink.setAttribute("href", "favicon.ico");
    	                lB.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                sB.style.backgroundColor = null;
    	                pdro.style.backgroundColor = "transparent";
    	                console.log(page);
    	                switchButton = 1;
    	                startStop.textContent = "START";
    	                let breakTime = document.getElementById('l-break').value;
    	                clock.innerHTML = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00"; 
    	                title.textContent = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00";

    	                console.log(window.getComputedStyle(firstBody).getPropertyValue("background-color") === "rgb(8, 143, 143)");


    				}
    			});
               

               //Code which changes the page without popup since the clock is not running

    			} else if (state === 0 || state === 2){

    				pdro.addEventListener('click', () => {
    					page = 1;
    					state = 0;
    					clearInterval(countDown);
    					firstBody.style.backgroundColor = "rgb(227, 66, 52)";
    					topDiv.style.backgroundColor = "rgb(227, 66, 52)";
    					topDiv2.style.backgroundColor = "rgb(227, 66, 52)";
    	                currentBackgroundColor = "rgb(227, 66, 52)";
    	                startStop.style.color = "rgb(227, 66, 52)";
    	                faviconLink.setAttribute("href", "faviconp.ico");
    	                lB.style.backgroundColor = null;
    	                sB.style.backgroundColor = null;
    	                pdro.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                console.log(page);
    	                switchButton = 1;
    	                startStop.textContent = "START";
    	                let breakTime = document.getElementById('pomodoro').value;
    	                clock.innerHTML = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00"; 
    	                title.textContent = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00";
    				});


    				sB.addEventListener('click', () => {
    					page = 2;
    					state = 0;
    					clearInterval(countDown);
    					firstBody.style.backgroundColor = "rgb(46,139,87)";
    					topDiv.style.backgroundColor = "rgb(46,139,87)";
    					topDiv2.style.backgroundColor = "rgb(46,139,87)";
    	                currentBackgroundColor = "rgb(46,139,87)";
    	                startStop.style.color = "rgb(46,139,87)";
    	                faviconLink.setAttribute("href", "favicons.ico");
    	                lB.style.backgroundColor = null;
    	                sB.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                pdro.style.backgroundColor = "transparent";
    	                console.log(page);
    	                switchButton = 1;
    	                startStop.textContent = "START";
    	                let breakTime = document.getElementById('s-break').value;
    	                clock.innerHTML = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00"; 
    	                title.textContent = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00";
    				});

    				lB.addEventListener('click', () => {
    					page = 3;
    					state = 0;
    					clearInterval(countDown);
    					firstBody.style.backgroundColor = "rgb(8, 143, 143)";
    					topDiv.style.backgroundColor = "rgb(8, 143, 143)";
    					topDiv2.style.backgroundColor = "rgb(8, 143, 143)";
    	                currentBackgroundColor = "rgb(8, 143, 143)";
    	                startStop.style.color = "rgb(8, 143, 143)";
    	                faviconLink.setAttribute("href", "favicon.ico");
    	                lB.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                sB.style.backgroundColor = null;
    	                pdro.style.backgroundColor = "transparent";
    	                console.log(page);
    	                switchButton = 1;
    	                startStop.textContent = "START";
    	                let breakTime = document.getElementById('l-break').value;
    	                clock.innerHTML = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00"; 
    	                title.textContent = breakTime < 10 ? '0' + breakTime + ":" + "00" : breakTime + ":" +  "00";
    				});


    			} 

    

     /* Code for startStop button when clicked which verifies on which page the user is and the attributes a value to minutesToGo variable
     which takes the input the user wants for a particular section(Pomodoro,shortbreak or long break)*/

     	 startStop.addEventListener('click', () => {
     	 	if (page === 1) {
     	 		if (startStop.textContent == "START"){
     	 		startStop.textContent = "STOP";
     	 		startStop.style.boxShadow = "none";
     	 		console.log(state);
     	 		let minutesToGo = document.getElementById('pomodoro').value;
               // let time = minutesToGo * 60; 

               /*Code that verifies if the state of the clock is either at idle or paused to see if the have to reinitialise time variable
               hence restarting the clock or continuing from where it was hence resuming the clock...Note that tiime is a global variable*/
              if (state === 0){
               	time = minutesToGo * 60;
               }
               else if (state === 2) {
               	time = time;
               }
               
           	 	state = 3;

 //Function which indicates what the timer does in a nutshell
    
     function timer(){
     	
     		let minutes = Math.floor(time/60);
     		let seconds = time % 60;
     		minutes = minutes < 10 ? '0' + minutes : minutes;
     		seconds = seconds < 10 ? '0' + seconds : seconds;
     		clock.textContent = `${minutes}:${seconds}`;
     		title.textContent = `${minutes}:${seconds}`;
     		progress.style.width = 100 - Math.floor(time/(minutesToGo*60)*100) + "%";
     		time--;
     	
     	    time = time < 0 ? 0 : time;
     	    //Function that verifes if the time is over to ring the bell and change to the corresponding page
     	    checkIfOver('ES_Alarm Clock 5 - SFX Producer.mp3');
     } 
       //Execute the function timer every one second
      countDown = setInterval(timer,1000);
    }  
    else if (startStop.textContent == "STOP") {
     	 		startStop.textContent = "START";
     	 		startStop.style.boxShadow = "0px 7px 0px 0px rgba(220,220,220,1)";
     	 		state = 2;
     	 	clearInterval(countDown);
     	 }

     	} 	
     	 	});

      
     	
     	 startStop.addEventListener('click', () => {
     	 	if (page === 2 ) {
     	 		if (startStop.textContent == "START"){
     	 		startStop.textContent = "STOP";
     	 		startStop.style.boxShadow = "none";
     	 		let minutesToGo = document.getElementById('s-break').value;
     	 		if (state === 0){
               	time = minutesToGo * 60;
               }
               else if (state === 2) {
               	time = time;
               }
     	 		state = 3;
    // let time = minutesToGo * 60;

    
     function timer(){
     	
     		let minutes = Math.floor(time/60);
     		let seconds = time % 60;
     		minutes = minutes < 10 ? '0' + minutes : minutes;
     		seconds = seconds < 10 ? '0' + seconds : seconds;
     		clock.textContent = `${minutes}:${seconds}`;
     		title.textContent = `${minutes}:${seconds}`;
     		progress.style.width = 100 - Math.floor(time/(minutesToGo*60)*100) + "%";
     		time--;
     	
     	    time = time < 0 ? 0 : time;
            checkIfOver('ES_Alarm Clock 5 - SFX Producer.mp3');
     } 

     countDown = setInterval(timer,1000);

    }  
    else if (startStop.textContent == "STOP") {
     	 		startStop.textContent = "START";
     	 		state = 1;
     	 		startStop.style.boxShadow = "0px 7px 0px 0px rgba(220,220,220,1)";
     	 	clearInterval(countDown);
     	 }

     	} 
     	 	
     	 	});
     	
     	  

     	
     	 	startStop.addEventListener('click', () => {
     	 		if (page === 3){
     	 			console.log(state);
     	 		if (startStop.textContent == "START"){
     	 		startStop.textContent = "STOP";
     	 		let minutesToGo = document.getElementById('l-break').value;
     	 		if (state === 0){
               	time = minutesToGo * 60;
               }
               else if (state === 2) {
               	time = time;
               }
     	 		state = 3;
     	 		startStop.style.boxShadow = "none";
     // let time = minutesToGo * 60; 

    
     function timer(){
     	
     		let minutes = Math.floor(time/60);
     		let seconds = time % 60;
     		minutes = minutes < 10 ? '0' + minutes : minutes;
     		seconds = seconds < 10 ? '0' + seconds : seconds;
     		clock.textContent = `${minutes}:${seconds}`;
     		title.textContent = `${minutes}:${seconds}`;
     		progress.style.width = 100 - Math.floor(time/(minutesToGo*60)*100) + "%";
     		time--;
     	
     	    time = time < 0 ? 0 : time;
     	    checkIfOver('ES_Alarm Clock 5 - SFX Producer.mp3');
     } 

     countDown = setInterval(timer,1000);
    }  
    else if (startStop.textContent == "STOP") {
     	 		startStop.textContent = "START";
     	 		state = 1;
     	 		startStop.style.boxShadow = "0px 7px 0px 0px rgba(220,220,220,1)";
     	 	clearInterval(countDown);
     	 }

     	}  
     	 	
     	 	});
              
              //Function whick permits the dropdown effect by toggling the css property from display:none to display:block
     	 	function drop(){
     	 		document.getElementById('myDropdown').classList.toggle('show');
     	 	}


           // To close drop down menu bu clicking anywhere on window
     	 	window.onclick = function(event){
     	 		if (!event.target.matches('.login')){
     	 			let dropdowns = document.getElementsByClassName('dropdown-content');
     	 			for (let i = 0; i < dropdowns.length; i++){
     	 				let openDropdown = dropdowns[i];
     	 				if (openDropdown.classList.contains('show')){
     	 					openDropdown.classList.remove('show');
     	 				}
     	 			}
     	 		}
     	 	}

     	 	//Close setting menu by clicling anywhere
     	 /*	window.onclick = function(event){
     	 		if (!event.target.matches('.closeIcon')){
     	 			settingMenu.style.zIndex = "-1";
     	 		}
     	 	}  */
            
            //Fonction which takes the url of the click sound to play the click sound when startStop button is clicked 
     	 	function playclick(url){
     	 		const audio = new Audio(url);
     	 		audio.play();
     	 	}


            /*Function which rings bell when time is over and changes the current page to the corresponding next page*/
     	 	function checkIfOver(url){
     	 		const audio = new Audio(url);

     	 			if (time === 0){  
     	 				audio.play(); 

     	 				 //Checks the current page and defines the page to the corresponding page. That is changes from pomodoro to s-break
     	 				if (page === 1){
     	 				let breakTime = document.getElementById('s-break').value;
    	                time = breakTime*60;
    	                clock.textContent = breakTime < 10 ? `0${breakTime}:00` : `${breakTime}:00`;
    	                startStop.textContent = document.getElementById('checkbox1').checked ? "STOP" : "START";
    	                startStop.style.boxShadow = "0px 7px 0px 0px rgba(220,220,220,1)";
    	                firstBody.style.backgroundColor = "rgb(46,139,87)";
    	                topDiv.style.backgroundColor = "rgb(46,139,87)";
    	                topDiv2.style.backgroundColor = "rgb(46,139,87)";
    	                currentBackgroundColor = "rgb(46,139,87)";
    	                startStop.style.color = "rgb(46,139,87)";
    	                faviconLink.setAttribute("href", "favicons.ico");
    	                lB.style.backgroundColor = null;
    	                sB.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                pdro.style.backgroundColor = "transparent";
    	                progress.style.width = 0 + '%';
    	                page = 2;
                         
                         //Verifies if the checkbox is checked to autostart the next clock
                        if (document.getElementById('checkbox1').checked) {
                        	countDown = setInterval(timer, 1000);
                        }

    	                clearInterval(countDown);
     	 				}
     	 				
     	 				else if (page === 2 ) {
                        longbreakCount++;
     	 				let breakTime = document.getElementById('s-break').value;
    	                time = breakTime*60;
    	                clock.textContent = breakTime < 10 ? `0${breakTime}:00` : `${breakTime}:00`;
    	                startStop.textContent = document.getElementById('checkbox2').checked && longbreakCount == document.getElementById('longbreak-count').value ? "STOP" : "START";
    	                startStop.style.boxShadow = "0px 7px 0px 0px rgba(220,220,220,1)";
    	                progress.style.width = 0 + '%';
    	                console.log(longbreakCount == document.getElementById('longbreak-count').value);
    	                console.log(document.getElementById('longbreak-count').value);

    	                if (longbreakCount == document.getElementById('longbreak-count').value && document.getElementById('checkbox2').checked) {
    	                breakTime = document.getElementById('l-break').value;
    	                time = breakTime*60;
    	                clock.textContent = breakTime < 10 ? `0${breakTime}:00` : `${breakTime}:00`;
    	                firstBody.style.backgroundColor = "rgb(8, 143, 143)";
    	                topDiv.style.backgroundColor = "rgb(8, 143, 143)";
    	                topDiv2.style.backgroundColor = "rgb(8, 143, 143)";
    	                currentBackgroundColor = "rgb(8, 143, 143)";
    	                startStop.style.color = "rgb(8, 143, 143)";
    	                faviconLink.setAttribute("href", "favicon.ico");
    	                lB.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                sB.style.backgroundColor = null;
    	                pdro.style.backgroundColor = "transparent";
    	                longbreakCount = 0;
    	                countDown = setInterval(timer, 1000);
    	                }

                        clearInterval(countDown);
     	 				}

     	 				else if (page === 3) {
     	 				let breakTime = document.getElementById('pomodoro').value;
    	                time = breakTime*60;
    	                clock.textContent = breakTime < 10 ? `0${breakTime}:00` : `${breakTime}:00`;
    	                startStop.textContent = document.getElementById('checkbox2').checked ? "STOP" : "START";
    	                startStop.style.boxShadow = "0px 7px 0px 0px rgba(220,220,220,1)";
    	                progress.style.width = 0 + '%';
    	                firstBody.style.backgroundColor = "rgb(227, 66, 52)";
    	                topDiv.style.backgroundColor = "rgb(227, 66, 52)";
    	                topDiv2.style.backgroundColor = "rgb(227, 66, 52)";
    	                currentBackgroundColor = "rgb(227, 66, 52)";
    	                startStop.style.color = "rgb(227, 66, 52)";
    	                faviconLink.setAttribute("href", "faviconp.ico");
    	                lB.style.backgroundColor = null;
    	                sB.style.backgroundColor = null;
    	                pdro.style.backgroundColor = "rgba(0,0,0,0.2)";
    	                page = 1;

    	                if (document.getElementById('checkbox2').checked) {
                        	countDown = setInterval(timer, 1000);
                        }

    	                clearInterval(countDown);
     	 				}
     	 			}
     	 		}

     	 				
     	 	

     	







     
     

     
    

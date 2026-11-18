let button = document.querySelectorAll(".a");

for (let i=0; i<button.length; i++) {
    button[i].addEventListener("click", function() {
        // Use the button's ID instead of innerHTML
        let buttonId = button[i].id; 
        
        // Map the button ID to the corresponding audio ID
        let audioIdMap = {
            "a1": "d",
            "a2": "r",
            "a3": "u",
            "a4": "m",
            "a5": "s",
            "a6": "h",
            "a7": "i"
        };
        
        let audioId = audioIdMap[buttonId];
        let audio = document.querySelector("#" + audioId);
        
        if(audio) {
            audio.play();
        } else {
            console.error("Audio element not found for ID: " + audioId);
        }
        audio.currentTime=0;
    });
}
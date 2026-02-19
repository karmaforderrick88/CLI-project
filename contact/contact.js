document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault(); //prevents page from refreshing

    //Select the submit button
    const submitBtn = this.querySelector("button"[type= 'submit']);

    //Change text while sending 
    submitBtn.innerText = "Sending..";
    submitBtn.disabled = true; //disable button to prevent multiple submissions

    emailjs.sendForm(  //automatically grabs user input and sends it as an email immediately
        "service_8gq4dbk" ,//SERVICE ID
        "template_31k1w81", //TEMPLATE ID
        this //THE FORM ITSELF
    ).then(
        function() {
            submitBtn.innerText = "Successful!";

            //reset form after a short delay
            setTimeout(() =>{
                submitBtn.innerText = "Submit"; //Reset back to submit
                submitBtn.disabled = false; //Re-enable the button
                document.getElementById("contact-form").reset();
            }, 3000); 
},
function(error){
    alert("Failed to send message, please try again later.");
    console.error(error);
    submitBtn.innerText = "Oops! Try later";  //Revert text
    submitBtn.disabled = false;
      
     }
    
);
});
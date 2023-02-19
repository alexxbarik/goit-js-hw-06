
const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
   
    const formElements = event.currentTarget.elements;
    
    const mail = formElements.email.value;

    const password = formElements.password.value;

    
    if(mail === "" || password === ""){
        return console.log("Please fill in all the fields!");
    }

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) =>{
        console.log(name, value);
        event.currentTarget.reset();
        
    });
    };




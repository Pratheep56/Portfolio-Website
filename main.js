const goUp = document.getElementById("go-back");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 200){
        goUp.style.display="block";
    } else{
        goUp.style.display="none";
    }
})

goUp.addEventListener("click", ()=>{
    window.scrollTo({
        top:0, behavior: "smooth"
    });
})

document.getElementById("download-resume").addEventListener("click", function () {
    const resumeUrl = "resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "My_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});




document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("y8SWs5smJtB-ZAt3g")
    }
);

document.querySelector(".contact-form form").addEventListener("submit", (event) => {
    event.preventDefault();

    let formMsg = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_qmwpffa", "template_zvvoxfh", formMsg).then((response) => {
        alert("Email sent successfully!");
        event.target.reset();
    }).catch((error) => alert("Failed to send email. Try again!"));
    }
);


document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("input", () => {
        const email = emailInput.value;
        let pattern = /^[A-Za-z0-9!#$%&'+-/=?^_`{|}~]+(\.[A-Za-z0-9!#$%&'+-/=?^_`{|}~]+)*@[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
        const isValid = pattern.test(email); 

        if (!isValid) {
            showError(emailInput, "Please input a valid email");
        } else {
            hideError(emailInput);
        }
    });

    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("span");
            error.classList.add("error-message");
            input.after(error);
        }
        error.textContent = message;
        input.style.border = "2px solid red";
    }

    function hideError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }
        input.style.border = "2px solid green";
    }
});

//Element selection
const form = document.getElementById("myform"),
PasswordInput = document.getElementById("Password"),
passToggleBtn = document.getElementById("pass-toggle-btn"),
thankYouMsg =document.getElementById("thank-you-conntent");

//Element Handling function
const showError = (field,errorText) =>{
    field.classList.add("error");
    const errorElement =document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText =errorText;
    field.closest(".form-group").appendChild(errorElement);
};

//password strangt check
const checkPasswordStrength =(password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);

//validate password
const validatePassword =(password) =>{
    if(password === ""){
        showError(PasswordInput,"Enter Your Password");

    }else if(!checkPasswordStrength(password)){
        showError(
            PasswordInput,
            "Please Enter at least 8 character with a number,Symbol,lowercase,and uppercase letter."
            
        );
    }
};
//form data handling
const handleFormData =(e) =>{
    e.preventDefault();
    const [fullnameInput,emailInput,dateInput,genderInput]=[
        "fullname",
        "email",
        "date",
        "gender"
    ].map((id)=>document.getElementById(id));

    const [fullname, email, password, date, gender]=[
        fullnameInput,
        emailInput,
        PasswordInput,
        dateInput,
        genderInput
    ].map((input) => input.value.trim());

    const emailPattern =/^[^ ]+\.[a-z]{1,3}$/

    document
    .querySelectorAll(".form-group .error")
    .forEach((field)=> field.classList.remove("error"));
    document
    .querySelectorAll(".error-text")
    .forEach((errorText)=>errorText.remove());

    if(fullname === "") showError(fullnameInput,"Enter Your FullName");
    if(!emailPattern.test(email)) showError(emailInput,"Enter a valid email address");
    validatePassword(password);
    if(date ==="") showError(dateInput,"Select Your Date of Birth");
    if (gender ==="") showError(genderInput,"Select Your Gender");
    if (!document.querySelectorAll(".form-group .error").length){
        form.style.display ="none";
        thankYouMsg.style.display ="block";
    }
    
}
//toggel password visibility
passToggleBtn.addEventListener("click",()=>{
    passToggleBtn.className =
    PasswordInput.type === "password"
    ? "fa-solid fa-eye-slash"
    :"fa-solid fa-eye";

    PasswordInput.type = PasswordInput.type ==="password" ? "text" : "password";

});
//form submission event handling
form.addEventListener("submit", handleFormData);

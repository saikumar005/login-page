const form=document.getElementById("form");
const username=document.getElementById("username");
const mail=document.getElementById("mail");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
form.addEventListener('submit',e => {
    e.preventDefault();
    validateInputs();
});

const setError=(element,msg) =>
{
    const inputControl = element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');
    errorDisplay.innerHTML=msg;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) =>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerHTML="";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs= () => {
    const usernameValue=username.value.trim();
    const mailValue=mail.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if(usernameValue=="")
    {
        setError(username,"user name is required");
    }
    else
    {
        setSuccess(username);
    }
    if(mailValue=="")
    {
        setError(mail,"mail Required");
    }
    else if (!isValidEmail(mailValue)) 
    {
        setError(mail, 'Provide a valid email address');
    }
    else
    {
        setSuccess(mail);
    }
    if(passwordValue=="")
    {
        setError(password,"password should not be emplty");
    }
    else if(passwordValue.length<8)
    {
        setError(password,"password should be minimum 8 char's")
    }
    else{
        setSuccess(password);
    }
    if(password2Value=="")
    {
        setError(password2,"password should not be empty");
    }
    else if(password2Value!=passwordValue)
    {
        setError(password2,"password doesn't matched");
    }
    else{
        setSuccess(password2);
    }
}
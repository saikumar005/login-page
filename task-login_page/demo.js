const form=document.getElementById("form");
const username=document.getElementById("username");
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
function isValidUserName(uname){
    return /\d/.test(uname);
}

function validateUserName(){
    e_value=username.value.trim();
    if(e_value=="")
    {
        setError(username,"user name cannot be empty");
    }
    else if(isValidUserName(e_value))
    {
        setError(username,"user name should not contain digits");
    }
    else
    {
        setSuccess(username);
    }
}

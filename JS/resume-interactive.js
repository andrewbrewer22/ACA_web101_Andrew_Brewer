const elemHoverOn = (element) =>
{
    element.style.opacity = 0;
}

const elemHoverOut = (element) =>
{
    element.style.opacity = 1;
}

var isPhoneNumber = true;
var pictureVisible = true;
const elemClick = (element) =>
{


    if(element.id === "phoneNum")
    {
        var clickMe = "Click here for phone number";
        var phoneNumber = "Phone 253-244-8669";
    
        if(isPhoneNumber)
        {
            element.innerText = phoneNumber;
            isPhoneNumber = !isPhoneNumber;
        }
        else if(!isPhoneNumber)
        {
            element.innerText = clickMe;
            isPhoneNumber = !isPhoneNumber;
        }
    }

    if(element.id === "proPic")
    {
        console.log(`${element.id}`);

        if(pictureVisible)
        {
            element.style.opacity = 0;
            pictureVisible = !pictureVisible;
        }
        else if(!pictureVisible)
        {
            element.style.opacity = 1;
            pictureVisible = !pictureVisible;
        }
    }
}
const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('exname');
let email = document.getElementById('exemail');
let subject = document.getElementById('exsubject');
let message = document.getElementById('exmessage');


contactForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    let formData = {
        name:name.value,
        email:email.value,
        subject: subject.value,
        message : message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText === 'success'){
            alert('Your email has been sent!')
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        }else{
            alert("Try again!")
        }
        }

        xhr.send(JSON.stringify(formData))
    }
)




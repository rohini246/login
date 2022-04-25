"use strict";
const formElem = document.querySelector('.form');
const submitElem = document.querySelector('#submit');
const emailElem = document.querySelector('#email');
submitElem.addEventListener('click', (e) => {
    e.preventDefault();
    if (!emailElem.value) {
        return alert('Please enter email');
    }
    if (!emailElm.value.includes('@') || !emailElm.value.includes(".com")) {
        return alert("Please enter valid email");
    }
    const user = ({
        email: emailElm.value
    });
    fetch('http://localhost:8080/forgot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(res => {
        // if(res==="Login Successfully."){
        //   window.location.href='./homePage.html'
        // }
        return alert(res);
    });
});

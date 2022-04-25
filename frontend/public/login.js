"use strict";
const formElm = document.querySelector('.form');
const submitElm = document.querySelector('#submit');
const emailElm = document.querySelector('#email');
const passwordElm = document.querySelector('#password');
submitElm.addEventListener('click', (e) => {
    e.preventDefault();
    if (emailElm.value === "" || passwordElm.value === "") {
        alert('Please enter fields');
    }
    if (!emailElm.value.includes('@') || !emailElm.value.includes(".com")) {
        alert("Please enter valid email");
    }
    const user = ({
        email: emailElm.value,
        password: passwordElm.value
    });
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(res => {
        alert(res);
        if (res === "Login Successfully.") {
            window.location.href = './homePage.html';
        }
    });
});

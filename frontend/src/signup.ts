
const form = document.querySelector('.form') as HTMLFormElement;
const submit = document.querySelector('#submit') as HTMLButtonElement;
const nameElm = document.querySelector('#name') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const address = document.querySelector('#address') as HTMLInputElement;
const password = document.querySelector('#password') as HTMLInputElement;
const confirmPassword = document.querySelector('#confirm_password') as HTMLInputElement;
const url: string = "http://localhost:8080/signup"
//console.log(form.children);




submit.addEventListener('click', (e: Event) => {
        e.preventDefault();
        if(!email.value || !nameElm.value || !password.value || !confirmPassword.value || !address.value){
          return  alert('Please enter all requested fields.');
        }
        if(!email.value.includes('@') || !email.value.includes(".com")){
           return alert("Please enter valid email");
        }
        else if(password.value!==confirmPassword.value){
           return alert("Confirm password didn't match");
        }
        else if(password.value.length<8 || password.value.length>15){
           return alert('Password length must be minimum 8 and maximum 15 characters');
        }
       //var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/;
       else if(!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/)) {
          return alert('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
       }
        else if (nameElm.value && email.value && password.value && (password.value === confirmPassword.value)) {
            const user = ({
                name: nameElm.value,
                email: email.value,
                address: address.value,

                password: password.value
            })
            fetch('http://localhost:8080/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
              })
              .then(response=>response.json())
              .then(res=>{
                  
                  if(res==="Successfully Registered."){
                        window.location.href='./homePage.html'
                  }
                  return alert(res);
              });
              
              
        }  
        else {
            alert('invalid input')
        }
       }
    
    )

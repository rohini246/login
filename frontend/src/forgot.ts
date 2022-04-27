const formElem = document.querySelector('.form') as HTMLFormElement;
const submitElem = document.querySelector('#submit') as HTMLButtonElement;
const emailElem = document.querySelector('#email') as HTMLInputElement;


submitElem.addEventListener('click',(e:Event)=>{
    e.preventDefault();
    if(!emailElem.value){
      return  alert('Please enter email')
    }
    if(!emailElem.value.includes('@') || !emailElem.value.includes(".com")){
      return  alert("Please enter valid email");
    }
   
        const user=({ 
            email:emailElem.value
        })
        fetch('http://localhost:8080/forgot', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
              })
              .then(res => res.json())
              .then(res=>{
                
                // if(res==="Login Successfully."){
                //   window.location.href='./homePage.html'
                // }
                return alert(res);
              });
})
    



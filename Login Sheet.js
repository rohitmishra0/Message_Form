const scriptURL='https://script.google.com/macros/s/AKfycbyPjPWx40TJ_ynK3CYY_VosWfOkWdZPZYgUnkgMX-PmJqAR6gE0LAg_fuqW0ZVoC2L0/exec'

const form=document.forms['login-form']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body: new FormData(form)})
    .then(response=>alert("Thank You! Your message is deliverd. Rohit will get back to you on your email."))
    .then(()=>{window.location.reload();})
    .catch(error=>console.error('Error!',error.message))
})
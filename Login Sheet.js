const scriptURL='https://script.google.com/macros/s/AKfycbxtSjFn3kJ0hcqxD42tl27AS39TQM72zyo6Jt_ZpAVZ28yif5ziqt4shfDxuWw7FZnN/exec'
const form=document.forms['login-form']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body: new FormData(form)})
    .then(response=>alert("Thank You! Your message is deliverd. Rohit will get back to you on your email."))
    .then(()=>{window.location.reload();})
    .catch(error=>console.error('Error!',error.message))

})

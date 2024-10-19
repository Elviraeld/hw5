let form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let password = document.querySelector('.password').value;
          
    if (password.length > 5) {
        console.log("Icaze verildi");
    } else {
        console.log("Giris qadagandir");
    }
})
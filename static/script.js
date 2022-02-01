let login_btn = document.getElementById('logbtn');
function login_act() {
    alert("Hi, Welcome to Dugu Learn");
}
function reset_data() {
let form = document.getElementById('form').reset(); 
} 

btn_reset = document.getElementById('submit');
btn_reset.addEventListener('click', ()=> {
    reset_data();
    alert('Data Saved');
});
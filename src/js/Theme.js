//const checkbox = document.getElementById('checkbox');
const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle("dark");
});
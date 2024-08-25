let baton_list = document.querySelectorAll('.baton')
let stepan = document.querySelector('.stepan')
console.log(stepan)
baton_list.forEach((button)=>{
    button.addEventListener('click', ()=>{
        stepan.innerHTML = +stepan.innerHTML+1
        console.log(stepan)
    })
})


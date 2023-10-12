let overlay = document.querySelector('.overlay')
let closeButton = document.querySelector('.close-buttom')
let showModel = document.querySelectorAll('.show-model')
let hidden = document.querySelector('.hidden')
let model = document.querySelector('.model')
let body = document.getElementsByTagName('body')

for (let i=0; i<showModel.length; i++){
    showModel[i].addEventListener("click", function(){
         hidden.classList.remove('hidden')
    })
}

// body.addEventListener('click', function(){
//     showModel[2].classList.add('hidden')
// })

//finding the button name and do somethin.
// document.addEventListener('keyup', (a)=>{
//    console.log(a.key);
//    if(a.key ==' ' && hidden.classList.contains('hidden')){
//     showModel[2].classList.add('hidden')
//    }
// })

//something went wrong with the remove and contains but add working fine.
document.addEventListener('keyup', function (a){
    console.log(a.key);
    if(a.key ==' '){
        alert("Don't Enter space here!")
        }
 })
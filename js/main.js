// // broken down:

// function toRed() {
//     document.body.style.backgroundColor = 'red';
// }

// var red = document.querySelector('.red')

// red.addEventListener('click', toRed)

// // DRY CODE

// document.querySelector('.red').addEventListener('click', function toRed() {
//     document.body.style.backgroundColor = 'red';
// })

// //

// document.querySelector('.white').addEventListener('click', function toWhite() {
//     document.body.style.backgroundColor = 'white';
// })

// //

// document.querySelector('.blue').addEventListener('click', function toBlue() {
//     document.body.style.backgroundColor = 'blue';
// })

// //

// document.querySelector('.yellow').addEventListener('click', function toYellow() {
//     document.body.style.backgroundColor = 'yellow';
// })

var buttons = document.querySelectorAll("li")
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(evt){
    document.body.className = evt.target.className
  })
}

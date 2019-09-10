const storeName = 'La Cabaña';
document.title = `${storeName} Grocery Store`;
console.log('what is in document:', document.all);

console.log('tag element:', document.getElementsByTagName('p'));

let h1_OfHeader = document.getElementById('mainIntro');
// console.log(h1_OfHeader);//checking

h1_OfHeader.innerHTML = 'Bienvenidos';

//querySelectorAll gets all of what you are looking for, querySelector gets just one of what you're looking for
const getAllNavListClasses = document.querySelectorAll('.nav_list_item');
console.log('headers:', getAllNavListClasses);

const getIconCredit = document.querySelector('#iconsCredit');
const testDifference = document.getElementById('iconsCredit');
console.log('get the id: ', getIconCredit);
console.log(testDifference);

const example = document.querySelector('.nav_list_item');
console.log(example);

const getExClasses = document.getElementsByClassName('nav_list_item');
console.log(getExClasses);

const imageExample = document.querySelector('img[alt="cherry icon"]');
console.log(imageExample);

const buttonExample = document.getElementById('boton');
console.log(buttonExample)

//with eventListerner (it's an action) always use arrow function unless you are trying to hoist becuz fat arrows are not hoist friendly
buttonExample.addEventListener('mouseover', () => {
    buttonExample.className = 'myPoint';
    console.log('over: ',buttonExample);
});

buttonExample.addEventListener('mouseleave', () => {
    buttonExample.className = '';
    console.log('leaving: ', buttonExample);
})

// document.addEventListener('keyup', () => {
//     console.log('I am pressed.');
// })

document.addEventListener('keydown', () => {
    console.log(event.keyCode);
})



const contentBackgroundColor = document.getElementById('content');

contentBackgroundColor.addEventListener('mouseover', () => {
    contentBackgroundColor.style.backgroundColor = '#000';
})

contentBackgroundColor.addEventListener('mouseleave', () => {
    contentBackgroundColor.style.backgroundColor = '';
})
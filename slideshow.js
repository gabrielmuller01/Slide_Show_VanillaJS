'use strict';

const images = [

    {'id': '1', 'url':'./img/img1.jpg'},
    {'id': '2', 'url':'./img/img2.jpg'},
    {'id': '3', 'url':'./img/img3.jpg'},
    {'id': '4', 'url':'./img/img4.jpg'},

]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

 const previous = () =>{
     containerItems.appendChild(items[0]);
     items = document.querySelectorAll('.item');
 }

 const next = () =>{
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
 }

 document.onkeydown = teclado

function teclado(e){
    if(e.keyCode == 37)
    {
        previous();
    } else if (e.keyCode == 39)
    {
        next();
    }
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
document.addEventListener('keydown', teclaDown);
document.addEventListener('keyup', teclaUp);

let arrows = document.getElementById('arrows');

function teclaDown(e){
    if(e.keyCode==37)
    {
       arrows.setAttribute('src','./arrow_img/arrowLeft.jpeg');
    }
    else if(e.keyCode==39)
    {
       arrows.setAttribute('src','./arrow_img/arrowRight.jpeg');
    }
}

function teclaUp(){
    if (event.keyCode===37 || event.keyCode===39){
        arrows.src='./arrow_img/arrows.jpeg'
    }
}









// event
box = document.getElementsByClassName("box");


// click
box[0].addEventListener('click',()=>{
    box[0].style.backgroundColor = 'red';
})

// dblclick
box[1].addEventListener('dblclick',()=>{
    box[1].style.backgroundColor = 'purple';
})

// mouseover and mouseout
box[2].addEventListener('mouseover',()=>{
    box[2].style.backgroundColor = 'green';
})
box[2].addEventListener('mouseout',()=>{
    box[2].style.backgroundColor = 'chocolate';
})

// mouseenter and mouseleave
box[3].addEventListener('mouseenter',()=>{
    box[3].style.backgroundColor = 'blue';
})
box[3].addEventListener('mouseleave',()=>{
    box[3].style.backgroundColor = 'chocolate';
})

document.addEventListener('DOMContentLoaded', function() {
let headCont = document.createElement('header-container');
let h1 = document.createElement('h1');
let h1Text = document.createTextNode('This is an h1');
headCont.appendChild(h1);
document.body.appendChild(headCont);
h1.appendChild(h1Text);
let h2 = document.createElement('h2');
let h2Text = document.createTextNode('This is an h2');
h2.appendChild(h2Text);
let h3 = document.createElement('h3');
let h3Text = document.createTextNode('This is an h3');
h3.appendChild(h3Text);
let h4 = document.createElement('h4');
let h4Text = document.createTextNode('This is an h4');
h4.appendChild(h4Text)
let h5 = document.createElement('h5');
let h5Text = document.createTextNode('this is an h5');
h5.appendChild(h5Text);
let h6 = document.createElement('h6');
let h6Text =document.createTextNode('this is an h6');
h6.appendChild(h6Text);
headCont.appendChild(h2);
headCont.appendChild(h3);
headCont.appendChild(h4);
headCont.appendChild(h5);
headCont.appendChild(h6);
let cArr = ["red", "blue", "green", "yellow", "orange", "purple", "black", "aquamarine"]
document.addEventListener('dblclick', function() {
h1.style.color = cArr[Math.floor(Math.random() * cArr.length)]
})
let counter = 1
btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    for (let i = 0; i < counter; i++){
let btnClicked = document.createElement('h1');
let btnText = document.createTextNode("This is list item" + [counter]);
headCont.appendChild(btnClicked);
btnClicked.appendChild(btnText);
counter ++
break
}
})
})


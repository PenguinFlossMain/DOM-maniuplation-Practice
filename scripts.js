document.addEventListener("DOMContentLoaded", function () {//--code can run before DOM has fully loaded. This line of text is so the browser waits until it is
    let paragraph = document.createElement('p');
    let text = document.createTextNode('whatever text youd like it to be');

    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase"; //-- Gotta do camelCase
    paragraph.className = "some-paragraph";

    paragraph.appendChild(text); //--Placing Text inside of the paragraph
    document.body.appendChild(paragraph); //-- this is equivalent to a <p> in HTML

    let button = document.createElement('button');
    let btnText =document.createTextNode('click Me!');
    button.appendChild(btnText);
    document.body.appendChild(button)

    button.addEventListener('click', function() {
        let h1= document.createElement('h1');
        let h1Text = document.createTextNode("I've been clicked")
        h1.appendChild(h1Text)
        document.body.appendChild(h1)
    })
})

let someDIv = document.getElementById('best-div') //-- same as <div id-best-div></div>
let redElements = document.getElementsByClassName('red-font')//--somethign like this allows multiple selections
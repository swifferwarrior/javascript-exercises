const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.style.cssText = "color: red";

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
    blue.style.cssText = "color: blue;";

const pink = document.createElement('div');
    pink.classList.add('twoContents');
    pink.style.cssText = "background-color: pink; border: 1px black;"
    
const titleInDiv = document.createElement('h1');
    titleInDiv.textContent = "I'm in a div"

const meToo = document.createElement('p');
    meToo.textContent = "ME TOO!";

pink.appendChild(titleInDiv);
pink.appendChild(meToo);

container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);
container.appendChild(pink);
/*
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const add = document.getElementById('add');


const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const mydiv = document.querySelector(".mydiv");

add.addEventListener("click", sum)

function sum() {
    const paragraph = document.createElement('p');
    paragraph.innerText="Hello Safat how are you dolng"
    mydiv.appendChild(paragraph)
}


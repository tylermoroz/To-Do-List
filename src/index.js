import './style.css';

function component() {
    let element = document.createElement('div');

    element.textContent = "hello world";
    element.classList.add("hello");
    
    return element;
}

document.body.appendChild(component());

const editableDivs = document.querySelectorAll('[contenteditable="true"][maxlength]');

const templateElement = document.getElementById('elementTemplate')
const templateContainer = document.getElementById('exampleContainer')


editableDivs.forEach(div => {
    // Add event listeners for keydown and paste events
    div.addEventListener('keydown', handleKeyDown);
    div.addEventListener('paste', handlePaste);

    function handleKeyDown(event) {
        const maxLength = parseInt(div.getAttribute('maxlength'), 10);
        if (div.textContent.length >= maxLength && event.keyCode!== 8) {
            event.preventDefault();
        }
    }

    function handlePaste(event) {
        const maxLength = parseInt(div.getAttribute('maxlength'), 10);
        if (div.textContent.length >= maxLength) {
            event.preventDefault();
        }
    }
});

function addElement(node) {
    const parent = node.parentNode.parentNode
    const newElement = parent.appendChild(templateElement.cloneNode(true))
    newElement.style.display = 'flex'
    newElement.id = ''
}

function moveElementUp(element) {
    const taskElement = element.parentNode.parentNode
    if(taskElement.previousElementSibling) {
        taskElement.parentNode.insertBefore(taskElement, taskElement.previousElementSibling);
    }
}

function moveElementDown(element) {
    const taskElement = element.parentNode.parentNode
    if(taskElement.nextElementSibling) {
        taskElement.parentNode.insertBefore(taskElement.nextElementSibling, taskElement);
    }
}

function removeElement(element) {
    const taskElement = element.parentNode.parentNode
    taskElement.remove()
}
// LOGIC FOR CONTAINERS
function addContainer(node) {
    const newElement = listsContainer.appendChild(templateContainer.cloneNode(true))
    newElement.style.display = 'flex'
    newElement.id = ''
}

function moveContainerUp(element) {
    const taskElement = element.parentNode.parentNode
    if(taskElement.previousElementSibling) {
        taskElement.parentNode.insertBefore(taskElement, taskElement.previousElementSibling);
    }
}

function moveContainerDown(element) {
    const taskElement = element.parentNode.parentNode
    if(taskElement.nextElementSibling) {
        taskElement.parentNode.insertBefore(taskElement.nextElementSibling, taskElement);
    }
}

function removeContainer(element) {
    const taskElement = element.parentNode.parentNode
    taskElement.remove()
}


const lists = localStorage.getItem("lists")

if (lists) {
    const listsContainer = document.getElementById("listsContainer")
    const parser = new DOMParser();
    const a = document.createElement('div')
    a.innerHTML = lists
    console.log(a.firstChild)
    console.log(listsContainer)
    listsContainer.parentNode.appendChild(a.firstChild)
    listsContainer  .remove()
}


function saveState() {
    const listsContainer = document.getElementById("listsContainer")
    console.log(listsContainer)
    const data = listsContainer.outerHTML
    localStorage.setItem("lists", data)
}

function clearData(){
    localStorage.clear()
}
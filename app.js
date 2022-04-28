const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) //элемент над плейсхолдером
    placeholder.addEventListener('dragenter', dragenter) //заходим на територию плейсхолдера
    placeholder.addEventListener('dragleave', dragleave) //перетащили и вышли из територии плейсхолдера
    placeholder.addEventListener('drop', dragdrop) //отпустили
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend() {
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}



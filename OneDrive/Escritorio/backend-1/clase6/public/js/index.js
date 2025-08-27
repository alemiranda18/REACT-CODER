const socket = io()

const chatLogElement = document.getElementById('chatLog')
const chatForm = document.getElementById('chatForm')
const messageInput = document.getElementById('message')

chatForm.addEventListener('submit', (event) => {
    event.preventDefault
    const message = messageInput.value
    socket.emit('message', message)
})

socket.on('chatLog', (chatLog) => {
    chatLogElement.innerHTML = ''
    chatLog.forEach((msg) => {
        const li = document.createElement('li')
        li.textContent = `${msg}`
        chatLogElement.appendChild(li)

    })
})
const submitButton = document.querySelector('#submit')

const message = () => {
    alert('submitted!')
}

submitButton.addEventListener('click', message)
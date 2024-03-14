const openModal = document.getElementById("open_modal");
const displayModal = document.querySelector('.modal');
const modelConetentElement = displayModal.querySelector('.modal_content')

openModal.addEventListener('click', function(){
    displayModal.classList.add('open')
});

modelConetentElement.addEventListener('click', () => {
    displayModal.classList.remove('open');
})
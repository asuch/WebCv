const input = document.querySelector('input');
const toDoContainer = document.querySelector('.toDothings-container')
const deleteAllBtn = document.querySelector('.delete-all-btn')

const btn = document.querySelector('button');

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
})

btn.addEventListener('click', () => {

    if (input.value === '') {
        alert('Nie ma nic do dodania');
    } else {

        // create div
        const itemContainer = document.createElement('div');
        itemContainer.className = 'toDoItem-container';
        itemContainer.style.height = '50px';

        // create p with content
        const contentTxt = document.createElement('p');
        contentTxt.className = 'toDoItemTxt';
        contentTxt.textContent = input.value;
        contentTxt.style.fontSize = '20px';
        contentTxt.style.marginLeft = '15px';

        // create button inside div
        const cancelBtn = document.createElement('i');
        cancelBtn.className = "fas fa-trash-alt";
        cancelBtn.style.marginRight = '15px';
        cancelBtn.style.cursor = 'pointer';

        // adding content to div
        itemContainer.appendChild(contentTxt);
        itemContainer.appendChild(cancelBtn);

        // adding div to parent
        toDoContainer.appendChild(itemContainer);

        cancelBtn.addEventListener('click', () => {
            itemContainer.remove();
        })

        // delete input txt
        input.value = '';

        deleteAllBtn.addEventListener('click', () => {
                toDoContainer.removeChild(itemContainer)
        });
    }

   
});




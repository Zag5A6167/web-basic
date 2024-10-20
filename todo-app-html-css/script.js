const todoListContent = document.getElementById('todoListContent')


document.getElementById('btn').addEventListener('click', () => {
    const inputValue = document.getElementById('inputText').value;
    if(inputValue.trim() !== ''){
        const divCreate = document.createElement('li')
        divCreate.innerText = inputValue
        todoListContent.appendChild(divCreate)
        document.getElementById('inputText').value = ''

    }
  });


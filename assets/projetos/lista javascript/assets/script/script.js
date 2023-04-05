let Ul = document.querySelector('ul');
let input = document.querySelector('input');

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp(event){
    if(event.code == 'Enter'){
        let newLi = document.createElement('li');
        newLi.innerText = input.value;
        Ul.append(newLi);

        input.value = '';
    }
}
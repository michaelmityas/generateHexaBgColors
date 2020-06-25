const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexColor  = document.querySelector('.hexColor');
const hexBtn    = document.querySelector('.hexBtn');
const body      = document.querySelector('body');

hexBtn.addEventListener('click', genrateColor);

function genrateColor(){

    let hex = '#';

    for(let i = 0 ; i < 6 ; i++)
    {
        let index = Math.floor(Math.random() * hexColors.length);
        hex += hexColors[index];
    }

    hexColor.innerHTML = hex;
    body.style.backgroundColor = hex

}


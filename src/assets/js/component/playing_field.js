//module playing field

const  playingField = function () {
    var ball = document.querySelector('#ball');
    ball.style.background = 'green';
    ball.style.width = '100px';
    ball.style.height = '100px';
    ball.innerHTML = 'ball';
    ball.style.color = '#fff';
    ball.style.fontSize = '26px';
    ball.style.display = 'flex';
    ball.style.alignItems = 'center';
    ball.style.justifyContent = 'center';
    ball.style.cursor = 'pointer';


    var stars = document.querySelector('#stars');
    stars.style.color = '#00FFAB';
    stars.innerHTML = '0';
    stars.style.cursor = 'pointer';

    stars.onclick = function () {
        if (stars.innerHTML !== '0' ) {
            stars.innerHTML = '0';
            stars.style.color = '#00FFAB';
        }
    }

    var lifes = document.querySelector('#lifes');
    lifes.innerHTML = '<span></span><span></span><span></span><span></span><span></span>'


    var i = 0;
    ball.onclick = function () {
        i = i + 1;
        stars.innerHTML = i;
        ball.style.top = '30%';
        ball.style.background = '#FF5600';
        stars.style.color = '#fff';
    }

}

export default playingField;
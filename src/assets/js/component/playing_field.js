//module playing field

const  playingField = function () {
    //получаем мяч выставляем базовые значения
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

    //получаем счечик выставляем базовые значения
    var stars = document.querySelector('#stars');
    var _count = 0;
    stars.style.color = '#00FFAB';
    stars.innerHTML = '0';
    stars.style.cursor = 'pointer';
    //получаем жизни выставляем базовые значения
    var lifes = document.querySelector('#lifes');
    lifes.innerHTML = '<span></span><span></span><span></span><span></span><span></span>';
    //прослушиваем событие click на поле и изменяем соответственно условий
    igra.addEventListener('click', function (event) {
        /*получаем элементы*/
        var _el = event.target;

        //мяч
        if (_el === ball ) {
            stars.innerHTML = ++_count;
            stars.style.color = '#fff';
            _el.style.top = '30%';
            _el.style.background = '#ff5600';
        }
        //счечик
        if (_el === stars && _el.innerHTML !== '0' && ball.style.top !== '') {
            _count = 0;
            _el.innerHTML = _count;
            ball.style.top = '';
            ball.style.background = 'green';
            _el.style.color = '#00ffab';
        }
    });

}

export default playingField;
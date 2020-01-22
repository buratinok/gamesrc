//module playing field

const playingField = function () {
    //получаем мяч выставляем базовые значения
    var ball = document.querySelector('#ball');
    ball.style.background = 'green';
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
            var _el = event.target,
                min = 15,
                max = 85;

            //получение случайного числа
            var _numX = Math.floor(Math.random() * (max - min + 1) + min);
            var _numY = Math.floor(Math.random() * (max - min + 1) + min);

            var minWidh = setInterval(function () {
                //уменьшаем шарик перемещаем к 0px при щелчке
                if (_el === ball && _el.style.width !== '0') {
                    _el.style.width = _el.clientWidth - 1 + "px";
                    _el.style.height = _el.clientHeight - 1 + "px";
                }

            }, 1);

            //мяч
            if (_el === ball) {


                setTimeout(function () {
                    _el.style.background = '#ff5600';
                    stars.style.color = '#fff';
                    stars.innerHTML = ++_count;
                    _el.style.top = _numY + '%';
                    _el.style.left = _numX + '%';
                    clearInterval(minWidh)
                    _el.style.width = '';
                    _el.style.height = '';
                }, 500);

            }

            //счечик
            if (_el === stars && _el.innerHTML !== '0' && ball.style.top !== '') {
                _count = 0;
                _el.innerHTML = _count;
                ball.style.top = '50%';
                ball.style.left = '50%';
                ball.style.background = 'green';
                _el.style.color = '#00ffab';
            }

        }
    )
    ;


}

export default playingField;
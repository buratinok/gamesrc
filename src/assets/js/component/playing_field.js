/*
*  module playing field
*
*  Отвечает за базовые значения счечика, мяча, жизни
*  Следит за событиями на поле игры
*
*/
const playingField = function () {

    //получаем и проверяем наличие мяч на поле выставляем базовые значения
    var ourBall = false;
    var ball = document.querySelector('#ball');
    if (ball) {
        ball.style.background = 'green';
        ball.style.display = 'flex';
        ball.style.alignItems = 'center';
        ball.style.justifyContent = 'center';
        ball.style.cursor = 'pointer';
        var ourBall = true;
    }

    console.log(`мяч в центре ${ourBall}`);

    //выставляем базовые значения stars
    var stars = document.querySelector('#stars');
    stars.style.color = '#00FFAB';
    stars.innerHTML = stars.dataset.count;
    stars.style.cursor = 'pointer';

    //устанавливаем счечик в 0
    var _count = stars.dataset.count;

    console.log(`счет игры установлен ${_count}`);

    //получаем жизни выставляем базовые значения
    var lifes = document.querySelector('#lifes');
    lifes.innerHTML = '<span></span><span></span><span></span><span></span><span></span>';


    //прослушиваем событие click на поле и изменяем соответственно условий обєкты на поле и их значения
    igra.addEventListener('click', function (event) {

            //получаем элементы
            var _el = event.target,
                min = 15,
                max = 85;

            //получение случайного числа ₴₴₴пересмотрель ф-к случайное число
            var _numX = Math.floor(Math.random() * (max - min + 1) + min);
            var _numY = Math.floor(Math.random() * (max - min + 1) + min);

            console.log(`случайные координаты полученые X = ${_numX} Y = ${_numY}`);

            //уменьшаем мяч
            var minWidh = setInterval(function () {

                //уменьшаем мяч, перемещаем при щелчке
                if (_el === ball && _el.style.width !== '0') {
                    _el.style.width = _el.clientWidth - 1 + "px";
                    _el.style.height = _el.clientHeight - 1 + "px";

                    console.log(`мяч уменьшен`);
                }

            }, 1);

            //получаем мяч
            if (_el === ball && ourBall != false) {

                //устанавливаем условия при щелчке на мячик
                setTimeout(function () {
                    _el.style.background = '#ff5600';
                    stars.style.color = '#fff';
                    stars.innerHTML = ++_count;
                    _el.style.top = _numY + '%';
                    _el.style.left = _numX + '%';
                    clearInterval(minWidh);
                    _el.style.width = '';
                    _el.style.height = '';

                    console.log(`счет уже ${_count}`);
                }, 500);

            }

            //обнуление счечика выставление базовых значений
            if (_el === stars && _el.innerHTML !== '0' && ball.style.top !== '') {
                _count = '0';
                _el.innerHTML = _count;
                ball.style.top = '50%';
                ball.style.left = '50%';
                ball.style.background = 'green';
                _el.style.color = '#00ffab';
                console.log(`счечик стоит в ${_el.innerHTML} положение мяча в начальном состоянии`)
            }

        }
    );


};

export default playingField;
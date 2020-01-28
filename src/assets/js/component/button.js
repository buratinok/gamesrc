/**
 *  Функцыя button отвечает за начало игры
 */
import trafficBall from "./traffic_ball";

const buttonClick = function () {

    // получаем обєкты на поле кешируем их
    var startBlock = document.querySelector('#startBlock');
    var startBtn = document.querySelector('#startBtn');
    var resetBlock = document.querySelector('#resetBlock');
    var playAgain = document.querySelector('.play__again');
    var startGame = document.querySelector('#startGame');

    //начальное состояние игры
    var start = false;

    //устанавлеваем событие на кнопку start
    startBtn.addEventListener('click', function (event) {

        //запускаем мячик по колу
        trafficBall();

        //Проверяем начальное состояние если все в порядке переключаемся
        if (start == false) {
            startBlock.style.display = 'none';
            startGame.style.display = '';
            start = true;
        }

        //устанавливаем таймер отсчета времени минуты и секкунды
        var _timer = function counTime() {

            //получаем и устанавливаем минуты
            var _minutes = document.querySelector('#minutes');
            _minutes.innerHTML = _minutes.innerHTML;

            //получаем и устанавливаем секунды
            var _seconds = document.querySelector('#seconds');

            _seconds.innerHTML = '0' + --_seconds.innerHTML;

            //проверяем окончание времени
            if (_minutes.innerHTML == 0 && _seconds.innerHTML == 0) {
                startGame.style.display = 'none';
                resetBlock.style.display = '';
                clearTimeout(_timer);
            } else {

                //обнуляем таймер
                setTimeout(counTime, 1000);
            }
        }
        
        //запускаем таймер через 2с после загрузки игры
        setTimeout(_timer, 2000);

    })
}
export default buttonClick;
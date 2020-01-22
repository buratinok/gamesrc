const buttonClick = function () {

    /*
    * game
    * */

    /*
    * переменые
     */
    var startBlock = document.querySelector('#startBlock');
    var startBtn = document.querySelector('#startBtn');
    var resetBlock = document.querySelector('#resetBlock');
    var playAgain = document.querySelector('.play__again');
    var startGame = document.querySelector('#startGame');

    var start = false;

    startBtn.addEventListener('click', function (event) {

        if (start == false) {
            startBlock.style.display = 'none';
            startGame.style.display = '';
            start = true;
        }

        //устанавливаем таймер
        var _timer = function counTime() {
            var _coun = document.querySelector('#second');
            _coun.innerHTML = '0' + --_coun.innerHTML;

            if (_coun.innerHTML == 0) {
                startGame.style.display = 'none';
                resetBlock.style.display = '';
                clearTimeout(_timer);
            }else{setTimeout(counTime, 2000);}
        }
        //запускаем таймер через 3с
        setTimeout(_timer, 2000);

    })
}
export default buttonClick;
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


        function counTime() {
            var _coun = document.querySelector('#second');
            _coun.innerHTML = '0' + --_coun.innerHTML;

            if (_coun.innerHTML == 0) {
                startGame.style.display = 'none';
                resetBlock.style.display = '';
            }else{setTimeout(counTime, 1000);}
        }

        setTimeout(counTime, 1000);

    })
}
export default buttonClick;
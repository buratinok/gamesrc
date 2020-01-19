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

    startBtn.onclick = function (event) {
        
        if (start == false) {
            startBlock.style.display = 'none';
            startGame.style.display = '';
            start = true;
        }
    }
}
export default buttonClick;
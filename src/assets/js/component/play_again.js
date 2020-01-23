/**
 *  Функцыя play_again
 *  отвечает за перезапучск окна игры в мяч
 *
 */
const playAgain = function () {

    //получаем все кнопки
    var playAgain = document.querySelectorAll('.play__again');

    //перебираем все кнопки play__again и устанавливаем событие при котором перезагружается игра
    for (let i = 0; i < playAgain.length; i++) {

        playAgain[i].onclick = function () {
                location.reload();


        }
    }
};

export default playAgain;
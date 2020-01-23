/**
 * Функцыя traffic ball отвечает за движение мячика
 * */

const trafficBall = function () {

    //кешируем мячик
    var ballXY = document.querySelector('.ball');

    console.log(`запуск мяч который движется по периметру`);

    //задаем параматров для анимацыи
    var keyfBall = [
        {
            top: '0',
            left: '0',
            marginTop: '4.1%',
            marginLeft: '4.1%',
        },
        {
            top: 0,
            left: '100%',
            marginTop: '4.1%',
            marginLeft: '-4.1%',
        },
        {
            top: '100%',
            left: '100%',
            marginTop: '-4.1%',
            marginLeft: '-4.1%',
        },
        {
            top: '100%',
            left: '0',
            marginTop: '-4.1%',
            marginLeft: '4.1%',
        },
        {
            top: '0',
            left: '0',
            marginTop: '4.1%',
            marginLeft: '4.1%',
        }];

    //задаем время анимацыи и вид
    var keyfTiming = {
        duration: 5000,
        iterations: Infinity
    };
    

    //запуск анимацыи
    ballXY.animate(
        keyfBall,
        keyfTiming
    );
}

export default  trafficBall;
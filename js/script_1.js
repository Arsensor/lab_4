document.getElementById("send_1").onclick = exercise_1; //Переход по клику
function exercise_1(){ //Объявление функции
    let number_1 = document.getElementById("name_a_1").value; //Получение переменной по id
    let number_2 = document.getElementById("name_b_1").value; //Получение переменной по id
    let number_3 = document.getElementById("name_c_1").value; //Получение переменной по id
    if (isNaN(number_1) && isNaN(number_2) && isNaN(number_3)){ //Объявление условия на проверку
        alert("Введите ещё раз корректное число"); //Вывод о несоответствии ввода
    } else { //Если все верно, тогда
        if ((number_1 < number_2) && (number_2 < number_3)){ //Объявление условия на проверку
            document.getElementById("output_exercise_1").innerHTML = "TRUE"; //Вывод
            return; //Возвращение функции
        } else{ //Если не прошел по условию проверки, тогда
            document.getElementById("output_exercise_1").innerHTML = "FALSE"; //Вывод
            return; //Возвращение функции
        }
    }
}
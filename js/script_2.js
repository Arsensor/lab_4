document.getElementById("send_2").onclick = exercise_2; //Переход по клику
function exercise_2(){ //Объявление функции
    var number_1 = document.getElementById("name_a_2").value; //Получение переменной по id
    var number_2 = document.getElementById("name_b_2").value; //Получение переменной по id
    if (isNaN(number_1) && isNaN(number_2)){ //Объявление условия на проверку
        alert("Введите ещё раз корректное число"); // Вывод о несоответствии ввода
    } else { //Если все верно, тогда
        if (number_1 < number_2){ //Объявление условия на проверку
            document.getElementById("output_exercise_2").innerHTML = "Первое число меньше"; //Вывод
            return; 
        } else{ //Если не прошел по условию проверки, тогда
            document.getElementById("output_exercise_2").innerHTML = "Второе число меньше"; //Вывод
            return;
        }
    }
}
document.getElementById("send_1").onclick = exercise_1; //Переход по клику
function exercise_1(){ //Объявление функции
    let number_1 = document.getElementById("name_n_1").value; //Получение переменной по id
    let number_2 = document.getElementById("name_set_1").value; //Получение переменной по id
    let arr_number_2 = number_2.split(", ") //Переопределение переменной в массив
    let answer = ''; //Объявление переменной для ответа
    let k = 0; //Объявление счетчика четных чисел
    let i; //Объявление переменной для цикла
    if (isNaN(number_1) || (number_1 == "")){ //Объявление условия на проверку
        alert("Введите ещё раз корректное число N"); //Вывод о несоответствии ввода
        return;
    } else { //Если с первичной проверкой все хорошо, тогда
        for (i = 0; i < number_1; i++) { //Цикл
            if (isNaN(arr_number_2[i]) || arr_number_2[i] == "" || Number(number_1) != arr_number_2.length) { //Проверка
                alert("Введите ещё раз корректные числа в Set"); //Вывод
                return;
            } else { //Иначе
                if (arr_number_2[i] % 2 == 0) { //Проверка четности
                    answer += arr_number_2[i] + ", "; //Формирование ответа
                    k++; //Счетчик количества
                }
            }
        }
        if (answer.length != 0) {
            document.getElementById("output_exercise_1_1").innerHTML = "Четные цифры: " + answer.slice(0, -2) + "."; //Вывод
            document.getElementById("output_exercise_1_2").innerHTML = "Их количество: " + k + "."; //Вывод
            return;   
        } else {
            document.getElementById("output_exercise_1_1").innerHTML = "Четные цифры: Не обнаружено."; //Вывод
            document.getElementById("output_exercise_1_2").innerHTML = "Их количество: 0."; //Вывод
        return; 
        }
    }
}

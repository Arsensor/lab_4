document.getElementById("send_2").onclick = exercise_2; //Переход по клику
function exercise_2(){ //Объявление функции
    let number_1 = document.getElementById("name_a_2").value; //Получение переменной по id
    let number_2 = document.getElementById("name_b_2").value; //Получение переменной по id
    let amount = Number(number_2); //Объявление переменной для суммы
    let syllable = Number(number_1); //Объявление переменной для сложения
    let i; //Объявление переменной для цикла
    if (isNaN(number_1) && isNaN(number_2) || (number_1 == "" || number_2 == "")){ //Объявление условия на проверку
        alert("Введите ещё раз корректное число"); //Вывод о несоответствии ввода
        return; 
    } else { //Если все верно, тогда
        if (Number(number_1) < Number(number_2)){ //Объявление условия на проверку
            for(i = 0; i < (number_2 - number_1); i++) { //Цикл
                amount += syllable; //Сложение
                syllable++; //Прибавление
            }
            document.getElementById("output_exercise_2").innerHTML = "Сумма всех целых чисел: " + amount + "."; //Вывод
            return; 
        } else { //Если не прошел по условию проверки, тогда
            alert("Введите ещё раз корректные числа"); //Вывод
            return;
        }
    }
}
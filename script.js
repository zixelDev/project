'use strict';
let money,
    time,
    appdata = {},
    expences = {},
    optionalExpenses = {},
    income = [];
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
time = new Date(time);

    expences.a1 = prompt("Введите обязательную статью расходов на этот месяц");
    expences.a2 = prompt("Во сколько обойдется?");
    expences.a3 = prompt("Введите обязательную статью расходов на этот месяц");
    expences.a4 = prompt("Во сколько обойдется?");

appdata.time = time;
appdata.money = money;
appdata.expences = expences;
appdata.optionalExpenses = optionalExpenses;
appdata.savings = false;
let result = (money - expences.a2 - expences.a4) / 30;
if (result <= 0 ) {
alert("Свободных средств нет");  
} else {
alert("Бюджет на 1 день составляет: " + result.toFixed(2));
}

//let answer = confirm("Are yoe here?");
//console.log(answer);
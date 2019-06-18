'use strict';
let money, time, appdata = {},
    expences = {},
    optionalExpenses = {},
    income = [];

 function start() {
     money = prompt("Ваш бюджет на месяц?");
     time = prompt("Введите дату в формате YYYY-MM-DD");
     while (isNaN(money) || money == '' || money == null) {
         money = prompt("Ваш бюджет на месяц?");
     }
 }
 start();

function ChooseExpences() {
    for (let index = 0; index < 2; index++) {
        let a = prompt("Введите обязательную статью расходов на этот месяц"),
            b = prompt("Во сколько обойдется?");
        if (typeof (a) === 'string' && typeof (a) != null && a != '' &&
            typeof (b) === 'string' && typeof (b) != null && b != '') {
            expences[a] = b;
        } else {
            index--;
        }

    }
}
ChooseExpences();

appdata.time = time;
appdata.money = money;
appdata.expences = expences;
appdata.optionalExpenses = optionalExpenses;
appdata.savings = true;
appdata.moneyPerDay = (appdata.money / 30).toFixed(2);
alert(appdata.moneyPerDay);

function DetectLevel() {
    if (appdata.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appdata.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}
DetectLevel();


function CheckSavings() {
    let save, percent;
    if (appdata.savings == true) {
        save = +prompt("Каков ваш бюджет?");
        percent = +prompt("Под какой процент?");
    }
    appdata.MothInCome = save / 100 * percent / 12;
    alert("Доход с вашего депозита в месяц: " + appdata.MothInCome);
}

CheckSavings();


function detectDayBudget() {
    let DayInCome;
    DayInCome = appdata.MothInCome / 30;
    alert(DayInCome);
}
detectDayBudget();


function chooseOptExpenses() {
    let a, index;
    index = 1;
    while (index < 4) {
        a = prompt("Введите статью необязательных расходов");
        if (typeof (a) === 'string' && typeof (a) != null && a != '') {
            appdata.optionalExpenses[index] = a;
            index++;
        }
    }
}
chooseOptExpenses();


// let index = 0;
// while (index < 2) {

//     let a = prompt("Введите обязательную статью расходов на этот месяц"),
//         b = prompt("Во сколько обойдется?");
//     if (typeof (a) === 'string' && typeof (a) != null && a != '' && typeof (b) === 'string' &&
//         typeof (b) != null && b != '') {
//         expences[a] = b;
//         index++;
//     }

// }
// let index = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов на этот месяц"),
//         b = prompt("Во сколько обойдется?");
//     if (typeof (a) === 'string' && typeof (a) != null && a != '' && typeof (b) === 'string' &&
//         typeof (b) != null && b != '') {
//         expences[a] = b;
//         index++;
//     }
// } while (index < 2);
'use strict';
let money,
    time,
    appdata = {},
    expences = {},
    optionalExpenses = {},
    income = [];
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
//time = new Date(time);

// expences.a1 = prompt("Введите обязательную статью расходов на этот месяц");
// expences.a2 = prompt("Во сколько обойдется?");
// expences.a3 = prompt("Введите обязательную статью расходов на этот месяц");
// expences.a4 = prompt("Во сколько обойдется?");

for (let index = 0; index < 2; index++) {
    let a = prompt("Введите обязательную статью расходов на этот месяц"),
        b = prompt("Во сколько обойдется?");
    if (typeof (a) === 'string' && typeof (a) != null && a != '' && typeof (b) === 'string' &&
        typeof (b) != null && b != '') {
        expences[a] = b;
    } else {
        index--;
    }

}
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


appdata.time = time;
appdata.money = money;
appdata.expences = expences;
appdata.optionalExpenses = optionalExpenses;
appdata.savings = false;
appdata.moneyPerDay = appdata.money / 30;
alert(appdata.moneyPerDay);
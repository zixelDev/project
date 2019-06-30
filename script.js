'use strict';
let money, time, 
startbut = document.getElementById("start"),
budgetfield = document.querySelector(".budget-value"),
daybudgetfield = document.querySelector(".daybudget-value"),
levelfield = document.querySelector(".level-value"),
expensesfield = document.querySelector(".expenses-value"),
optionalexpensesfield = document.querySelector(".optionalexpenses-value"),
incomefield = document.querySelector(".income-value"),
monthsavingsfield = document.querySelector(".monthsavings-value"),
yearsavingsfield = document.querySelector(".yearsavings-value"),
inputfields = document.querySelectorAll(".expenses-item"),
buttons = document.getElementsByTagName("button"),
ExpensesBtnApprove = buttons[0],
OptionalExpensesBtnApprove = buttons[1],
StartBtn = buttons[3],
CountBtnBudget = buttons[2],
InputExpensesfields = document.getElementsByClassName("expenses-item"),
InputOptionalExpensesFields = document.querySelectorAll(".optionalexpenses-item"),
InputCheckSavings = document.querySelector(".checksavings"),
InputChooseIncome = document.querySelector(".choose-income"),
InputChooseSum = document.querySelector(".choose-sum"),
InputYearValue = document.querySelector(".year-value"),
InputMonthValue = document.querySelector(".month-value"),
InputDayValue = document.querySelector(".day-value");




function start() {
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет на месяц?");
    }
}
start();

let appdata = {
    timedata: time,
    budget: money,
    expences: {},
    optionalExpenses: {},
    savings: true,
    income: [],
    ChooseExpences: function () {
        for (let index = 0; index < 2; index++) {
            let a = prompt("Введите обязательную статью расходов на этот месяц"),
                b = prompt("Во сколько обойдется?");
            if (typeof (a) === 'string' && typeof (a) != null && a != '' &&
                typeof (b) === 'string' && typeof (b) != null && b != '') {
                appdata.expences[a] = b;
            } else {
                index--;
            }

        }
    },
    detectDayBudget: function () {
        appdata.moneyPerDay = (appdata.budget / 30).toFixed(2);
        alert(appdata.moneyPerDay);
    },
    DetectLevel: function () {
        if (appdata.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appdata.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }

    },
    CheckSavings: function () {
        let save, percent;
        if (appdata.savings == true) {
            save = +prompt("Каков ваш бюджет?");
            percent = +prompt("Под какой процент?");
        }
        appdata.MothInCome = save / 100 * percent / 12;
        alert("Доход с вашего депозита в месяц: " + appdata.MothInCome);
    },
    chooseOptExpenses: function () {
        let a, index;
        index = 1;
        while (index < 4) {
            a = prompt("Введите статью необязательных расходов");
            if (typeof (a) === 'string' && typeof (a) != null && a != '') {
                appdata.optionalExpenses[index] = a;
                index++;
            }
        }
    },
    chooseInCome: function () {
        let ans = prompt("Что вам может принести доход (Перечислите через запятую)?");

        while (ans == '' || ans == null || typeof (ans) != 'string' || !isNaN(Number(ans))) {
            ans = prompt("Что вам может принести доход (Перечислите через запятую)?");
        }
        appdata.income = ans.split(", ");
        appdata.income.push(prompt("Может что-то ещё?"));
        appdata.income.sort();
        console.log("Способы доп.заработка: ");
        appdata.income.forEach(function (item, i) {
            if (i > 0) {
                console.log(item);
            }
        });
        console.log("Наша программа включает в себя:");
        for (let key in appdata) {
           console.log( "Свойство: " + key + ", значение: " +appdata[key]); 
        }
    }
};




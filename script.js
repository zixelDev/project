'use strict';
let money, time, moneyPerDay,
    startbut = document.getElementById("start"),
    budgetfield = document.querySelector(".budget-value"),
    daybudgetfield = document.querySelector(".daybudget-value"),
    levelfield = document.getElementsByClassName("level-value"),
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
    InputCheckSavings = document.getElementById("savings"),
    InputChooseIncome = document.querySelector(".choose-income"),
    InputChooseSum = document.querySelector(".choose-sum"),
    InputChoosePercent = document.querySelector(".choose-percent"),
    InputYearValue = document.querySelector(".year-value"),
    InputMonthValue = document.querySelector(".month-value"),
    InputDayValue = document.querySelector(".day-value"),

    test = document.getElementsByClassName("title");
    test[0].style.fontSize = "35px";

    startbut.onclick = function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет на месяц?");
    }
    appdata.budget = money;
    appdata.timedata = time;
    budgetfield.textContent = money;
    InputYearValue.value = new Date(Date.parse(time)).getFullYear();
    InputMonthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    InputDayValue.value = new Date(Date.parse(time)).getUTCDate();
};

ExpensesBtnApprove.addEventListener('click', function () {
    let sum = 0;
    for (let index = 0; index < inputfields.length; index++) {
        let a = inputfields[index].value,
            b = inputfields[++index].value;
        if (typeof (a) === 'string' && typeof (a) != null && a != '' &&
            typeof (b) === 'string' && typeof (b) != null && b != '') {
            appdata.expenses[a] = +b;
            sum += +b;
        } else {
            index--;
        }

    }
    expensesfield.textContent = sum;
});



OptionalExpensesBtnApprove.addEventListener('click', function () {
    let a, index;
    index = 0;
    while (index < InputOptionalExpensesFields.length) {
        a = InputOptionalExpensesFields[index].value;
        if (typeof (a) === 'string' && typeof (a) != null && a != '') {
            appdata.optionalExpenses[index] = a;
            optionalexpensesfield.textContent += a + '  ';
            index++;
        }
    }

});

CountBtnBudget.addEventListener('click', function () {
    if (appdata.budget != undefined) {
        appdata.moneyPerDay = (appdata.budget / 30).toFixed(2);
        daybudgetfield.textContent = appdata.moneyPerDay;
        if (appdata.moneyPerDay < 100) {
            levelfield[0].textContent = "Это минимальный уровень достатка!";
        } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
            levelfield[0].textContent = "Это средний уровень достатка!";
        } else if (appdata.moneyPerDay > 2000) {
            levelfield[0].textContent = "Это высокий уровень достатка!";
        } else {
            levelfield[0].textContent = "Произошла ошибка";
        }

    } else {
        daybudgetfield.textContent = "Ошибка: Бюджет на месяц не задан!";
        levelfield.textContent = "Ошибка: Бюджет на месяц не задан!";
    }

});

InputChooseIncome.addEventListener('input', function () {
    appdata.income = InputChooseIncome.value.split(", ");
    incomefield.textContent = appdata.income;
});

InputCheckSavings.addEventListener('click', function () {
    if (appdata.savings == true) {
        appdata.savings = false;
    } else {
        appdata.savings = true;
    }
});

InputChooseSum.addEventListener('input', function () {
    if (appdata.savings == true) {
        appdata.MothInCome = +InputChooseSum.value / 100 * +InputChoosePercent.value / 12;
        appdata.YearInCome = +InputChooseSum.value / 100 * +InputChoosePercent.value;
        monthsavingsfield.textContent = appdata.MothInCome;
        yearsavingsfield.textContent = appdata.YearInCome;
    }
});

InputChoosePercent.addEventListener('input', function () {
    if (appdata.savings == true) {
        appdata.MothInCome = (+InputChooseSum.value / 100 * +InputChoosePercent.value / 12).toFixed(2);
        appdata.YearInCome = (+InputChooseSum.value / 100 * +InputChoosePercent.value).toFixed(2);
        monthsavingsfield.textContent = appdata.MothInCome;
        yearsavingsfield.textContent = appdata.YearInCome;
    }


});

let appdata = {
    timedata: time,
    budget: money,
    savings: false,
    moneyPerDay: moneyPerDay,
    income: [],
    expenses: {},
    optionalExpenses: {}
};
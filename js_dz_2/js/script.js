const trueOrFalse = alert('Выберите верные утверждения, используя "ОК", если утверждение верно и "Отмена", если утверждение ложное. Успехов!');

let yes = 0;
let no = 0;

const question1 = confirm('1. Преобразование Number (“false”) вернет число 0.');
if (question1 === true) {
    yes++
} else {
    no++;
};

const question2 = confirm('2. Значение переменной let нельзя изменить после инициализации.');
if (question2 === false) {
    yes++;
} else {
    no++;
}

const question3 = confirm('3. У объекта Math существует метод для вычисления квадратного корня.');
if (question3 === true) {
    yes++;
} else {
    no++;
}

const question4 = confirm('4. Результат выполнения логической операции - это булево значение.');
if (question4 === true) {
    yes++;
} else {
    no++;
}

const question5 = confirm('5. JS - слишком сложный и ему невозможно научиться.');
if (question5 === false) {
    yes++;
} else {
    no++;
}


alert(`Правильных ответов: ${ yes }, неравильных ответов: ${ no }`);
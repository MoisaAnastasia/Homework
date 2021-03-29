const num = +prompt("Введите число");
const addCorrectEnding = (num) => {
    const module10 = num % 10;
    const module100 = num % 100;
    if (module100 > 10 && module100 < 20) {
        return " Анастасий";
    } else {
        if (module100 !== 11 && module10 === 1) {
            return " Анастасия";
        } else if (module10 > 1 && module10 < 5) {
            return " Анастасии";
        } else {
            return " Анастасий";
        }
    }
};

alert(num + addCorrectEnding(num));
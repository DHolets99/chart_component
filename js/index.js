const days = document.querySelectorAll('.column__day');
const columns = document.querySelectorAll('.column__thumb');
const arr = [];

let date = new Date();
const getWeekDay = () => {
    let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return days[date.getDay()];
};

(async () => {
    let obj = await (await fetch('data.json')).json();
    obj.forEach(el => {
        arr.push(el);
    }); 
    getColumnHeight();
})();

const getColumnHeight = () => {
    arr.forEach(el => {
        let [day, amount] = [Object.values(el)[0], Object.values(el)[1]];
        for (i = 0; i < days.length; i++) {
            if (day == days[i].id) {
                columns[i].style.height = 2 * `${amount}` + 'px';
            };
            addToday(days[i].id);
        };
    });
};

const addToday = (day) => {
    if (getWeekDay(date) == day) {
        columns[i].classList.toggle('column__thumb_active');
    }
};




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
            addTodayClass(days[i].id);
        };
    });
};

const addTodayClass = (day) => {
    if (getWeekDay(date) == day) {
        columns[i].classList.toggle('column__thumb_active');
    }
};

const showTable = (e) => {
    let item = e.target;
    const table = document.createElement('div');
    table.className = 'column__amount';
    let curAmount = parseFloat(item.style.height)/2;
    table.innerHTML = `$${curAmount}`;
    item.parentNode.prepend(table);
}

const hideTable = (e) => {
    let item = e.target;
    const table = item.parentNode.querySelector('.column__amount');
    table.remove();
}
columns.forEach(el => {
    el.addEventListener('mouseover', showTable)
});

columns.forEach(el => {
    el.addEventListener('mouseout', hideTable)
});
const ul = document.getElementById('aut');

let db = fetch('data.json');

console.log(db);
(async () => {
    let DB = await(await fetch('data.json')).json();

    for (let i = 0; i < DB.length; i++) {
        ul.append(`${DB[i].day}: ${DB[i].amount}`);
    };
})();




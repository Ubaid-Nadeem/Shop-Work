let table = document.getElementById("table");
let text = document.getElementById("value");
let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let date = new Date();
let fullDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
let getData = JSON.parse(localStorage.getItem('getData')) || []


getData.forEach((value, index) => {

    let tr = document.createElement('tr')
    let tdDay = document.createElement('td')
    let trDate = document.createElement('td')
    let trQuantity = document.createElement('td')
    let trbtn = document.createElement('td')


    trbtn.addEventListener('click', () => {
        console.log(index)
        getData.splice(index,1);
        localStorage.setItem('getData', JSON.stringify(getData));
        window.location.reload();
    })

    tdDay.innerText = value.day;
    trDate.innerText = value.date;
    trQuantity.innerText = value.quantity;
    trbtn.innerText = "X";

    tr.appendChild(tdDay);
    tr.appendChild(trDate);
    tr.appendChild(trQuantity);
    tr.appendChild(trbtn);

    table.appendChild(tr);

});

function Add() {

    let data = {
        day: days[date.getDay()],
        date: fullDate,
        quantity: text.value
    }
    text.value = ''
    console.log(data);

    getData.unshift(data);
    console.log(getData);
    localStorage.setItem('getData', JSON.stringify(getData));
    window.location.reload();
}

function deleteAll() {
    localStorage.removeItem('getData');
    window.location.reload();

}
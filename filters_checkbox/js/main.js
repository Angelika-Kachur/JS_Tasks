"use strict";

//Input Data
let arrPhones = [
    {
        "ratingReviews": "5 stars", 
        "price": "3 333 dollars", 
        "name": "Nokia Black"
    }, 
    {
        "ratingReviews": "3 stars", 
        "price": "2 777 dollars", 
        "name": "Samsung Red"
    }, 
    {
        "ratingReviews": "2 stars", 
        "price": "5 333 dollars", 
        "name": "Samsung Galaxy"
    }, 
    {
        "ratingReviews": "5 stars", 
        "price": "4 333 dollars", 
        "name": "Xiaomi"
    }, 
    {
        "ratingReviews": "2 stars", 
        "price": "6 333 dollars", 
        "name": "Apple"
    }, 
    {
        "ratingReviews": "4 stars", 
        "price": "3 333 dollars", 
        "name": "Lenovo Green"
    },
    {
        "ratingReviews": "2 stars", 
        "price": "2 333 dollars", 
        "name": "Apple iPhone Pink"
    }
];

let filteredPhones = [];

//Render Data Table
function renderDataTable(sortType) {
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = "";

    for (let value of arrPhones) {
        let firstWord = value.name.replace(/ .*/,'');
        let tr =  "<tr name='" + firstWord + "'>" + "<td>" + value.name + "</td>" + "<td>" + value.ratingReviews + "</td>" + "<td>" + value.price + "</td>" + "</tr>";
        tbody.innerHTML += tr;
    };
};

renderDataTable();

//Add Filters Checkbox
let filters = document.getElementsByClassName("filters")[0];
let phoneName = "";
let phonesSet = new Set();

function createPhonesSet() {
    for (let value of arrPhones) {
        phoneName = value.name.replace(/ .*/,'');
        phonesSet.add(phoneName); 
    };
};
createPhonesSet();

function Checkbox(name) {
    this.name = name;
    let label = document.createElement("label");
    label.textContent = name;
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", name);
    filters.appendChild(label);
    label.appendChild(checkbox);
}

(function createCheckbox() {
    for (let value of phonesSet) {
        new Checkbox(value);
    };
})();

//Filter Phones on Change input
$('input').on("change", function(e){
    let phones = $('tbody tr');
    let targetCheckbox = e.target;
    let targetCheckboxVal = e.target.getAttribute("value");
    let index = filteredPhones.indexOf(targetCheckboxVal);
    
    if(index > -1) {
        filteredPhones.splice(index, 1);
    } else {
        filteredPhones.push(targetCheckboxVal);
    }

    phones.filter(i => {
        if(filteredPhones.includes(phones[i].getAttribute("name"))) {
            console.log(phones[i]);
            phones[i].style.display = "table-row";
        } else if(filteredPhones.length == 0) {
            phones[i].style.display = "table-row";
        } else {
            phones[i].style.display = "none";
        }
    });
});
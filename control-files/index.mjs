import {
    kjv
}
from '../data-files/en-kjv.mjs';

start();
// Extracting the names || to be used for the dropdown list

function start() {
    // this will extract names from the bible
    let names = kjv.map(books => books.name);

    // // this will extratc chapters from the the selelected book
    // let chapters = kjv.map(function (books) {
    //     if (books.name === selectedName) {
    //         for (let i = 0; i < books.chapters.length; i++) {
    //             return i + 1;
    //         }

    //     }
    // })

    // generates the dropdownlist of books
    dropDownNames(names);

    // generate the dropdown list of chapters
    dropDownChapters(chapters);
}

// this will get book names
//console.log(kjv[5].name);

// dropdrown of books
function dropDownNames(names) {
    document.getElementById('bible-book').innerHTML = `
        <select class="form-select" onchange="getChapters(this.value)"> /*TODO function not getting called*/
            <option selected>Choose A Book</option>
            ${names.map(function(name){
            return `<option>${name}</option>`
            }).join("")}
        </select>
        `
}

// get selected name and generate dropdown list
function getChapters(selectedName) {
    // this will extratc chapters from the the selelected book
    let chapters = kjv.map(function (books) {
        if (books.name === selectedName) {
            for (let i = 0; i < books.chapters.length; i++) {
                return i + 1;
            }
        }
    })

    // Generates the dropdown list of chapters using the chapters list above
    dropDownChapters(chapters);
}


// dropdown of chapters
function dropDownChapters(chapters) {
    document.getElementById('book-chapter').innerHTML = `
        <select class="form-select" onchange="getChapters(this.value)">
            <option selected>Choose A Chapter</option>
            ${chapters.map(function(chapter){
            return `<option>${chapter}</option>`
            }).join("")}
        </select>
        `


}


// this will get verses
console.log(kjv[5].chapters[0][0]);
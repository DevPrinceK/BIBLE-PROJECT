async function start() {
    // fetch books
    let kjvJunk = await fetch('https://www.abibliadigital.com.br/api/books');

    // converts books to json
    let kjv = await kjvJunk.json();

    // display entire kjv
    display(kjv);

    // calls the function that get names of the books
    getNames(kjv);

    // get number of chapters in each
    getChapters(kjv);


}


async function getVersions() {
    let getVersions = await fetch('https://www.abibliadigital.com.br/api/versions');

    let versionJSON = await getVersions.json();

    // get chapters
    getChapters(versionJSON);

}


async function getAllDetails() {
    let allData = await fetch('https://www.abibliadigital.com.br/api/verses/:version/:gn/:2');
}


function greet(kjv, kjvJunk) {
    //
}

// gets all names of books
function getNames(bibleObj) {
    let bookNames = Array.from(bibleObj).map(book => book.name);

    //console.log(bookNames);
    //console.log(typeof bookNames);
}

// gets all chapters of books  || NOTE can use this to generate the chapters dropdown
function getChapters(bibleObj) {
    let chapters = Array.from(bibleObj).map(book => book.chapters)
    //display(chapters);

    // traversing the chapter
    traverseChapter(chapters[0]);
}


// iterate through the chapters || NOTE can use this to generate the chapters dropdown
function traverseChapter(chapter) {
    for (let i = 0; i < chapter; i++) {
        console.log(i + 1);
    }
}

//

//display function
function display(item) {
    console.log(item);
}
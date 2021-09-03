async function start() {

    // let version = document.getElementById("");

    // // fetch books
    // let kjvJunk = await fetch('https://www.abibliadigital.com.br/api/books');

    // // converts books to json
    // let bibleObj = await kjvJunk.json();

    // // destructures the names and chapters
    // let [names, chapters] = getNamesAndChapters(bibleObj);

    // get text
    getText('niv', 'gn', 5, 2);


}


async function getText(versionHolder, abbrevHolder, chapterHolder, verseHolder) {

    let url = `https://www.abibliadigital.com.br/api/verses/${versionHolder}/${abbrevHolder}/${chapterHolder}/${verseHolder}`;

    //
    let getQuote = await fetch(url);

    //https://www.abibliadigital.com.br/api/verses/nvi/gn/5/2

    let getQuoteJson = await getQuote.json();

    // 
    let getQuoteText = await getQuoteJson.text;

    // display text
    display(getQuoteText);
    //display(getQuote);

}


// gets all names of books
function getNamesAndChapters(bibleObj) {
    let bookNames = Array.from(bibleObj).map(book => book.name);

    let bookChapters = Array.from(bibleObj).map(book => book.chapters)
    return [bookNames, bookChapters];
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
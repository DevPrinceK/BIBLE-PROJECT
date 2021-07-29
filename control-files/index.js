async function start() {
    let kjvJunk = await fetch('https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json');



    let kjv = await kjvJunk.json();

    greet(kjv, kjvJunk);

}





function greet(kjv, kjvJunk) {
    console.log("Hello, your code if running fine. The onpageshow event is firing up the function");
    console.log(`The KJV is a/an ${typeof (kjv)} datatype`);
    console.log(`The KJVJUNK is a/an ${typeof (kjvJunk)} datatype`);
    console.log(kjv);
}
let books = [
    {
        author: "Chetan Bhagat",
        bookName: "Making India Awesome",
        year: 2019
    },
    {
        author: "Chetan Bhagat",
        bookName: "Half Girlfriend",
        year: 2011
    },
    {
        author: "Jhumpa Lahiri",
        bookName: "The Namesake",
        year: 2010,
    },
    {
        author: "Arundhati Roy",
        bookName: "The God of Small Things",
        year: 1997,
    },
    {
        author: "Vikram Seth",
        bookName: "A Suitable Boy",
        year: 1993,
    },
];

function titleBook(books, callback) {
    let titles = books.map(element => element.bookName);
    console.log(titles);
    callback(titles);
};

function sortTitle(titles) {
    titles = titles.sort();
    console.log(titles.join(" , "));
};

let output = titleBook(books, sortTitle);
console.log(output);

//  OUTPUT
// [
//    'Making India Awesome',
//    'Half Girlfriend',
//    'The Namesake',
//    'The God of Small Things',
//    'A Suitable Boy'
//  ]
//      A Suitable Boy , Half Girlfriend , Making India Awesome , The God of Small Things , The Namesake

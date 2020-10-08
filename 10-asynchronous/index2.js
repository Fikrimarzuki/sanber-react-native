var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooksPromise(10000, books[0])
    .then(time => {
        return readBooksPromise(time, books[1]);
    })
    .then(time => {
        return readBooksPromise(time, books[2]);
    })
    .then(time => {
        return time;
    })
    .catch(err => {
        return err
    })

// Lanjutkan code untuk menjalankan function readBooksPromise 
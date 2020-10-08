// di index.js
var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
readBooks(10000, books[0], time => {
    readBooks(time, books[1], time1 => {
        readBooks(time1, books[2], time2 => {
            return time2;
        })
    })
})

// Tulis code untuk memanggil function readBooks di sini
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('kanji.sqlite3');

const database = {};

database.SearchGrade = (kanji_list, callback=()=>{}) => {
    let list = "(";
    Object.keys(kanji_list).forEach((key)=>{
        list += `'${key}',`
    })
    list = list.replace(/.$/, ')')
    db.all("SELECT * FROM grades WHERE kanji IN "+ list, (err, rows) => {
        rows.map((row) => {
            kanji_list[row.kanji].grade = row.grade
        })
        callback(kanji_list);
    }) 
}

module.exports = database;
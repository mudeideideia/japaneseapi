var express = require('express');
var app = express();
const port = 3000

const db = require('./database');
const songs = require('./songs');
const japanese = require('./japanese');
const text_handler = require('./text_handler');


app.get('/', function (req, res) {
  character_json = text_handler.FilterUniqueCharacters(songs.kamen_rider)
  character_json = text_handler.RemoveCharacters(character_json, japanese.IsHiragana)
  character_json = text_handler.RemoveCharacters(character_json, japanese.IsKatakana)
  character_json = text_handler.RemoveCharacters(character_json, japanese.IsOcidental)
  character_json = db.SearchGrade(character_json, (json) => res.json(json))  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://github.com/mudeideideia/japaneseapi

echo "# japanseapi" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mudeideideia/japanseapi.git
git push -u origin main
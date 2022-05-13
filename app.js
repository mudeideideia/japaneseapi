var express = require('express');
var app = express();
const port = 3000

const db = require('./database/database');
const songs = require('./songs');
const japanese = require('./modules/japanese');
const text_handler = require('./modules/text_handler');

app.get('/',(req,res)=>{
  res.sendFile('/www/index.html', { root: __dirname})
})

app.get('/song/:song_name', function (req, res) {
  const song = songs[req?.params?.song_name] || songs.kamen_rider
  character_json = text_handler.FilterUniqueCharacters(song)
  character_json = text_handler.RemoveCharacters(character_json, japanese.IsHiragana)
  character_json = text_handler.RemoveCharacters(character_json, japanese.IsKatakana)
  character_json = text_handler.RemoveCharacters(character_json, japanese.IsOcidental)
  character_json = db.SearchGrade(character_json, (json) => res.json(json))  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://github.com/mudeideideia/japaneseapi

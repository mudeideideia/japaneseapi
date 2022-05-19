#!/bin/bash
sqlite3 japanese.sqlite3 << 'END_SQL'
DROP TABLE IF EXISTS vocab;
CREATE TABLE vocab("word" TEXT, "hiragana" TEXT, "furigana" TEXT, "portuguese" TEXT, "english" TEXT);
.import --csv "./vocab.csv" vocab
END_SQL
cp japanese.sqlite3 ../database/japanese.sqlite3
const japanese = {}
japanese.ocidental = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

japanese.symbols = [ "{", "}", "(", ")", "<",">"]

japanese.hiragana = [
	"あ", "い", "う", "え", "お",
	"か", "き", "く", "け", "こ",
	"さ", "し", "す", "せ", "そ",
	"た", "ち", "つ", "て", "と",
	"ば", "び", "ぶ", "べ", "ぼ",
	"ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
	"な", "に", "ぬ", "ね", "の",
	"は", "ひ", "ふ", "へ", "ほ",
	"ま", "み", "む", "め", "も",
	"や", , "ゆ", "よ",
	"ら", "り", "る", "れ", "ろ",
	"が", "ぎ", "ぐ", "げ", "ご",
	"ざ", "じ", "ず", "ぜ", "ぞ",
	"だ", "ぢ", "づ", "で", "ど",
	"わ", "ゔ", "を",
	"ゃ", "ゅ", "ょ", "っ",
	"ん",
	"が", "ぎ", "ぐ", "げ", "ご",
	"ざ", "じ", "ず", "ぜ", "ぞ",
	"だ", "ぢ", "づ", "で", "ど",
	"ば", "び", "ぶ", "べ", "ぼ",
	"ぱ", "ぴ", "ぷ", "ぺ", "ぽ"
]

japanese.katakana = 
[
"ア", "イ", "ウ", "エ", "オ", 
"カ", "キ", "ク", "ケ", "コ",
"サ", "シ", "ス", "セ", "ソ",
"タ", "チ", "ツ", "テ", "ト",
"ナ", "ニ", "ヌ", "ネ", "ノ",
"ハ", "ヒ", "フ", "ヘ", "ホ",
"マ", "ミ", "ム", "メ", "モ",
"ラ", "リ", "ル", "レ", "ロ",
"ガ", "ギ", "グ", "ゲ", "ゴ",
"ザ", "ジ", "ズ", "ゼ", "ゾ",
"ダ", "ヂ", "ヅ", "デ", "ド",
"バ", "ビ", "ブ", "ベ", "ボ",
"パ", "ピ", "プ", "ペ", "ポ",
"ヤ",       "ユ",       "ヨ",								
"ワ",                   "ヲ",		
"ン", "ヮ",
"ァ", ",", "ィ", "ゥ", "ェ", "ォ",
"ャ",  "ュ", "ョ", "ッ"]

japanese.IsHiragana = (character) => japanese.hiragana.includes(character)
japanese.IsKatakana = (character) => japanese.katakana.includes(character)
japanese.IsOcidental = (character) => japanese.ocidental.includes(character)
japanese.IsSymbol = (character) => japanese.symbols.includes(character)
module.exports = japanese



// const url = 'http://10.0.0.169:3000'
const url = 'http://192.168.0.241:3000'

const lyrics_space = document.getElementById("lyrics-space")

fetch(url+'/song/default')
.then( response => response.json())
.then( json => {
    lyrics_space.innerHTML = json.text.replace(/\n/g,'<br>')
}).then(() => {
    fetch(url+"/song/", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: `{"text": "${lyrics_space.innerHTML}"}`,
    })
    .then(response => response.json())
    .then(json => {
        let text = lyrics_space.innerHTML
        Object.keys(json).forEach((key) => {
            text = text.replace(RegExp(`${key}`,'g'),`<span class=N${json[key]?.grade}>${key}</span>`)
        })
        lyrics_space.innerHTML = text
    })
});

ToggleClass = (class_name) => {
    document.querySelectorAll("."+class_name).forEach(e => e.classList.toggle('on'))
}
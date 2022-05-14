
fetch('/song/default')
.then( response => response.json())
.then( json => {
    document.getElementById("div-element").innerHTML = json.text.replace(/\n/g,'<br>')
}).then(() => {
    fetch("/song/", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: `{"text": "${document.getElementById("div-element").innerHTML}"}`,
    })
    .then(response => response.json())
    .then(json => {
        let text = document.getElementById("div-element").innerHTML
        Object.keys(json).forEach((key) => {
            text = text.replace(RegExp(`${key}`,'g'),`<span class=N${json[key]?.grade}>${key}</span>`)
        })
        document.getElementById("div-element").innerHTML = text
    })
});

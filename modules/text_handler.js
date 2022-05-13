const handler = {}

handler.FilterUniqueCharacters = (text) => {
    const unique_characters = {};
    for (var i = 0; i < text.length; i++) {
        if (text[i] == " ") continue
        if (unique_characters[text[i]] == undefined)
            unique_characters[text[i]] = { pos: [i] }
        else
            unique_characters[text[i]].pos.push(i)
    }
    return unique_characters
}

handler.RemoveCharacters = (json_to_clean, criterion) => {
    const clean_json = {}
    Object.keys(json_to_clean).forEach(
        (key) => {
            if (criterion(key)) {
                clean_json[key] = json_to_clean[key]
                delete json_to_clean[key]
            }
        }
    )
    return json_to_clean
}

module.exports = handler
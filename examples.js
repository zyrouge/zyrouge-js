const zy = require("zyrouge.js"); <br>

//Title
zy.title().then(txt => {
    console.log(txt)
})

//Author
zy.author().then(txt => {
    console.log(txt)
})

//Lyrics
zy.lyrics().then(txt => {
    console.log(txt)
})

//Thumbnail
zy.thumb().then(img => {
    console.log(img)
})

//Link
zy.link().then(link => {
    console.log(link)
})

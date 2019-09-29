const fetch = require('node-fetch')

var apis = {

    title: function (title) {
        return new Promise(async function(resolve, reject) {
         fetch(`https://some-random-api.ml/lyrics/?title=${title}`).then(response => {
           resolve(response.title)
         })
       })
    },
    
    author: function (title) {
        return new Promise(async function(resolve, reject) {
         fetch(`https://some-random-api.ml/lyrics/?title=${title}`).then(response => {
           resolve(response.author)
         })
       })
    },
    
    lyrics: function (title) {
        return new Promise(async function(resolve, reject) {
         fetch(`https://some-random-api.ml/lyrics/?title=${title}`).then(response => {
           resolve(response.lyrics)
         })
       })
    },

    thumbnail: function (title) {
        return new Promise(async function(resolve, reject) {
         fetch(`https://some-random-api.ml/lyrics/?title=${title}`).then(response => {
           resolve(response.thumbnail)
         })
       })
    },
    
    url: function (title) {
        return new Promise(async function(resolve, reject) {
         fetch(`https://some-random-api.ml/lyrics/?title=${title}`).then(response => {
           resolve(response.url)
         })
       })
    }

}

module.exports = apis;

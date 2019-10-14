// Retorna `false` se a url for invalida

const pattern = new RegExp('^(https?:\\/\\/)?' // protocolo
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // dominio
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // ou ip(v4)
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // porta e path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query
    + '(\\#[-a-z\\d_]*)?$', 'i'); // localizacao (#scroll)

module.exports = (url) => pattern.test(url);

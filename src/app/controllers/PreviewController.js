const validateUrl = require('../helpers/validateUrl');

module.exports = {
  index(req, res) {
    // Define a url
    const { url } = req.body;

    // Valida a url
    if (!validateUrl(url)) return res.status(400).json({ error: 'Url inválida!' });

    // Busca as informacoes daquela url



    return res.status(200).send(url);
  },
};

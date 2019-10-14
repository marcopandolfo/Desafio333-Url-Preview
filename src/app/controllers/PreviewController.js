const validateUrl = require('../helpers/validateUrl');
const getUrlData = require('../helpers/getUrlData');

module.exports = {
  async index(req, res) {
    // Define a url
    const { url } = req.body;

    // Valida a url
    if (!validateUrl(url)) return res.status(400).json({ error: 'Url inválida!' });

    // Busca as informacoes daquela url
    try {
      const urlData = await getUrlData(url);
      return res.status(200).send(urlData);
    } catch (error) {
      return res.status(400).json({ error: 'Url inválida!' });
    }
  },
};

/* eslint-disable no-restricted-syntax */
const urlMetadata = require('url-metadata');
const extractDomain = require('extract-domain');

const getDataWithCrawler = require('./getDataWithCrawler');

module.exports = async (url) => {
  const metaData = await urlMetadata(url);

  const data = {};

  /* Somente cria a prop se houver algum valor */
  for (const prop in metaData) {
    if (Object.prototype.hasOwnProperty.call(metaData, prop)) {
      // Verifica se o campo tem algum valor
      if (metaData[prop]) {
        // Atribui o valor
        data[prop] = metaData[prop];
      }
    }
  }

  /* Verifica se o conteutdo do json na prop e og:prop sao iguais */
  for (const prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      // Renomeia og:prop para paenas prop
      if (prop.startsWith('og:')) {
        const newName = prop.replace('og:', '');
        data[newName] = data[prop];
        delete (data[prop]);
      }

      // Verifica props duplicadas (og:prop & prop)
      if (data[prop] === data[`og:${prop}`]) {
        // Se for igual, apenas deleto a prop duplicada
        delete (data[prop]);
      }
    }
  }

  /* Extrai o dominio da url */
  if (!data.domain) {
    data.domain = extractDomain(url);
  }

  /* Renomeia as props para ficar de acordo com o exigido */
  // image para thumbnail
  if (!data.thumbnail && data.image) {
    data.thumbnail = data.image;
    delete (data.image);
  }
  // site_name para sitename
  if (data.site_name) {
    data.sitename = data.site_name;
    delete (data.site_name);
  }

  // Verifica se falta alguma prop e pega com o crawler
  const parsedData = await getDataWithCrawler(data, url);

  /* Transforma /image/12.png em http://url.com/image/12.png */
  if (Object.prototype.hasOwnProperty.call(parsedData, 'thumbnail')) {
    if (parsedData.thumbnail.startsWith('/')) parsedData.thumbnail = `${url}${parsedData.thumbnail}`;
  }

  return data;
};

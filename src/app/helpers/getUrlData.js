/* eslint-disable no-restricted-syntax */
const urlMetadata = require('url-metadata');

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

  /* Transforma /image/12.png em http://url.com/image/12.png */
  if (Object.prototype.hasOwnProperty.call(data, 'image')) {
    if (data.image.startsWith('/')) data.image = `${url}${data.image}`;
  }

  return data;
};

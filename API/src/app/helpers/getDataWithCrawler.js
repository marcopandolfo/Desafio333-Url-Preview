/* eslint-disable no-param-reassign */
const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async (data, url) => {
  // Verifica se falta alguma prop e pega com o crawler
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);

  // Crawl Title
  if (!data.title) {
    // Tenta procurar o titulo pela tag h1
    const h1Title = $('h1').text();
    if (h1Title) {
      data.title = h1Title;
      return;
    }
    // Tenta procurar o titulo pela tag title
    const titleTag = $('title').text();
    if (titleTag) {
      data.title = titleTag;
      return;
    }
  }

  // Crawl Description
  if (!data.description) {
    // Tenta procurar a description pela tag h2
    const h2Desc = $('h2').text();
    if (h2Desc) {
      data.description = h2Desc;
      return;
    }
    // Tenta procurar a description pela tag p
    const pDesc = $('p').text();
    if (pDesc) {
      data.description = pDesc;
      return;
    }
  }

  // Crawl Thumbnail
  if (!data.thumbnail) {
    // Tenta procurar a thumb pela tag img
    const img = $('img').attr('src');
    if (img) {
      data.thumbnail = img;
    }
  }

  // eslint-disable-next-line consistent-return
  return data;
};

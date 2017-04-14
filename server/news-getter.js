require('dotenv').config()
const db = require('../db/db');
const axios = require('axios');

getArsTechnicaLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'ars-technica',
    },
  });
};

getEngadgetLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'engadget',
    },
  });
};

getRecodeLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'recode',
    },
  });
};

getTechCrunchLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'techcrunch',
    },
  });
};

getTheNextWebLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'the-next-web',
    },
  });
};

getTheVergeLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'the-verge',
    },
  });
};

axios.all([getArsTechnicaLatest(), getEngadgetLatest(), getRecodeLatest(), getTechCrunchLatest(), getTheNextWebLatest(), getTheVergeLatest()])
  .then(axios.spread(function (arsTechnica, engadget, recode, techCrunch, theNextWeb, theVerge) {
    const articles = [];
    const formattedSources = {
      'ars-technica':'Ars Technica', 
      'engadget': 'Engadget', 
      'recode': 'Recode', 
      'techcrunch': 'TechCrunch', 
      'the-next-web': 'The Next Web', 
      'the-verge': 'The Verge'
    };

    for (let i = 0; i < arguments.length; i++) {
      const source = formattedSources[arguments[i].data.source];
      arguments[i].data.articles.forEach((article) => {
        article.source = source;
        article.unique_id = article.publishedAt + article.author;
        articles.push(article);
      });
    }

    articles.forEach((article) => {
      db.any('insert into news(title, author, description, url, url_to_image, published_at, source, unique_id) select ${title}, ${author}, ${description}, ${url}, ${url_to_image}, ${published_at}, ${source}, ${unique_id} where not exists (select 1 from news where unique_id=${unique_id})', { title: article.title, author : article.author, description: article.description, url: article.url, url_to_image: article.urlToImage, published_at: article.publishedAt, source: article.source, unique_id: article.unique_id})
      .then(results => {
      })
      .catch(error => {
        console.log('error', error)
      });
    })
  })).catch((error) => {
    throw error;
  });





  
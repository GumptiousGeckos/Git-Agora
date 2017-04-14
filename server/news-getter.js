require('dotenv').config()
var axios = require('axios');

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
    const formattedSources = {
      'ars-technica':'Ars Technica', 
      'engadget': 'Engadget', 
      'recode': 'Recode', 
      'techcrunch': 'TechCrunch', 
      'the-next-web': 'The Next Web', 
      'the-verge': 'The Verge'
    };
    const data = [];
    const articles = [];
    for (var i = 0; i < arguments.length; i++) {
      data.push(arguments[i].data);
    }
    data.forEach((data) => {
      var source = formattedSources[data.source];
      data.articles.forEach((article) => {
        article.source = source;
        article.unique = article.publishedAt + article.author;
        articles.push(article);
      });
    });

    console.log(articles);
  })).catch((error) => {
    throw error;
  });





  
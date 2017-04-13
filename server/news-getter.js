require('dotenv').config()
var axios = require('axios');
// Ignoreing Hacker-News due to lack of detail

var sources = ['ars-technica', 'engadget', 'recode', 'techcrunch', 'the-next-web', 'the-verge']
var formattedSourecs = ['Ars Technica', 'Engadget', 'Recode', 'TechCrunch', 'The Next Web', 'The Verge']

axios({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})

newsApi = {
  baseURL: 'https://newsapi.org/v1/articles',
  latest: 'latest',
  top: 'top',
  apiKey: process.env.NEWS_API_KEY,
}

//News Source Options: Ars Technica, Engadget, Hacker News, Recode, The Verge, The Next Web, TechCrunch
// Sort Options: Top, Latest (the next web is latest only);

getArsTechnicaLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'ars-technica',
    },
  })
};

getEngadgetLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'engadget',
    },
  })
};

getRecodeLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'recode',
    },
  })
};

getTechCrunchLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'techcrunch',
    },
  })
};

getTheNextWebLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'the-next-web',
    },
  })
};

getTheVergeLatest = () => {
  return axios.get('https://newsapi.org/v1/articles', {
    params: {
      apiKey: process.env.NEWS_API_KEY,
      source: 'the-verge',
    },
  })
};

axios.all([getArsTechnicaLatest(), getEngadgetLatest(), ])
  .then(axios.spread(function (arsTechnica, engadget, ) {
    // Both requests are now complete
  }));


  
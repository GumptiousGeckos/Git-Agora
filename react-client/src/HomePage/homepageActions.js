const hotProjectDummyData = [
  {
    id: 0,
    title: "Project Title",
    description: "Project Description!",
    likes: 5,
    dislikes: 1
  },
  {
    id: 1,
    title: "Project Title2",
    description: "Project Description2!",
    likes: 2,
    dislikes: 2
  },
  {
    id: 2,
    title: "Project Title3",
    description: "Project Description3!",
    likes: 0,
    dislikes: 2
  }
];

const hotNewsDummyData = [
  {
    "id": 0,
    "author": "Brian Heater",
    "title": "Don’t run commercials designed to trigger smart assistants",
    "description": "A well-known fast food chain – let’s call them Kurger Bing – is debuting a new 15 second ad today set to start running nationally. It starts off simply..",
    "url": "https://techcrunch.com/2017/04/12/no-thank-you/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/04/img_2492.jpg?w=764&h=400&crop=1",
    "publishedAt": "2017-04-12T16:05:43Z",
    "source": "techcrunch",
    "likes": 23,
    "dislikes": 0
  },
  {
    "id": 1,
    "author": "Josh Constine",
    "title": "Facebook Messenger hits 1.2 billion monthly users, up from 1B in July",
    "description": "Normally adding 200 million users in 8 months to a product that already has a billion would reduce the average engagement, but most apps don't have Facebook..",
    "url": "https://techcrunch.com/2017/04/12/messenger/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/04/facebook-messenger-1-2-billion-users.png?w=764&h=400&crop=1",
    "publishedAt": "2017-04-12T16:00:33Z",
    "source": "techcrunch",
    "likes": 7,
    "dislikes": 2
  },
  {
    "id": 2,
    "author": "Sarah Buhr",
    "title": "Qualtrics waits on that IPO, raises $180 million at a $2.5 billion valuation instead",
    "description": "That Qualtrics IPO many have been expecting is on hold for now. The online market research platform has just raised its third round for $180 million at a..",
    "url": "https://techcrunch.com/2017/04/12/qualtrics-waits-on-that-ipo-raises-180-million-at-a-2-5-billion-valuation-instead/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/04/qualtrics_ryansmith-1_1024-e1491942393932.jpg?w=758&h=400&crop=1",
    "publishedAt": "2017-04-12T12:00:38Z",
    "source": "techcrunch",
    "likes": 11,
    "dislikes": 4
  },
  {
    "id": 3,
    "author": "Brian Heater",
    "title": "Don’t run commercials designed to trigger smart assistants",
    "description": "A well-known fast food chain – let’s call them Kurger Bing – is debuting a new 15 second ad today set to start running nationally. It starts off simply..",
    "url": "https://techcrunch.com/2017/04/12/no-thank-you/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/04/img_2492.jpg?w=764&h=400&crop=1",
    "publishedAt": "2017-04-12T16:05:43Z",
    "source": "techcrunch",
    "likes": 23,
    "dislikes": 0
  },
  {
    "id": 4,
    "author": "Josh Constine",
    "title": "Facebook Messenger hits 1.2 billion monthly users, up from 1B in July",
    "description": "Normally adding 200 million users in 8 months to a product that already has a billion would reduce the average engagement, but most apps don't have Facebook..",
    "url": "https://techcrunch.com/2017/04/12/messenger/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/04/facebook-messenger-1-2-billion-users.png?w=764&h=400&crop=1",
    "publishedAt": "2017-04-12T16:00:33Z",
    "source": "techcrunch",
    "likes": 7,
    "dislikes": 2
  },
  {
    "id": 5,
    "author": "Sarah Buhr",
    "title": "Qualtrics waits on that IPO, raises $180 million at a $2.5 billion valuation instead",
    "description": "That Qualtrics IPO many have been expecting is on hold for now. The online market research platform has just raised its third round for $180 million at a..",
    "url": "https://techcrunch.com/2017/04/12/qualtrics-waits-on-that-ipo-raises-180-million-at-a-2-5-billion-valuation-instead/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/04/qualtrics_ryansmith-1_1024-e1491942393932.jpg?w=758&h=400&crop=1",
    "publishedAt": "2017-04-12T12:00:38Z",
    "source": "techcrunch",
    "likes": 11,
    "dislikes": 4
  }
];

const requestHotProjects = () => {
  return {
    type: "FETCHING_HOT_PROJECTS",
  };
};

const receivedHotProjects = (projects) => {
  return {
    type: 'RECEIVED_HOT_PROJECTS',
    payload: projects
  };
};

const errorHotProjects = (err) => {
  return {
    type: 'REQUEST_HOT_PROJECTS_ERROR',
    error: err
  };
};

const requestHotNews = () => {
  return {
    type: "FETCHING_HOT_NEWS",
  };
};

const receivedHotNews = (projects) => {
  return {
    type: 'RECEIVED_HOT_NEWS',
    payload: projects
  };
};

const errorHotNews = (err) => {
  return {
    type: 'REQUEST_HOT_NEWS_ERROR',
    error: err
  };
};

export function fetchHotProjects() {
  return (dispatch) => {
    dispatch(requestHotProjects());
    // axios.get('http://localhost:3000/api/projects/?')
    //   .then((response) => {
    //     dispatch(receivedHotProjects(response.data));
    //   })
    //   .catch((err) => {
    //     dispatch(errorHotProjects());
    //   });
    setTimeout(() => {
      dispatch(receivedHotProjects(hotProjectDummyData));
    }, 1000);
  };
};

export function fetchHotNews() {
  return (dispatch) => {
    dispatch(requestHotNews());
    // axios.get('http://localhost:3000/api/news/?')
    //   .then((response) => {
    //     dispatch(receivedHotNews(response.data));
    //   })
    //   .catch((err) => {
    //     dispatch(errorHotNews());
    //   });
    setTimeout(() => {
      dispatch(receivedHotNews(hotNewsDummyData));
    }, 1000);
  };
};
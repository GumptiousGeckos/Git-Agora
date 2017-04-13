const initialState = {
  fetchingArticles: false, 
  articles: [],
}

const articleDummyData = [
  {
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
    "author": "Sarah Perez",
    "title": "Walmart to lower prices on a million online-only items if you opt for store pickup over shipping",
    "description": "Walmart.com is preparing to launch a new feature called \"Pickup Discount\" that will lower the prices on up to one million online-only items if the customer..",
    "url": "https://techcrunch.com/2017/04/11/walmart-to-lower-prices-on-a-million-online-only-items-if-you-opt-for-store-pickup-over-shipping/",
    "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/01/walmart-truckclose-up-side-view_129821854433586541.jpg?w=764&h=400&crop=1",
    "publishedAt": "2017-04-12T04:01:08Z",
    "source": "techcrunch",
    "likes": 12,
    "dislikes": 3
  }
]

const articles = (state = initialState, action) => {
  switch(action.type) {
    case "FETCHING_ARTICLES": {
      return {
        ...state,
        fetchingArticles: true
      }
      
    }
    case "RECEIVED_ARTICLES" : {
      return {
        ...state,
        articles: articleDummyData,
        fetchingArticles: false
      }
    }
    default: {
      return state;
    }
  }
}

export default articles;

module.exports = {
  collaborators: [
    {
      id: 1,
      user_id: 3,
      topic_id: 1
    },
    {
      id: 2,
      user_id: 4,
      topic_id: 2
    },
    {
      id: 3,
      user_id: 5,
      topic_id: 3
    }
  ],

  comments: [
    {
      id: 1,
      user_id: 3,
      topic_id: 3,
      content: 'Wow you In? That\'s a cool name'
    },
    {
      id: 2,
      user_id: 1,
      topic_id: 2,
      content: 'You will be rich'
    },
    {
      id: 4,
      user_id: 5,
      topic_id: 4,
      content: 'Can I get in on this?'
    },
    {
      id: 4,
      user_id: 7,
      topic_id: 5,
      content: 'Yah for you'
    }
  ],

  favorites: [
    {
      id: 1,
      user_id: 1,
      topic_id: 6
    },
    {
      id: 2,
      user_id: 3,
      topic_id: 5
    },
    {
      id: 3,
      user_id: 5,
      topic_id: 4
    },
    {
      id: 4,
      user_id: 7,
      topic_id: 3
    }
  ],

  follows:[
    {
      id: 1,
      user_id: 3,
      type: 'article',
      type_id: 1
    },
    {
      id: 2,
      user_id: 4,
      type: 'article',
      type_id: 2
    },
    {
      id: 3,
      user_id: 5,
      type: 'project',
      type_id: 3
    },
    {
      id: 4,
      user_id: 7,
      type: 'project',
      type_id: 4
    },
    {
      id: 5,
      user_id: 1,
      type: 'project',
      type_id: 5
    }
  ],

  messages: [
    {
      id: 1,
      sender_id: 1,
      receiver_id: 3,
      content: 'You\'re dumb'
    },
    {
      id: 2,
      sender_id: 3,
      receiver_id: 1,
      content: 'No You are'
    },
    {
      id: 3,
      sender_id: 3,
      receiver_id: 1,
      content:  'Wanna go'
    },
    {
      id: 4,
      sender_id: 1,
      receiver_id: 3,
      content: 'No thanks'
    }

  ],

  ratings: [
    {
      id: 1,
      user_id: 1,
      dev_points: 40,
      idea_points: 200
    },
    {
      id: 2,
      user_id: 3,
      dev_points: 60,
      idea_points: 110
    },
    {
      id: 3,
      user_id: 5,
      dev_points: 80,
      idea_points: 93
    },
    {
      id: 4,
      user_id: 7,
      dev_points: 100,
      idea_points: 55
    }
  ],

  tags: [
    {
      id: 1,
      tag_name: 'Money'
    },
    {
      id: 2,
      tag_name: 'Machines'
    },
    {
      id: 3,
      tag_name: 'Technology'
    },
    {
      id: 4,
      tag_name: 'AI'
    },
    {
      id: 5,
      tag_name: 'Python'
    }
  ],

  projects_tags: [
    {
      id: 1,
      tag_id: 1,
      project_id: 1
    },
    {
      id: 2,
      tag_id: 1,
      project_id: 2
    },
    {
      id: 3,
      tag_id: 1,
      project_id: 3
    },
    {
      id: 4,
      tag_id: 1,
      project_id: 4
    }
  ],

  articles: [
    {
      author: 'Brian Heater',
      title: 'Don’t run commercials designed to trigger smart assistants',
      description: 'A well-known fast food chain – let’s call them Kurger Bing – is debuting a new 15 second ad today set to start running nationally. It starts off simply..',
      url: 'https://techcrunch.com/2017/04/12/no-thank-you/',
      url_to_image: 'https://tctechcrunch2011.files.wordpress.com/2017/04/img_2492.jpg?w=764&h=400&crop=1',
      published_at: '2017-04-12T16:05:43Z',
      source: 'techcrunch'
    },
    {
      author: 'Josh Constine',
      title: 'Facebook Messenger hits 1.2 billion monthly users, up from 1B in July',
      description: 'Normally adding 200 million users in 8 months to a product that already has a billion would reduce the average engagement, but most apps don\'t have Facebook..',
      url: 'https://techcrunch.com/2017/04/12/messenger/',
      url_to_image: 'https://tctechcrunch2011.files.wordpress.com/2017/04/facebook-messenger-1-2-billion-users.png?w=764&h=400&crop=1',
      published_at: '2017-04-12T16:00:33Z',
      source: 'techcrunch'
    },
    {
      author: 'Sarah Buhr',
      title: 'Qualtrics waits on that IPO, raises $180 million at a $2.5 billion valuation instead',
      description: 'That Qualtrics IPO many have been expecting is on hold for now. The online market research platform has just raised its third round for $180 million at a..',
      url: 'https://techcrunch.com/2017/04/12/qualtrics-waits-on-that-ipo-raises-180-million-at-a-2-5-billion-valuation-instead/',
      url_to_image: 'https://tctechcrunch2011.files.wordpress.com/2017/04/qualtrics_ryansmith-1_1024-e1491942393932.jpg?w=758&h=400&crop=1',
      published_at: '2017-04-12T12:00:38Z',
      source: 'techcrunch'
    },
    {
      author: 'Sarah Perez',
      title: 'Walmart to lower prices on a million online-only items if you opt for store pickup over shipping',
      description: 'Walmart.com is preparing to launch a new feature called \'Pickup Discount\' that will lower the prices on up to one million online-only items if the customer..',
      url: 'https://techcrunch.com/2017/04/11/walmart-to-lower-prices-on-a-million-online-only-items-if-you-opt-for-store-pickup-over-shipping/',
      url_to_image: 'https://tctechcrunch2011.files.wordpress.com/2016/01/walmart-truckclose-up-side-view_129821854433586541.jpg?w=764&h=400&crop=1',
      published_at: '2017-04-12T04:01:08Z',
      source: 'techcrunch'
    }
  ],

  projects: [
    {
      id: 1,
      user_id: 1,
      title: 'Let\'s make machines',
      description: 'Build machines',
      link: 'www.google.com'
    },
    {
      id: 2,
      user_id: 2,
      title: 'Reinvent Google',
      description: 'Build conglomerate',
      link: 'www.google.com'
    },
    {
      id: 3,
      user_id: 3,
      title: 'Make money',
      description: 'Get rich',
      link: 'www.google.com'
    },
    {
      id: 4,
      user_id: 4,
      title: 'Electric cars',
      description: 'Remake Tesla',
      link: 'www.google.com'
    },
    {
      id: 5,
      user_id: 4,
      title: 'Let\'s build nukes',
      description: 'Big ones',
      link: 'www.google.com'
    },
    {
      id: 6,
      user_id: 3,
      title: 'I want to build robotic slaves',
      description: 'I want helping increasing output and other things',
      link: 'www.google.com'
    },
    {
      id: 7,
      user_id: 5,
      title: 'I want to engineer gold',
      description: 'I like gold',
      link: 'www.google.com'
    },
    {
      id: 8,
      user_id: 7,
      title: 'I want to travel to Alpha Centauri',
      description: 'Earth is done',
      link: 'www.google.com'
    }
  ],

  users: [
    {
      id: 1,
      username: 'Ed',
      password: 'jeff',
      email: 'jeff@jeff.com',
      mobile: '3444444'
    },
    {
      id: 2,
      username: 'Paul',
      password: 'jeff',
      email: 'jeff1@jeff.com',
      mobile: '3444444'
    },
    {
      id: 3,
      username: 'Jon',
      password: 'jeff',
      email: 'jeff2@jeff.com',
      mobile: '344-4444'
    },
    {
      id: 4,
      username: 'Augustus',
      password: 'jeff',
      email: 'jeff3@jeff.com',
      mobile: '3444444'
    },
    {
      id: 5,
      username: 'Sarah',
      password: 'jeff',
      email: 'jeff4@jeff.com',
      mobile: '3444444'
    },
    {
      id: 6,
      username: 'Jessica',
      password: 'jeff',
      email: 'jeff5@jeff.com',
      mobile: '3444444'
    },
    {
      id: 7,
      username: 'Ragnar',
      password: 'jeff',
      email: 'jeff6@jeff.com',
      mobile: '3444444'
    }
  ],

  votes: [
    {
      id: 1,
      user_id: 1,
      topic_id: 2,
      vote_type: 0
    },
    {
      id: 2,
      user_id: 2,
      topic_id: 3,
      vote_type: 1
    },
    {
      id: 3,
      user_id: 3,
      topic_id: 4,
      vote_type: 1
    },
    {
      id: 4,
      user_id: 4,
      topic_id: 5,
      vote_type: 1
    },
    {
      id: 5,
      user_id: 5,
      topic_id: 6,
      vote_type: 0
    },
    {
      id: 6,
      user_id: 6,
      topic_id: 6,
      vote_type: 1
    }
  ]
}
module.exports = {
  collaborators: [
    {
      id: 1,
      user_id: 3,
      project_id: 1
    },
    {
      id: 2,
      user_id: 4,
      project_id: 2
    },
    {
      id: 3,
      user_id: 5,
      project_id: 3
    }
  ],

  comments: [
    {
      id: 1,
      user_id: 1,
      date_created: new Date().toDateString(),
      type: 'project',
      topic_id: 3,
      content: 'Wow you In? That\'s a cool name'
    },
    {
      id: 2,
      user_id: 2,
      date_created: new Date().toDateString(),
      type: 'project',
      topic_id: 3,
      content: 'You will be rich'
    },
    {
      id: 4,
      user_id: 3,
      date_created: new Date().toDateString(),
      type: 'project',
      topic_id: 4,
      content: 'Can I get in on this?'
    },
    {
      id: 4,
      user_id: 4,
      date_created: new Date().toDateString(),
      type: 'project',
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
      tag_name: 'money'
    },
    {
      id: 2,
      tag_name: 'machines'
    },
    {
      id: 3,
      tag_name: 'technology'
    },
    {
      id: 4,
      tag_name: 'ai'
    },
    {
      id: 5,
      tag_name: 'python'
    }
  ],

  projects_tags: [
    {
      id: 1,
      tag_name: 'money',
      project_id: 1
    },
    {
      id: 2,
      tag_name: 'machines',
      project_id: 2
    },
    {
      id: 3,
      tag_name: 'money',
      project_id: 3
    },
    {
      id: 4,
      tag_name: 'money',
      project_id: 4
    },
    {
      id: 5,
      tag_name: 'technology',
      project_id: 3
    },
    {
      id: 6,
      tag_name: 'ai',
      project_id: 6
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
      name: 'Ed',
      username: 'Ed91',
      email: 'jeff@jeff.com',
      avatar: 'https://68.media.tumblr.com/avatar_6a1ead04c761_128.png'
    },
    {
      id: 2,
      name: 'Paul',
      username: 'Paul52',
      email: 'jeff1@jeff.com',
      avatar: 'https://68.media.tumblr.com/avatar_6a1ead04c761_128.png'
    },
    {
      id: 3,
      name: 'Jon',
      username: 'Jon99',
      email: 'jeff2@jeff.com',
      avatar: 'https://68.media.tumblr.com/avatar_6a1ead04c761_128.png'
    },
    {
      id: 4,
      name: 'Augustus',
      username: 'Gus11',
      email: 'jeff3@jeff.com',
      avatar: 'https://68.media.tumblr.com/avatar_6a1ead04c761_128.png'
    },
    {
      id: 5,
      name: 'Sarah',
      username: 'Sarah69',
      email: 'jeff4@jeff.com',
      avatar: 'https://68.media.tumblr.com/avatar_6a1ead04c761_128.png'
    },
    {
      id: 6,
      name: 'Jessica',
      username: 'JessBess',
      email: 'jeff5@jeff.com',
      avatar: 'https://68.media.tumblr.com/avatar_6a1ead04c761_128.png'
    },
    {
      id: 7,
      name: 'Ragnar',
      username: 'Ragnar666',
      email: 'jeff6@jeff.com',
      avatar: 'https://68.media.tumblr.com/avatar_6a1ead04c761_128.png'
    }
  ],

  votes: [
    {
      type: 'article',
      user_id: 1,
      topic_id: 2,
      vote_type: 0
    },
    {
      type: 'article',
      user_id: 2,
      topic_id: 3,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 3,
      topic_id: 4,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 4,
      topic_id: 5,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 5,
      topic_id: 6,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 6,
      topic_id: 6,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 1,
      topic_id: 6,
      vote_type: 0
    },
    {
      type: 'article',
      user_id: 2,
      topic_id: 7,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 3,
      topic_id: 8,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 4,
      topic_id: 8,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 5,
      topic_id: 9,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 6,
      topic_id: 10,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 1,
      topic_id: 11,
      vote_type: 0
    },
    {
      type: 'article',
      user_id: 2,
      topic_id: 12,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 3,
      topic_id: 13,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 4,
      topic_id: 14,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 5,
      topic_id: 15,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 6,
      topic_id: 16,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 1,
      topic_id: 17,
      vote_type: 0
    },
    {
      type: 'article',
      user_id: 2,
      topic_id: 18,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 3,
      topic_id: 19,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 4,
      topic_id: 20,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 5,
      topic_id: 21,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 6,
      topic_id: 22,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 6,
      topic_id: 23,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 1,
      topic_id: 24,
      vote_type: 0
    },
    {
      type: 'article',
      user_id: 2,
      topic_id: 25,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 3,
      topic_id: 22,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 4,
      topic_id: 23,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 5,
      topic_id: 23,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 6,
      topic_id: 25,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 1,
      topic_id: 23,
      vote_type: 0
    },
    {
      type: 'article',
      user_id: 2,
      topic_id: 20,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 3,
      topic_id: 19,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 4,
      topic_id: 20,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 5,
      topic_id: 20,
      vote_type: 1
    },
    {
      type: 'article',
      user_id: 6,
      topic_id: 19,
      vote_type: 1
    }, {
      type: 'project',
      user_id: 1,
      topic_id: 2,
      vote_type: 0
    },
    {
      type: 'project',
      user_id: 2,
      topic_id: 3,
      vote_type: 1
    },
    {
      type: 'project',
      user_id: 3,
      topic_id: 4,
      vote_type: 1
    },
    {
      type: 'project',
      user_id: 4,
      topic_id: 5,
      vote_type: 1
    },
    {
      type: 'project',
      user_id: 5,
      topic_id: 6,
      vote_type: 1
    },
    {
      type: 'project',
      user_id: 6,
      topic_id: 6,
      vote_type: 1
    },
    {
      type: 'project',
      user_id: 1,
      topic_id: 6,
      vote_type: 0
    },
    {
      type: 'project',
      user_id: 2,
      topic_id: 7,
      vote_type: 1
    },
    {
      type: 'project',
      user_id: 3,
      topic_id: 8,
      vote_type: 1
    },
    {
      type: 'project',
      user_id: 4,
      topic_id: 8,
      vote_type: 1
    }
  ]
};

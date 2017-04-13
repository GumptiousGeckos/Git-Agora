//Successful pull request: action==="closed", pull_request.merged === true
//https://api.github.com/repos/:owner/:repo/hooks/
{ name: 'web',
  active: true,
  events: [
  'pull_request'
  ],
  config: {
    url:'http://b10d2993.ngrok.io/hooks/github',
    content_type: 'json'
  }
}
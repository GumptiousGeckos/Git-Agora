//Successful pull request: action==="closed", pull_request.merged === true
//https://api.github.com/repos/:owner/:repo/hooks/
{ name: 'web',
  active: true,
  events: [
  'pull_request',
  'push'
  ],
  config: {
    url:'http://b10d2993.ngrok.io/github/hooks',
    content_type: 'json'
  }
}
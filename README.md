# git-agora.io

> Git-agora.io is a platform for users to be able to easily share and find open-source Github projects. The application integrates with Github's webhook API feature to actively distribute idea points to its creators and development points for its contributors.

## Team

  - Augustus Brennan
  - Edward Chan
  - Jonathan Chou
  - Paul Mills

## Table of Contents

1. [Installing Dependencies](#installing-dependencies)
1. [Requirements](#requirements)
1. [Usage](#Usage)
1. [Development](#development)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)


## Installing Dependencies

From within the root directory:
```sh
npm install
```

## Requirements

- Node 7.6.0
- PostgreSQL 9.6
- MongoDB (or MLab)

## Usage

Homepage shows you some of our top projects and recent news articles from top tech sites
> ![HomePage](/screenshots/HomePage.png?raw=true "HomePage")

Log in with Github's OAuth
> ![Login](/screenshots/Github.png?raw=true "Login")

Sharing a project is simple and easy and will instantiate a webhook onto your repository to keep application updated on any new pull requests.
> ![ProjectCreation1](/screenshots/ProjectCreation1.png?raw=true "ProjectCreation1")
> ![ProjectCreation2](/screenshots/ProjectCreation2.png?raw=true "ProjectCreation2")

Git-agora will also automatically retrieve some of the more recent pull requests to retroactively give user points!
> ![ProjectPage2](/screenshots/ProjectPage2.png?raw=true "ProjectPage2")

You can see the project's information and also comment on it if you have any thoughts
> ![ProjectPage1](/screenshots/ProjectPage2.png?raw=true "ProjectPage1")

Your user profile allows you to check your points, projects, and favorites
> ![UserProfile](/screenshots/UserProfile.png?raw=true "UserProfile")

## Development


### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

Feel free to contribute to our project if you have any ideas or features you would like to add. Please note that for any additional Github features you might be interested in building, you will need to create your own Github token to test out and a tunneling service (e.g. ngrok) to help test it out. Please keep in mind our [Style Guide](/STYLE-GUIDE.md) when adding anything new!

module.exports = {
  tags: ['functionality'],
  'Testing basic functionality' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 15000)
      // check homepage
      .assert.visible('div[name=trendingTechNews]')
      .assert.visible('div[name=hotProjects]')
      // check news
      .assert.visible('span[name=news]')
      .click('span[name=news]')
      .waitForElementVisible('div[name=newsList]', 1000)
      .assert.visible('div[name=newsList]')
      // check projects
      .assert.visible('span[name=projects]')
      .click('span[name=projects]')
      .waitForElementVisible('div[name=projectList]', 1000)
      .assert.visible('div[name=projectList]')
      // check project view
      .click('div[name=projectList] > div:nth-child(2)')
      .waitForElementVisible('div[name=projectDetails]', 1000)
      .assert.visible('div[name=projectDetails]')
      // comment area
      .assert.visible('textarea')
      .assert.visible('button')
      // check categories
      .assert.visible('span[name=categories]')
      .click('span[name=categories]')
      .waitForElementVisible('input[name=searchQuery]', 1000)
      .assert.visible('input[name=searchQuery]')
      .end();
  }
};

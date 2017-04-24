const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/projects_tags', file);
  return new QueryFile(fullPath, { minify: true });
}

const queries = {
  getProjectsByTag: sql('getProjectsByTag.sql'),
  getProjectsByTagAndUserVotes: sql('getProjectsByTagAndUserVotes.sql'),
  addProjectTag: sql('addProjectTag.sql'),
  insertTag: sql('./../tags/insertTag.sql'),
  findTagByName: sql('./../tags/findTagByName.sql')
};

module.exports.getProjectsByTag = (req, res) => {
  const { tag_name } = req.query;

  if (req.user) {
    return db.query(queries.getProjectsByTagAndUserVotes, {
      tag_name,
      user_id: req.user[0].id
    })
    .then((data) => {
      console.log('Success getting topics by tag and user votes');
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
  } else {
    return db.query(queries.getProjectsByTag, { tag_name })
    .then((data) => {
      console.log('Success getting topics by tag');
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
  }
};

module.exports.addProjectTag = (req, res) => {
  const { tag_id, project_id } = req.body;

  return db.query(queries.addProjectTag, [tag_id, project_id])
  .then(() => {
    res.status(201).send('Success adding topic tag');
  })
  .catch((error) => {
    res.status(404).send(error);
  });
};

module.exports.createProjectTag = (req, res) => {
  const { tags, projectId } = req.body;
  // Check to see if tags are in tags table
  console.log('creating project tag ', tags, projectId);
  return db.tx((t) => {
    return t.batch(tags.map((ele) => {
      return t.any(queries.insertTag, [ele.text.toLowerCase()]);
    }));
  })
  .then(() => {
    db.tx((t) => {
      return t.batch(tags.map((ele) => {
        console.log('inserting ', ele);
        return t.any(queries.addProjectTag, [ele.text.toLowerCase(), projectId]);
      }));
    });
  })
  .then(() => {
    res.status(201).send('Success adding topics');
  })
  .catch((error) => {
    res.status(404).send(error);
  });
};

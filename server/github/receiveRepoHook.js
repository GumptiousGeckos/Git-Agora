module.exports = (req, res) => {
  // console.log('receiving post from webhook', req.body);
  if (req.body.action === 'opened') {
    console.log('open PR', req.body);
  } else if (req.body.action === 'closed' && req.body.base.merged) {
    console.log('closed PR and merged', req.body);
  } else if (req.body.action === 'closed') {
    console.log('closed PR and not merged', req.body);
  }
  res.end();
};

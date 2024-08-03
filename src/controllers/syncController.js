const { syncMenu } = require("../services/syncService");

async function triggerSync(req, res) {
  const { locationId } = req.query;
  syncMenu(locationId);

  res.status(200).send("Sync completed");
}

module.exports = { triggerSync };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {String, ObjectId} = mongoose.Types;

const integrationSchema = new Schema({
  integrationName: String,
  sourceApi: ObjectId,
  targetApi: ObjectId,
  integrations: [
    {
      source: String,
      target: String
    }
  ]
});

module.exports = mongoose.model('Integration', integrationSchema);
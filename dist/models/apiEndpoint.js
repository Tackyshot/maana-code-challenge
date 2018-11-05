const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {String, Boolean} = mongoose.Types;

const apiEndpointSchema = new Schema({
    hostname: String,
    requestMethod: String,
    pathParts: [
      {
        name: String,
        isVariable: Boolean,
        isRequired: Boolean
      }
    ],
    queryParams:[
      {
        name: String,
        param: [String]
      }
    ],
    headers: [
      {
        headerName: String,
        headerValue: [String]
      }
    ],
    requestBodyObj: Object,
    responseBodyObj: Object
});

module.exports = mongoose.model('ApiEndpoint', apiEndpointSchema);
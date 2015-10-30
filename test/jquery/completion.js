var util = require("../util");

exports['test nuxeo'] = function() {
  util.assertCompletion("nuxeo.", {
    "start": {
      "line": 0,
      "ch": 6
     },
     "end": {
      "line": 0,
      "ch": 6
     },
     "isProperty": true,
     "isObjectKey": false,
     "completions": [{"name":"Client","type":"fn(options?: ClientOptions)","doc":"TODO","url":"https://doc.nuxeo.com/display/NXDOC/JavaScript+Client","origin":"nuxeo"}
                    ]
  }, false);
}
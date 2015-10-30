(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["tern/lib/infer", "tern/lib/tern"], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("nuxeo", function(server, options) {
    var cx = infer.cx(), isNode = server.plugins["node"] != null;
    updateDefs(isNode);
    server.addDefs(defs);
  });

  function updateDefs(isNode) {
    var nuxeoDef = {
      "nuxeo": {
        "Client": "Client"
      }    
    }
    if (isNode) defs["!define"]["!known_modules"] = nuxeoDef;
    else defs["nuxeo"] = nuxeoDef["nuxeo"];
  }
  
  var defs = {
    "!name": "nuxeo",
    "!define": {
      "NuxeoError": {
        
      },
      "AuthOptions": {
        "method": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        },
        "username": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        },
        "password": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        }
      },
      "ClientOptions": {
        "baseURL": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        },
        "restPath": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        },
        "automationPath": {
          "!type": "string",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        },
        "auth": {
          "!type": "AuthOptions",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        },
        "timeout": {
          "!type": "number",
          "!doc": "TODO",
          "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
        }
      },
      "Client": {
        "!type": "fn(options?: ClientOptions)",
        "!doc": "TODO",
        "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client",
        "prototype": {
          "connect": {
            "!type": "fn(callback: fn(error: +NuxeoError, client: !this))",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "connected": {
            "!type": "bool",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "header": {
            "!type": "fn(name: ?, value: ?) -> !this",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "headers": {
            "!type": "fn(headers: ?) -> !this",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "timeout": {
            "!type": "fn(timeout: number) -> !this",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "repositoryName": {
            "!type": "fn(repositoryName: string) -> !this",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "schema": {
            "!type": "fn(schema: ?) -> !this",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "schemas": {
            "!type": "fn(schemas: ?) -> !this",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "fetchOperationDefinitions": {
            "!type": "fn(callback: fn(error: +NuxeoError, data: ?))",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "operation": {
            "!type": "fn(id: ?)) -> +Operation",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "request": {
            "!type": "fn(path: ?)) -> +Request",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "document": {
            "!type": "fn(data: ?)) -> +Document",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          },
          "uploader": {
            "!type": "fn(options: ?)) -> +Uploader",
            "!doc": "TODO",
            "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client"
          }
        }
      },
      "OperationOptions": {
        
      },
      "Operation": {
        "!type": "fn(options?: OperationOptions)",
        "!doc": "TODO",
        "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client",
        "prototype": {
          
        }
      },
      "RequestOptions": {
        
      },
      "Request": {
        "!type": "fn(options?: RequestOptions)",
        "!doc": "TODO",
        "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client",
        "prototype": {
          
        }
      },
      "DocumentOptions": {
        
      },
      "Document": {
        "!type": "fn(options?: DocumentOptions)",
        "!doc": "TODO",
        "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client",
        "prototype": {
          
        }
      },
      "UploaderOptions": {
        
      },
      "Uploader": {
        "!type": "fn(options?: UploaderOptions)",
        "!doc": "TODO",
        "!url": "https://doc.nuxeo.com/display/NXDOC/JavaScript+Client",
        "prototype": {
          
        }
      }
    }
  }
  
});
var q = require("q");
var defer = q.defer();

defer.promise.then(console.log);

setTimeout(defer.fulfill, 300, 'RESOLVED!');
// setTimeout(defer.resolve, 300, 'RESOLVED!');
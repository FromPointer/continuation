var fs = require('fs');

try {
  fs.readFile('continuation.j', 'utf-8', obtain(text));
  console.log(text);
} catch (e) {
  var util = require('util');
  console.error(util.inspect(e, false, null, true));
}

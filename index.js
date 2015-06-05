var os = require('os')
module.exports = function(family) {
  family = family || 'IPv4';
  var addresses = {}
  var interfaces = os.networkInterfaces();
  var keys = Object.keys(interfaces).filter(function(key) {
    var items = interfaces[key]
    items.forEach(function(item) {
      var itemFamily = item.family
      if (itemFamily !== family) {
        return false
      }
      var internal = item.internal
      if (internal) {
        return false
      }
      var address = item.address
      addresses[key] = address
      return true
    })
  })
  return addresses
}

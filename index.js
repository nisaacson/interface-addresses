var os = require('os')
module.exports = function() {
  var addresses = {}
  var interfaces = os.networkInterfaces();
  var keys = Object.keys(interfaces).filter(function(key) {
    var items = interfaces[key]
    items.forEach(function(item) {
      var family = item.family
      if (family !== 'IPv4') {
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

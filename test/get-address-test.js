var assert = require('assert')
var should = require('should')
var interfaceAddresses = require('../')
describe('Private IP Address', function() {
  it('should get private ip address', function() {
    var addresses = interfaceAddresses()
    should.exist(addresses)
    Object.keys(addresses).length.should.be.above(0)
    Object.keys(addresses).forEach(function(key) {
      var address = addresses[key]
      validateAddress(key, address)
    })
  })
});


var namePattern = /^\w+$/;
var ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;

function validateAddress(name, ip) {
  var validName = namePattern.test(name)
  var validIP = ipPattern.test(ip)
  assert.ok(validName, 'name is invalid')
  assert.ok(validIP, 'ip is invalid')
}

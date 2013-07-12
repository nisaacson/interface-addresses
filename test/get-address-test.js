var assert = require('assert')
var should = require('should')
var interfaceAddresses = require('../')
describe('Private IP Address', function() {
  it('should get private ip address', function() {
    var addresses = interfaceAddresses()
    should.exist(addresses)
    console.dir(addresses)
    Object.keys(addresses).length.should.be.above(0)
    Object.keys(addresses).forEach(function(key) {
      var address = addresses[key]
      validateAddress(key, address)
    })
  })
});



var validateAddress = (function() {
  var ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;
  return function(name, ip) {
    name.length.should.be.above(0)
    var validIP = ipPattern.test(ip)
    assert.ok(validIP, 'ip is invalid: ' + ip)
  }
}())

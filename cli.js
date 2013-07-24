#!/usr/bin/env node
var usage = 'interface-addresses --adapter <adapter>\n\nadapater should be something like "en0", "eth1" etc.'
var argv = require('optimist').usage(usage).demand('adapter').alias('a', 'adapter').argv
var interfaceAddresses = require('./index')
var adapter = argv.adapter
var interfaces = interfaceAddresses()
var host = interfaces[adapter]
console.log(host)

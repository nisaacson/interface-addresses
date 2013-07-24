# Interface Addresses

[![Build Status](https://travis-ci.org/nisaacson/interface-addresses.png)](https://travis-ci.org/nisaacson/interface-addresses)

Get the IPv4 addresses of all network interfaces on a machine

# Installation

```bash
npm install -S interface-addresses
```

# Usage

Require the module and call it with no arguments. The returned `addresses` value will be an object where the key is the name of the interface and the value is the ip address

```javascript
var inspect = require('eyespect').inspector()
var interfaceAddresses = require('interface-addresses')
var addresses = interfaceAddresses()
inspect(addresses, 'network interface IPv4 addresses (non-internal only)')
```

In the example above, addresses is an object that looks like the following

```javascript
{
    en1: '192.168.1.101',
    vnic0: '10.211.55.2',
    vnic1: '10.37.129.2',
    vboxnet0: '33.33.33.1'
}
```

You will need to install the `eyespect` module to run the example code above, which you can do using `npm`

```bash
npm install -S eyespect
```


# CLI

You can also use interface-addresses as a command line tool. Currently you can only get the host for a single adapter adapater at a
time.

## Example

To get the ip address for the `en0` adapter, execute the following

```bash
npm install -g interface-addresses
interface-addresses --adapter "en0"
```


# Test

```bash
# install the development dependencies
npm install
# run the tests
npm test
```

# Interface Addresses

Get the IPv4 addresses of all network interfaces on a machine

# Installation

```bash
npm install -S interface-addresses
```

# Usage

Require the module and call it with no arguments. The returned `addresses` value will be an object where the key is the name of the interface and the value is the ip address

```javascript
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

# Test

```bash
# install the development dependencies
npm install
# run the tests
npm test
```

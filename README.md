# pubnub-time

Syncronize local time with PubNub server time.

## Installation

``` bash
$ npm install pubnub-time
```

## Usage

``` javascript
var PubNubTime = require('pubnub-time')

// To sync local time with PubNub server time
PubNubTime.init()

// To calculate current server time
var serverTime = PubNubTime.currentTime()
```
---
## License

[ISC license](https://opensource.org/licenses/ISC).
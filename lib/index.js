// See https://support.pubnub.com/support/solutions/articles/14000043791-how-do-i-synchronize-multiple-devices-
var zeptojs = require('zeptojs')
var Promise = require('promise')
var timeDiff = 0

function init () {
  var url = 'http://pubsub.pubnub.com/time/0'
  var start = (new Date()).getTime()
  return new Promise(function (resolve, reject) {
    zeptojs.ajax({
      type: 'get',
      url: url,
      success: function (response) {
        var networkDelay = (new Date()).getTime() - start
        try {
          var times = JSON.parse(response)
          timeDiff = times[0]/10000 - (new Date()).getTime() - networkDelay/2
        } catch(e) {
          reject('Server responded with invalid JSON: ' + response)
        }
      },
      error: reject
    })
  })
}

function currentTime () {
  return timeDiff + (new Date()).getTime()
}

module.exports = {
  init: init,
  currentTime: currentTime,
}
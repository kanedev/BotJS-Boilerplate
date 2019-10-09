console.log = function(message) {
    document.getElementById('result').innerHTML = message;
};
console.log('your result');
-----------------------------------------------------
function randomSleep(maxseconds) {
    sleep(Math.floor(Math.random() * maxseconds))
  }
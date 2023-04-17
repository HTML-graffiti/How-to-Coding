"use strict"

function update(online) {
  document.querySelector('#status').textContent =
  online ? 'You are: Online' : 'You are: Offline';
}

const connectionInfo = navigator.connection;
if (connectionInfo !== undefined) {
  const init = function() {
    document.getElementById('type').textContent = connectionInfo.type;
    document.getElementById('effectiveType').textContent = connectionInfo.effectiveType;
    document.getElementById('downlink').textContent = connectionInfo.downlink + ' Mb/s';
    document.getElementById('downlinkMax').textContent = connectionInfo.downlinkMax + ' Mb/s';
    document.getElementById('rtt').textContent = connectionInfo.rtt + ' ms';
  };
  init();

  if ('onchange' in connectionInfo) {
    connectionInfo.addEventListener('change', init);
  } else if ('ontypechange' in connectionInfo) {
    connectionInfo.addEventListener('typechange', init);
  }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  const javascript = document.querySelector('#javascript')
  javascript.style.display = "none"
}

"use strict"

function update(online) {
  document.querySelector('#status').textContent =
  online ? 'You are: Online' : 'You are: Offline';

  const onlineHideAll = document.querySelectorAll('.hide_online');
  for (const onlineHide of onlineHideAll) {
    onlineHide.style.display = online ? 'none' : 'block';
  }

  const offlineHideAll = document.querySelectorAll('.hide_offline');
  for (const offlineHide of offlineHideAll) {
    offlineHide.style.display = online ? 'block' : 'none';
  }
}

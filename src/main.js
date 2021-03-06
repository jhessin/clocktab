import 'regenerator-runtime/runtime';

import 'tab-utils/more_panel';

import loadAd from './loadAd';
import loadClock from './loadClock';
import loadAnalytics from './loadAnalytics';
import autoReloadPage from './autoReloadPage';

window.onload = async () => {
  console.log("load-progress", "onload done - execution begin");
  await loadClock();
  console.log("load-progress", "clock execution done");

  document.documentElement.classList.remove('hideApp');

  loadAnalytics();

  loadAd();
  /*
  setTimeout(() => loadAd(), 500);
  */

  /*
  // To avoid memory leak
  autoReloadPage();
  */
};

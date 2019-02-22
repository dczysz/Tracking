$(document).ready(function() {
  var fingerprint;
  setTimeout(function() {
    // Set browser fingerprint attributes
    fingerprint = {
      browser: navigator.appName,
      vendor: navigator.vendor,
      codeName: navigator.appCodeName,
      product: navigator.product,
      version: navigator.appVersion,
      userAgent: navigator.userAgent,
      canvas: onOff(isCanvasSupported()),
      cookies: onOff(navigator.cookieEnabled),
      persistentCooks: onOff(hasLocalStorage()),
      sessionCooks: onOff(hasSessionStorage()),
      platform: navigator.platform,
      cpu: cleanArray([navigator.cpuClass, navigator.oscpu]),
      cpuCores: navigator.hardwareConcurrency,
      timezone: getTimeZone(),
      doNotTrack: onOff(navigator.doNotTrack),
      isOnline: yesNo(navigator.onLine),
      connectionType: getConnectionType(),
      language: navigator.language.toUpperCase(),
      plugins: getPlugins(),
      previousUrl: shortenUrl(document.referrer),
      screenRes: window.innerWidth + " x " + window.innerHeight + ' x ' + screen.colorDepth + '-bit',
      screenResMax: screen.width + " x " + screen.height,
      lyingAboutRes: lyingAboutRes()? 'Yes' : '',
      orientation: screen.orientation.type.split('-')[0],
      java: onOff(navigator.javaEnabled()),
      flash: onOff(isFlashEnabled()),
      mimeTypes: getMimeTypes(),
      lastVisit: lastVisit(),
      thisVisit: new Date().toLocaleString(),
      fingerprintID: null
    };

    fingerprint.fingerprintID = getFingerprintMD5();

    console.log('\n-- Browser Fingerprint Info --');
    buildTable($('#fingerprint')[0], fingerprint);

    showSection($('#fingerprintSection')[0]);
  }, 250); // end timeout


  // Create MD5 hash of fingerprint using YaMD5.js
  // https://github.com/gorhill/yamd5.js
  function getFingerprintMD5() {
    var md5Hash = new YaMD5();
    md5Hash.start();

    for (var key in fingerprint) {
      if (fingerprint[key] !== '' && fingerprint[key] !== ',' && fingerprint[key] != null && !ignore(key)) {
        md5Hash.appendStr(String.toString(fingerprint[key]));
      }
    }

    // Add spaces for mobile display
    const NUM_SPACES = 3;
    let hash = md5Hash.end(),
        hashWithSpaces = '',
        spacesCounter = 1;

    for (let i = 0; i < hash.length; i++) {
      hashWithSpaces += hash[i];
      if (spacesCounter >= hash.length / (NUM_SPACES + 1)) {
        hashWithSpaces += ' ';
        spacesCounter = 1;
      }
      else spacesCounter++;
    }

    return hashWithSpaces;

    // Returns true if key is in ignore[]
    // For ignoring variable or redundant info for hash
    function ignore(key) {
      var ignore = [
        'isOnline',
        'previousUrl',
        'screenRes',
        'lyingAboutRes',
        'orientation',
        'lastVisit',
        'thisVisit',
        'fingerprintMD5'
      ];
      return ($.inArray(key, ignore) != -1)? true : false;
    }
  }

  // Remove empty entries
  function cleanArray(array) {
    var cleanArray = [];
    for (value of array) {
      if (value != null) cleanArray += value;
    }
    return cleanArray;
  }

  // Remove 'http[s]://' and trailing '/'
  function shortenUrl(url) {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }

  function onOff(boolean) {
    return (boolean)? 'On' : 'Off';
  }

  function yesNo(boolean) {
    return (boolean)? 'Yes' : 'No';
  }

  function hasLocalStorage() {
    try {
      return !!window.localStorage;
    } catch (_) {
      return true; // SecurityError when referencing it means it exists
    }
  }

  function hasSessionStorage() {
    try {
      return !!window.sessionStorage;
    } catch (_) {
      return true; // SecurityError when referencing it means it exists
    }
  }

  function isCanvasSupported() {
    var elem = document.createElement('canvas');
    try {
      return !!(elem.getContext && elem.getContext('2d'));
    } catch (_) {
      return false;
    }
  }

  function isDntEnabled() {
    try {
      return !!navigator.doNotTrack;
    } catch (_) {
      return false;
    }
  }

  function getPlugins() {
    var pluginsList = "";

    for (var i = 0; i < navigator.plugins.length; i++) {
      if (i == navigator.plugins.length - 1) {
        pluginsList += navigator.plugins[i].name;
      } else {
        pluginsList += navigator.plugins[i].name + ", ";
      }
    }
    return pluginsList;
  }

  function isFlashEnabled() {
    var objPlugin = navigator.plugins["Shockwave Flash"];
    if (objPlugin) {
      return true;
    }
    return false;
  }

  function getTimeZone() {
    var rightNow = new Date();
    return String(String(rightNow).split("(")[1]).split(")")[0];
  }

  function getConnectionType() {
    try {
      return navigator.connection.effectiveType.toUpperCase();
    } catch (_) {
      return '';
    }
  }

  function getMimeTypes() {
    var mimeTypes = navigator.mimeTypes,
        str = '';
    for (var i = 0; i < mimeTypes.length; i++) {
      str += mimeTypes[i].enabledPlugin.name;
      str += (i < mimeTypes.length - 1)? ', ' : '';
    }
    return str;
  }

  // Display last cookie date in table, update cookie with new date
  function lastVisit() {
    var lastVisit = document.cookie,
        thisVisit = new Date(),
        expireDate = new Date();

    // Set expire date for a month from now
    expireDate.setMonth(expireDate.getMonth() + 1);

    // Encode date to remove whitespace
    thisVisit = escape(thisVisit.toLocaleString());

    // Overwrite cookie with new date
    document.cookie = 'lastVisit=' + thisVisit + ';expires=' + expireDate.toUTCString() + ';';

    // Return date of last visit
    if (lastVisit.length != 0 || lastVisit != '') {
      return unescape(lastVisit.substring(10));
    }
    return 'Your first visit';
  }

  // Return true if resolution has been modified, hopefully accounting for browser toolbars
  function lyingAboutRes() {
    return screen.width != screen.availWidth || screen.height != screen.availHeight ||
           screen.width != window.innerWidth || screen.height * 0.85 > window.innerHeight;
}
});

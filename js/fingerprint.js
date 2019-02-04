$(document).ready(function() {

  // Set browser fingerprint attributes
  var fingerprint = {
    browser: navigator.appName,
    vendor: navigator.vendor,
    codeName: navigator.appCodeName,
    product: navigator.product,
    platform: navigator.appVersion,
    userAgent: navigator.userAgent,
    canvasOn: isCanvasSupported(),
    colorDepth: screen.colorDepth,
    cookiesOn: navigator.cookieEnabled,
    persistentCooks: hasLocalStorage(),
    sessionCooks: hasSessionStorage(),
    cpu: cleanArray([navigator.cpuClass, navigator.oscpu]),
    cpuCores: navigator.hardwareConcurrency,
    timezone: getTimeZone(),
    doNotTrack: (navigator.doNotTrack == 1)? 'On' : 'Off',
    isOnline: navigator.onLine,
    connectionType: getConnectionType(),
    language: navigator.language,
    platform: navigator.platform,
    plugins: getPlugins(),
    previousUrl: document.referrer,
    screenRes: window.innerWidth + " x " + window.innerHeight,
    screenMax: screen.width + " x " + screen.height,
    orientation: screen.orientation.type.split('-')[0],
    javaEnabled: navigator.javaEnabled(),
    flashEnabled: isFlashEnabled(),
    mimeTypes: getMimeTypes(),
    maxTouchPoints: navigator.maxTouchPoints,
    lastVisit: lastVisit()
  };

  buildTable(document.getElementById('fingerprint'), fingerprint);

  showSection(document.getElementById('fingerprintSection'));


  function cleanArray(array) {
    var cleanArray = [];
    for (value of array) {
      if (value != null) cleanArray += value;
    }
    return cleanArray;
  }


  function hasLocalStorage() {
    try {
      return !!window.localStorage;
    } catch (e) {
      return true; // SecurityError when referencing it means it exists
    }
  }

  function hasSessionStorage() {
    try {
      return !!window.sessionStorage;
    } catch (e) {
      return true; // SecurityError when referencing it means it exists
    }
  }

  function isCanvasSupported() {
    var elem = document.createElement('canvas');
    try {
      return !!(elem.getContext && elem.getContext('2d'));
    } catch (e) {
      return false;
    }
  }

  function isDntEnabled() {
    try {
      return !!navigator.doNotTrack;
    } catch (e) {
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
      console.log(navigator.connection.effectiveType);
      return navigator.connection.effectiveType;
    } catch (e) {
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
    return '';
  }
});

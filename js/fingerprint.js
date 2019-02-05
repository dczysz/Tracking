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
      lyingAboutRes: (hasLiedResolution())? 'Yes' : '',
      orientation: screen.orientation.type.split('-')[0],
      java: onOff(navigator.javaEnabled()),
      flash: onOff(isFlashEnabled()),
      mimeTypes: getMimeTypes(),
      lastVisit: lastVisit(),
      thisVisit: new Date().toLocaleString(),
      fingerprintID: null
    };

    fingerprint.fingerprintID = hash(fingerprint);

    console.log('\n-- Browser Fingerprint Info --');
    buildTable($('#fingerprint')[0], fingerprint);

    showSection($('#fingerprintSection')[0]);
  }, 250); // end main exucution



  // Create 19 digit hash from fingerprint object
  function hash(obj) {
    const MIDDLE = 4; // Use first and x (if it exists) of each key's value
    var hash = '';

    for (var key in obj) {
      if (obj[key] !== '' && obj[key] !== ',' && obj[key] != null && !ignore(key)) {
        // Only get second char of char code of first and MIDDLE chars
        for (var i = 0; i < obj[key].length && i < MIDDLE + 1; i += MIDDLE) {
          var code = removeSpaces(obj[key].toString()) .charCodeAt(i).toString();
          hash += code.charAt(code.length - 1);
        }
      }
    }
    return getHash(hash / hash.length);


    // Returns true if key is in ignore[]
    // For ignoring variable or redundant info for hash
    function ignore(key) {
      var ignore = [
        'persistentCooks',
        'sessionCooks',
        'cpu',
        'isOnline',
        'previousUrl',
        'screenResMax',
        'lastVisit',
        'thisVisit',
        'fingerprintID'
      ];
      for (var ignoreKey of ignore) {
        if (ignoreKey == key) return true;
      }
      return false;
    }

    function getHash(hashString) {
      return removeExponent(hashString.toString());
    }

    // Change 3.125e+14 to 3125
    function removeExponent(uglyString) {
      return uglyString.replace('.', '').replace(/e\+/, '');
    }
  }

  // Remove space from string
  function removeSpaces(uglyString) {
    return uglyString.replace(' ', '');
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
    return url.replace(/^(http|https):\/\//, '').replace(/\/$/, '');
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

  function hasLiedResolution() {
    return screen.width < screen.availWidth || screen.height < screen.availHeight;
}
});

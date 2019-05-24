const getNavigatorProperties = (nav) => {
  return {
    // returns 'Mozilla'
    'appCodeName': nav.appCodeName,
    // returns 'Netscape'
    'appName': nav.appName,
    // returns either "4.0" or a string representing version information about the browser, similar to user agent
    'appVersion': nav.appVersion,
    // returns information about the system's connection
    // 'conn-downlink': nav.connection.downlink,
    // 'conn-downlinkMax': nav.connection.downlinkMax,
    // 'conn-effectiveType': nav.connection.effectiveType,
    // 'conn-rtt': nav.connection.rtt,
    // 'conn-saveData': nav.connection.saveData,
    // 'conn-type': nav.connection.type,
    // returns a Boolean value that indicates whether cookies are enabled
    'cookieEnabled': nav.cookieEnabled,
    // returns location information, requires user permission
    'geolocation': nav.geolocation,
    // returns the number of logical processor cores
    // currently collecting as 'cpu' in SDK and 'cpu_cores' in fp_ex table
    'hardwareConcurrency': nav.hardwareConcurrency,
    // returns a Boolean value that indicates whether browser is Java-enabled
    'javaEnabled': nav.javaEnabled(),
    // returns an array of languages known to the user, by order of preference
    'languages': nav.languages,
    // returns the maximum number of simultaneous touch contact points are supported by the current device
    // currently collecting as 'tch' in SDK and 'touchscreen' in fp_ex table (only recording as '0' or '1')
    // can future analyse multitouch capabilities
    'maxTouchPoints': nav.maxTouchPoints
  }
}
$(document).ready(function() {
  try {
    $.each(getNavigatorProperties(window.navigator), function(key, value) {
      $('#fp-table > tbody').append('<tr><td>' + key + '</td><td>' + value + '</td></tr>');
    });
  } catch (err) {
    $('#error').text(err.message);
  }
});

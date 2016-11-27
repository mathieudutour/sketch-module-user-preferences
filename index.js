function getUserPreferences(pluginName, defaultPrefs) {
  var prefs = {}
  var store = NSUserDefaults.standardUserDefaults()
  Object.keys(defaultPrefs).forEach(function (k) {
    if (typeof defaultPrefs === 'boolean') {
      prefs[k] = store.boolForKey(pluginName + k) || defaultPrefs[k]
    } else if (typeof defaultPrefs === 'number') {
      prefs[k] = store.doubleForKey(pluginName + k) || defaultPrefs[k]
    } else if (typeof defaultPrefs === 'string') {
      prefs[k] = store.stringForKey(pluginName + k) || defaultPrefs[k]
    } else if (Array.isArray(defaultPrefs)) {
      prefs[k] = store.arrayForKey(pluginName + k) || defaultPrefs[k]
    } else {
      prefs[k] = store.dictionaryForKey(pluginName + k) || defaultPrefs[k]
    }
  })
  return prefs
}

function setUserPreferences(pluginName, prefs) {
  var store = NSUserDefaults.standardUserDefaults()
  Object.keys(prefs).forEach(function (k) {
    if (typeof prefs[k] === 'boolean') {
      store.setBool_forKey(prefs[k], pluginName + k)
    } else if (typeof defaultPrefs === 'number') {
      store.setDouble_forKey(prefs[k], pluginName + k)
    } else {
      store.setObject_forKey(prefs[k], pluginName + k)
    }
  })
  store.synchronize()
}

exports.getUserPreferences = getUserPreferences,
exports.setUserPreferences = setUserPreferences

module.exports = {
  getUserPreferences: function (pluginName, defaultPrefs) {
    var prefs = {}
    var store = NSUserDefaults.standardUserDefaults()
    Object.keys(defaultPrefs).forEach(function (k) {
      if (typeof defaultPrefs[k] === 'boolean') {
        prefs[k] = typeof store.boolForKey(pluginName + k) !== 'undefined' ? store.boolForKey(pluginName + k) : defaultPrefs[k]
      } else if (typeof defaultPrefs[k] === 'number') {
        prefs[k] = typeof store.doubleForKey(pluginName + k) !== 'undefined' ? store.boolForKey(pluginName + k) : defaultPrefs[k]
      } else if (typeof defaultPrefs[k] === 'string') {
        prefs[k] = store.stringForKey(pluginName + k) || defaultPrefs[k]
      } else if (Array.isArray(defaultPrefs[k])) {
        prefs[k] = store.arrayForKey(pluginName + k) || defaultPrefs[k]
      } else {
        prefs[k] = store.dictionaryForKey(pluginName + k) || defaultPrefs[k]
      }
    })
    return prefs
  },
  setUserPreferences: function (pluginName, prefs) {
    var store = NSUserDefaults.standardUserDefaults()
    Object.keys(prefs).forEach(function (k) {
      if (typeof prefs[k] === 'boolean') {
        store.setBool_forKey(prefs[k], pluginName + k)
      } else if (typeof prefs[k] === 'number') {
        store.setDouble_forKey(prefs[k], pluginName + k)
      } else {
        store.setObject_forKey(prefs[k], pluginName + k)
      }
    })
    store.synchronize()
  }
}

# sketch-module-update

[![Downloads per month](https://img.shields.io/npm/dm/sketch-module-user-preferences.svg?maxAge=2592000)](https://www.npmjs.com/package/sketch-module-user-preferences/)
[![Latest version](https://img.shields.io/npm/v/sketch-module-user-preferences.svg?maxAge=3600)](https://www.npmjs.com/package/sketch-module-user-preferences/)

A sketch module to manage a plugin's user preferences.

## Usage

```javascript
import {getUserPreferences, setUserPreferences} from 'sketch-module-user-preferences'

const defaultPreferences = {
  timeBetweenChecks: 24 * 60 * 60 * 1000, // 1 day by default
  exportFolder: '.exportedArtboards',
  diffByDefault: true
}

const preferences = getUserPreferences('myPluginName', defaultPreferences)

setUserPreferences('myPluginName', {
  timeBetweenChecks: 3 * 24 * 60 * 60 * 1000, // 3 days now
})

```

## Installation
`sketch-module-user-preferences` is available from `npm`.

```shell
npm install --save sketch-module-user-preferences
```

## Compatibility
`sketch-module-user-preferences` requires [Sketch](http://sketchapp.com/) >= 3

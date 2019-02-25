# react-native-cybersource-sdk
ReactNative module for CyberSource SDK


## Installation

```bash
npm install --save react-native-accengage
```
```bash
react-native link react-native-accengage
```

### iOS
This module acts purely as a bridge for calling CyberSource fingerprinting methods in ReactNative. Please follow the CyberSource documentation on their website, to add and link the library. It should be added to the Frameworks in your Xcode project. The .framework file should also live somewhere in your /ios folder. Use their documentantion together with this module.

### Android
This module acts purely as a bridge for calling CyberSource fingerprinting methods in ReactNative. Use their documentantion together with this module.


## Usage
```js
// Import
import CyberSource from 'react-native-cybersource-sdk';
```

Implemented calls:
```js
/**
 * Configure
 * @param {string} orgId OrgId
 * @param {string} serverURL The fingerprint url including orgId and sessionId according to the
 *     documentation.
 * @return {promise} Promise resolves true if call is done, otherwise throws.
 */
CyberSource.configure(orgId, serverURL);

/**
 * Profile request
 * @param {Array.<string>} attributes A list of custom attributes
 * @return {promise} An object containing a sessionId, and a status (Status enum)
 */
CyberSource.profileRequest(attributes);
```

Status enum:
```js
{
  NOTYET: 0,
  OK: 1,
  CONNECTIONERROR: 2,
  HOSTNOTFOUNDERROR: 3,
  NETWORKTIMEOUTERROR: 4,
  HOSTVERIFICATIONERROR: 5,
  INTERNALERROR: 6,
  INTERRUPTEDERROR: 7,
  PARTIALPROFILE: 8,
  INVALIDORGID: 9, // unique for ios
  NOTCONFIGURED: 10,
  CERTIFICATEMISMATCH: 11,
  INVALIDPARAMETER: 12, // unique for ios
  STRONGAUTHFAILED: 13,
  STRONGAUTHCANCELLED: 14,
  STRONGAUTHUNSUPPORTED: 15,
  STRONGAUTHUSERNOTFOUND: 16, // unique for ios
  BLOCKED: 17, // unique for android
  ENDNOTIFIERNOTFOUND: 18, // unique for android
  INQUIETPERIOD: 19, // unique for android
}
```
import { NativeModules, Platform } from 'react-native';
const { RNCyberSourceSDKModule } = NativeModules;

var Status = {
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
  properties: {
    0: {name: "notyet", value: 0},
    1: {name: "ok", value: 1},
    2: {name: "connectionerror", value: 2},
    3: {name: "hostnotfounderror", value: 3},
    4: {name: "networktimeouterror", value: 4},
    5: {name: "hostverificationerror", value: 5},
    6: {name: "internalerror", value: 6},
    7: {name: "interruptederror", value: 7},
    8: {name: "partialprofile", value: 8},
    9: {name: "invalidorgid", value: 9},
    10: {name: "notconfigured", value: 10},
    11: {name: "certificatemismatch", value: 11},
    12: {name: "invalidparameter", value: 12},
    13: {name: "strongauthfailed", value: 13},
    14: {name: "strongauthcancelled", value: 14},
    15: {name: "strongauthunsupported", value: 15},
    16: {name: "strongauthusernotfound", value: 16},
    17: {name: "blocked", value: 17},
    18: {name: "endnotifiernotfound", value: 18},
    19: {name: "inquietperiod", value: 19},
  },
  init: function(rawValue) {
    var mappedValue = rawValue
    if (Platform.OS == 'android') {
      // This will map the index / value of the android enum ordinal to the ios enum ordinal
      // E.g.: The ordinal for 'internal error' in android is 5, in ios it is 6, so we map 5 to 6
      map = {5: 6, 6: 5, 8: 10, 9: 8, 13: 11, 14: 13, 15: 14, 16: 15}
      mappedValue = map[rawValue] ? map[rawValue] : rawValue
    }

    return Status.properties[mappedValue]
  }
};

/**
 * Configure
 * @param {string} orgId OrgId
 * @param {string} serverURL The fingerprint url including orgId and sessionId according to the
 *     documentation.
 * @return {promise} Promise resolves true if call is done, otherwise throws.
 */
function configure(orgId, serverURL) {
  return RNCyberSourceSDKModule.configure(orgId, serverURL);
}

/**
 * Profile request
 * @param {Array.<string>} attributes A list of custom attributes
 * @return {promise} A promise containing the profile result status (Status enum)
 */
function profileRequest(attributes) {
  return RNCyberSourceSDKModule.profileRequest(attributes).then(result => {
    return Status.init(result)
  })
}

module.exports = {
  configure,
  profileRequest,
}

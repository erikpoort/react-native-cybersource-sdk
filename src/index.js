import { NativeModules } from 'react-native';
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
  INVALIDORGID: 9,
  NOTCONFIGURED: 10,
  CERTIFICATEMISMATCH: 11,
  INVALIDPARAMETER: 12,
  STRONGAUTHFAILED: 13,
  STRONGAUTHCANCELLED: 14,
  STRONGAUTHUNSUPPORTED: 15,
  STRONGAUTHUSERNOTFOUND: 16,
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
  }
};

/**
 * Configure
 * @param {string} orgId OrgId
 * @param {string} serverURL The fingerprint url including orgId and sessionId according to the
 *     documentation.
 * @return {promise}
 */
function configure(orgId, serverURL) {
  return RNCyberSourceSDKModule.configure(orgId, serverURL);
}

/**
 * Profile request
 * @param {Array.<string>} attributes A list of custom attributes
 * @return {promise} A promise containing the profile result status
 */
function profileRequest(attributes) {
  return RNCyberSourceSDKModule.profileRequest(attributes)
}

module.exports = {
  configure,
  profileRequest,
}

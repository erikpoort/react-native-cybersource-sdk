import { NativeModules } from 'react-native';
const { RNCyberSourceSDKModule } = NativeModules;


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

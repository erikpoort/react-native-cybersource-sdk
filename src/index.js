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

module.exports = {
  configure,
}

const ReplaceServersURL = require('../decorators/replace-servers-url');
const RemoveAllAuthentication = require('../decorators/remove-all-authentication');
const id = 'demo';

/** @type {import('@redocly/cli').CustomRulesConfig} */
const decorators = {
  oas3: {
    'replace-servers-url': ReplaceServersURL
//    'remove-all-authentications': RemoveAllAuthentication,
  },
};

module.exports = {
  id,
  decorators,
};
module.exports = ReplaceServersURL;

/** @type {import('@redocly/cli').OasDecorator} */

function ReplaceServersURL() {
  return {
    Server: {
      leave(Server) {
//        if ( 'SERVERS_URL' in ['titus.']) {
          Server.url = 'https://titus-testing.com';
          console.log()
//        }

      }
    }
  }
};
module.exports = ReplaceServersURL;

/** @type {import('@redocly/cli').OasDecorator} */

function ReplaceServersURL() {
  return {
    Server: {
      leave(Server) {
          Server.url = 'https://titus-testing.com';
      }
    }
//    ,
//    Info: {
//        leave(Info) {
////            console.log('Info: ' , Info);
//        }
//    },
//    PathItem: {
//        leave(PathItem) {
//        PathItem.post.security = [];
//        console.log('PathItem: ', PathItem)
//        /*
//              security:
//                - Oauth2:
//                    - read
//        */
//        }
//    }
  }
};
module.exports = RemoveAllAuthentication;

/** @type {import('@redocly/cli').OasDecorator} */

function RemoveAllAuthentication() {
  return {
    PathItem: {
        leave(PathItem) {
        PathItem.post.security = [];
        }
    }
  }
};
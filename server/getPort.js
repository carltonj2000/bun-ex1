/* the following code is based off the following
 * https://gist.github.com/oscar-broman/5652628
 */

const net = require("net");

export function getFreePort(fn) {
  const server = net.createServer();
  let calledFn = false;

  server.on("error", function (err) {
    server.close();

    if (!calledFn) {
      calledFn = true;
      fn(err);
    }
  });

  server.listen(0, function () {
    const port = server.address().port;

    server.close();

    if (!calledFn) {
      calledFn = true;

      if (!port) {
        fn(new Error("Unable to get the server's given port"));
      } else {
        fn(null, port);
      }
    }
  });
}

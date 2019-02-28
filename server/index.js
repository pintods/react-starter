const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const TokenProvider = require("./AuthProvider");
server.use(middlewares);
server.use(jsonServer.bodyParser);

const tokenExpiration = 14400;

// Checks if token is valid on non token routes
server.use((req, res, next) => {
  if (!req.path.toLowerCase().includes("token")) {
    const token = req.headers.authorization;
    const tokenProvider = TokenProvider();
    tokenProvider
      .verifyToken(token)
      .then(() => next())
      .catch(() => {
        res.status(401);
        res.send({
          error: {
            message: "Invalid Token"
          }
        });
      });
  } else {
    next();
  }
});

// add custom route for token refresh
server.post("/token/refresh", async (req, res) => {
  const tokenProvider = TokenProvider();
  if (req.body.token) {
    tokenProvider
      .verifyToken(req.body.token)
      .then(async () => {
        const token = await tokenProvider.createToken(
          {
            username: req.body.username
          },
          tokenExpiration
        );
        res.status(201).jsonp({
          token: token
        });
      })
      .catch(() => {
        res.status(401);
        res.send({
          error: {
            message: "Invalid Token"
          }
        });
      });
  }
});

// add custom route for token
server.post("/token", async (req, res) => {
  const tokenProvider = TokenProvider();
  if (req.body.username && req.body.password) {
    const token = await tokenProvider.createToken(
      {
        username: req.body.username
      },
      tokenExpiration
    );
    res.status(201).jsonp({
      token: token
    });
  } else {
    res.status(400).jsonp({
      error: "Invalid request format or missing parameters"
    });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running...");
});

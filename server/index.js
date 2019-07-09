const express = require('express');
const next = require('next');
const compression = require('compression');
const useragent = require('express-useragent');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    // user agent
    server.use((req, res, nextMid) => {
      const source = req.headers['user-agent'];
      const ua = useragent.parse(source);
      //Include data to next initialProps
      req.client = {
        isMobile: ua.isMobile,
        isTablet: ua.isTablet,
      };
      // console.log('USER AGENT isMobile?', ua.isMobile);

      nextMid();
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on PORT ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

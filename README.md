# Express Boilerplate

An opinionated template for creating new Express-based projects.

## Getting Started

```
$ git clone git@github.com:tkambler/express-boilerplate.git
$ npm i
$ npm start
```

## Defining Routes

- Routes and middleware are defined in `config/routes.json` and `config/meddleware.json`, respectively.

## Application Modules

- App-level modules should be stored in `./lib/app` and subsequently loaded via `require('app/:module-name')`. When the application is launched via `npm start`, the `NODE_PATH` environment variable is updated to reference this location, enabling this behavior.

## Logging

Logging is accomplished via a Winston instance (`app/log`). By default, the log level is set to `info`. This level can be changed without restarting the server by running Grunt's `set-log-level` task:

```
$ grunt set-log-level --level=debug # Turn on debug messages
$ grunt set-log-level --level=info # Turn off debug messages
```

## Related Resources

- [Express](http://expressjs.com/)
- [Confit](https://github.com/krakenjs/confit)
- [Shortstop Handlers](https://github.com/krakenjs/shortstop-handlers)
- [Morgan](https://github.com/expressjs/morgan)
- [Meddleware](https://github.com/krakenjs/meddleware)
- [Enrouten](https://github.com/krakenjs/express-enrouten)

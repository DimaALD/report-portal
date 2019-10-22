const winston = require(`winston`),
 path = require(`path`),
 fs = require(`fs-extra`),
 { createLogger, format, transports } = winston;

fs.emptyDirSync(path.resolve(`./reports/`));
fs.emptyDirSync(path.resolve(`./logs/`));

let logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    }),
    new transports.File({
      filename: path.resolve(`./logs/error.log`),
      level: `error`,
      format: format.combine(
        format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
        format.simple()
      )
    }),
    new transports.File({
      filename: path.resolve(`./logs/debug.log`),
      level: `debug`,
      format: format.combine(
        format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
        format.simple()
      )
    }),
    new transports.File({
        filename: path.resolve(`./logs/info.log`),
        level: `info`,
        format: format.combine(
          format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
          format.simple()
        )
      }),
  ]
});

module.exports = {
  logger
};
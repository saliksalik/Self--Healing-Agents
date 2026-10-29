function createLogger(scope = 'App') {
  const line = (level, msg) =>
    `${new Date().toISOString()} [${level}] [${scope}] ${msg}`;

  return {
    step: (msg) => console.log(line('STEP', msg)),
    info: (msg) => console.log(line('INFO', msg)),
    warn: (msg) => console.warn(line('WARN', msg)),
    error: (msg) => console.error(line('ERROR', msg)),
  };
}

module.exports = { createLogger };

const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const reactStrictMod = true;

  // const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    API_KEY_DATOCMS_TOKEN: process.env.API_KEY_DATOCMS_TOKEN,
  };

  // const rewrites = () => {
  //   return [
  //     {
  //       source: '*',
  //       destination: '/',
  //     },
  //   ];
  // };

  return {
    reactStrictMod,
    env,
    // rewrites,
  };
};

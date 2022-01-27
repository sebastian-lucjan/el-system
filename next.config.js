const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const reactStrictMod = true;

  // const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const images = {
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  };

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
    images,
    reactStrictMod,
    env,
    // rewrites,
  };
};

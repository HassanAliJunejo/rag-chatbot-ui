// @ts-check
const path = require('path');

/** @type {import('@docusaurus/types').Plugin} */
module.exports = function pluginGlobalChatbot(context, options) {
  return {
    name: 'global-chatbot-plugin',
    
    getClientModules() {
      return [path.resolve(__dirname, './GlobalChatbotInjector.js')];
    },
  };
};
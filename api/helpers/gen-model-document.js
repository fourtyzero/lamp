const path = require('path');
const fs = require('fs').promises;

/**
 * Generate markdown document from the attributes
 * @param {Object} attrs
 */
function genDoc(attrs) {}
module.exports = {
  friendlyName: 'Gen model document',

  description: 'generate model document from the models directory',

  inputs: {},

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function(inputs) {
    // TODO
    const dir = path.resolve(__dirname, 'api/models');
    const files = await fs.readdir(dir);
    files.forEach((file) => {
      const { attributes } = require(path.resolve(__dirname, file));
      console.log(Object.keys(attributes).length);
      
    });
  },
};

/**
 * Address.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    // ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    // ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    reciever: {
      type: 'string',
      description: '收件人姓名'
    },
    phone: {
      type: 'string'
    },
    province: {
      type: 'string'
    },

    area: {
      type: 'string',
      description: '地区, 市级单位, '
    },
    county: {
      type: 'string',
      description: '县, 或者市的区'
    },
    detail: {
      type: 'string',
      description: '详细地址'
    },
    postCode: {
      type: 'string'
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    owner: {
      model: 'user'
    }
  },
};

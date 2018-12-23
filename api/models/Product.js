/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    title: {
      type: 'string',
    },
    subtitle: {
      type: 'string',
    },
    quantity: {
      type: 'number',
      description: '库存数目'
    },
    sales: {
      type: 'number',
    },
    images: {
      description: '图片数组, 使用json字符串保存',
      type: 'json',
    },
    price: {
      type: 'number',
    },
    bargain: {
      type: 'number',
      description: '折扣',
    },
    tariff: {
      description: '关税',
      type: 'number',
    },
    postage: {
      type: 'number',
    },
    description: {
      type: 'string'
    },
    redeemCost: {
      type: 'number',
      description: '兑换此商品需要的积分'
    },
    redeemRestrict: {
      type: 'number',
      description: '限制使用积分兑换的件数'
    },
    supportSeven: {
      description: '是否支持7天无忧退换',
      type: 'boolean',
      defaultsTo: true,
    },
    // details information
    spec: {
      type: 'number',
    },
    specUnit: {
      type: 'string',
      defaultsTo: '克',
    },
    specQuantifier: {
      type: 'string',
      defaultsTo: '份'
    },
    country: {
      type: 'string',
    },
    storeMethod: {
      type: 'string',
    },
    productionDate: {
      type: 'number',
    },
    shelfLife: {
      type: 'number'
    },
    shelfLifeUnit: {
      type: 'string',
      defaultsTo: 'month'
    },
    expressProvider: {
      description: '快递信息',
      type: 'string'
    },
    serviceProvider: {
      description: '服务信息',
      type: 'string'
    },
    hint: {
      description: '提示信息',
      type: 'string'
    },
    group: {
      type: 'string',
      isIn: ['in-sale', 'starter']
    },
    sellTime: {
      type: 'number',
      description: '开售日期'
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    // many-to-one
    brand: {
      model: 'brand'
    },
    // one-way
    category: {
      model: 'category',
    },
    tag: {
      model: 'tag',
    },
    // one-to-many
    reviews: {
      collection: 'review',
      via: 'about'
    }
  },
};

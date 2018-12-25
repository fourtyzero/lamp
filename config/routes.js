/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  // 'GET /': { action: 'view-homepage-or-redirect' },
  // 'GET /welcome': { action: 'dashboard/view-welcome' },

  // 'GET /faq': { view: 'pages/faq' },
  // 'GET /legal/terms': { view: 'pages/legal/terms' },
  // 'GET /legal/privacy': { view: 'pages/legal/privacy' },
  // 'GET /contact': { view: 'pages/contact' },

  // 'GET /signup': { action: 'entrance/view-signup' },
  // 'GET /email/confirm': { action: 'entrance/confirm-email' },
  // 'GET /email/confirmed': { view: 'pages/entrance/confirmed-email' },

  // 'GET /login': { action: 'entrance/view-login' },
  // 'GET /password/forgot': { action: 'entrance/view-forgot-password' },
  // 'GET /password/new': { action: 'entrance/view-new-password' },

  // 'GET /account': { action: 'account/view-account-overview' },
  // 'GET /account/password': { action: 'account/view-edit-password' },
  // 'GET /account/profile': { action: 'account/view-edit-profile' },

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  // '/api/v1/account/logout': { action: 'account/logout' },
  // 'PUT   /api/v1/account/update-password': {
  //   action: 'account/update-password',
  // },
  // 'PUT   /api/v1/account/update-profile': { action: 'account/update-profile' },
  // 'PUT   /api/v1/account/update-billing-card': {
  //   action: 'account/update-billing-card',
  // },
  // 'PUT   /api/v1/entrance/login': { action: 'entrance/login' },
  // 'POST  /api/v1/entrance/signup': { action: 'entrance/signup' },
  // 'POST  /api/v1/entrance/send-password-recovery-email': {
  //   action: 'entrance/send-password-recovery-email',
  // },
  // 'POST  /api/v1/entrance/update-password-and-login': {
  //   action: 'entrance/update-password-and-login',
  // },
  // 'POST  /api/v1/deliver-contact-form-message': {
  //   action: 'deliver-contact-form-message',
  // },
  '/api/v1/product/': { action: 'product/byid' },
  '/api/v1/product/search': { action: 'product/search' },
  '/api/v1/product/reviews': { action: 'product/reviews' },

  '/api/v1/search/hot': { action: 'search/hot' },

  '/api/v1/category/all': { action: 'category/all' },
  '/api/v1/category/search/': { action: 'category/search' },
  '/api/v1/category/tags/': { action: 'category/tags' },
  '/api/v1/tag/product': { action: 'tag/product' },

  // order
  '/api/v1/order/create': { action: 'order/create' },
  '/api/v1/order/update': { action: 'order/update' },

  '/api/v1/review': { action: 'review/byid' },

  '/api/v1/brand/': { action: 'brand/byid' },

  'POST /api/v1/user/signup': { action: 'user/signup' },
  'POST /api/v1/user/login': { action: 'user/login' },
  'POST /api/v1/user/logout': { action: 'user/logout' },

  '/api/v1/user/message': { action: 'user/message' },
  '/api/v1/user/review': { action: 'user/review' },
  '/api/v1/user/footprint': { action: 'user/footprint' },
  '/api/v1/user/address': { action: 'user/address' },

  'POST /api/v1/user/review/create': { action: 'review/create' },

  'POST /api/v1/user/footprints/create': { action: 'footprint/create' },
  'POST /api/v1/user/footprints/clear': { action: 'footprint/clear' },

  'POST /api/v1/user/cart/add': { action: 'cart/add' },
  'POST /api/v1/user/cart/remove': { action: 'cart/remove' },
  'POST /api/v1/user/cart/clear': { action: 'cart/clear' },
  'POST /api/v1/user/cart/alter': { action: 'cart/alter' },

  '/api/v1/user/order': { action: 'user/order' },

  'POST /api/v1/user/update': { action: 'user/update' },

  'POST /api/v1/user/address/create': { action: 'address/create' },
  'POST /api/v1/user/address/delete': { action: 'address/delete' },
  'POST /api/v1/user/address/update': { action: 'address/update' },

  '/api/v1/message': { action: 'message/byid' },

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms': '/legal/terms',
  '/logout': '/api/v1/account/logout',
};

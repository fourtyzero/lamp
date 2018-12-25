/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  // '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  // 'entrance/*': true,
  // 'account/logout': true,
  // 'view-homepage-or-redirect': true,
  // 'deliver-contact-form-message': true,

  'review/create': 'is-logged-in',

  'footprint/create': 'is-logged-in',
  'footprint/clear': 'is-logged-in',

  'cart/add': 'is-logged-in',
  'cart/remove': 'is-logged-in',
  'cart/clear': 'is-logged-in',
  'cart/alter': 'is-logged-in',

  'user/update': 'is-logged-in',

  'address/create': 'is-logged-in',
  'address/delete': 'is-logged-in',
  'address/update': 'is-logged-in',

  'user/*': 'is-logged-in',
  'user/login': true,
  'user/register': true,


  'order/create': 'is-logged-in',
  'order/update': 'is-logged-in',
  // 'user/message': 'is-logged-in'

};

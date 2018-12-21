module.exports = {
  friendlyName: 'Signup',

  description: 'Sign up for a new user account.',

  extendedDescription: `This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,

  inputs: {
    name: {
      required: true,
      type: 'string',
    },
    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.',
    },
  },

  exits: {
    invalid: {
      responseType: 'badRequest',
      description:
        'The provided fullName, password and/or email address are invalid.',
      extendedDescription:
        'If this request was sent from a graphical user interface, the request ' +
        'parameters should have been validated/coerced _before_ they were sent.',
    },

    nameAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },

  fn: async function({ name, password }, exits) {
    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newUserRecord = await User.create({
      password: await sails.helpers.passwords.hashPassword(password),
      name,
    }).fetch();

    // Store the user's new id in their session.


    // Since everything went ok, send our 200 response.
    return exits.success();
  },
};

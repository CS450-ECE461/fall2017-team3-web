/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'frontend-app',
    environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // this is needed for the account adapter to work
        'ds-improved-ajax': true
      },

      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      isAuthenticated: 'dummy'
    },

      // This is the key for the optional Recaptcha associated with Gatekeeper
    /*'ember-cli-google': {
      recaptcha: {
        siteKey: '6LeOYjgUAAAAANY85SPKKE8QhXWBfzRFKk0KsFRe'
      }
    },*/

    gatekeeper: {
      baseUrl: 'http://localhost:5000',
      startRoute: 'profile',
      signInRoute: 'sign-in',

      tokenOptions: {
        client_id: 'dummy',
        client_secret: '1234567890'
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

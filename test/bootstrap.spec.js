'use strict';


/* force environment to be test */
process.env.NODE_ENV = 'test';
process.env.DEFAULT_LOCALE = 'en';
process.env.DEBUG = true;

require('@lykmapipo/mongoose-test-helpers');

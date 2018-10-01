'use strict';


/**
 * @name emis-alert
 * @description A representation of an envelope(or payload) which carries
 * disaster notifications(or warning) from source(s) to audience(s).
 *
 * An alert is generated by a specific situation. The main features of an
 * alert is that it is not predictable and it is not a recurrent data. That
 * means that an alert could be an accident or a high level of pollutants
 * measure.
 *
 * @author Benson Maruchu <benmaruchu@gmail.com>
 * @author lally elias <lallyelias87@gmail.com>
 * @since  0.1.0
 * @version 0.1.0
 * @license MIT
 * @example
 *
 * const { app } = require('@codetanzania/emis-alert');
 * app.start();
 *
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const app = require('@lykmapipo/express-common');


/* declarations */
const pkg = require(path.join(__dirname, 'package.json'));
const fields = [
  'name',
  'description',
  'version',
  'license',
  'homepage',
  'repository',
  'bugs',
  'sandbox',
  'contributors'
];


/* extract information from package.json */
const info = _.merge({}, _.pick(pkg, fields));


/* import models */
const Alert =
  require(path.join(__dirname, 'lib', 'alert.model'));


/* import routers*/
const router =
  require(path.join(__dirname, 'lib', 'alert.http.router'));


/* export package(module) info */
exports.info = info;


/* export alert model */
exports.Alert = Alert;


/* export alert router */
exports.alertRouter = exports.router = router;


/* export router api version */
exports.apiVersion = router.apiVersion;


/* export app */
Object.defineProperty(exports, 'app', {
  get() {

    //TODO bind oauth middlewares authenticate, token, authorize

    /* bind alert router */
    app.mount(router);
    return app;
  }

});

'use strict';

/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Alert } = require(path.join(__dirname, '..', '..'));

describe('Alert', () => {

  before((done) => {
    Alert.deleteMany(done);
  });

  describe('static put', () => {

    let alert;

    before((done) => {
      alert = Alert.fake();
      alert.post((error, created) => {
        alert = created;
        done(error, created);
      });
    });

    it('should be able to put', (done) => {
      alert = alert.fakeOnly('title');
      Alert.put(alert._id, alert, (error, updated) => {
        expect(error).to.not.exist;
        expect(updated).to.exist;
        expect(updated._id).to.eql(alert._id);
        expect(updated.title).to.equal(alert.title);
        done(error, updated);
      });
    });

    it('should throw if not exists', (done) => {
      const fake = Alert.fake();
      Alert.put(fake._id, fake, (error, updated) => {
        expect(error).to.exist;
        expect(error.status).to.exist;
        expect(error.message).to.be.equal('Not Found');
        expect(updated).to.not.exist;
        done();
      });
    });

  });

  describe('instance put', () => {
    let alert;

    before((done) => {
      alert = Alert.fake();
      alert.post((error, created) => {
        alert = created;
        done(error, created);
      });
    });

    it('should be able to put', (done) => {
      alert = alert.fakeOnly('title');
      alert.put((error, updated) => {
        expect(error).to.not.exist;
        expect(updated).to.exist;
        expect(updated._id).to.eql(alert._id);
        expect(updated.title).to.equal(alert.title);
        done(error, updated);
      });
    });

    it('should throw if not exists', (done) => {
      alert.put((error, updated) => {
        expect(error).to.not.exist;
        expect(updated).to.exist;
        expect(updated._id).to.eql(alert._id);
        done();
      });
    });
  });

  after((done) => {
    Alert.deleteMany(done);
  });

});

// app/authenticators/custom.js
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: Ember.inject.service(),
  restore(data) {
    if (data.consumerId) {
      return Ember.RSVP.resolve({consumerId: data.consumerId});
    } else {
      return Ember.RSVP.reject();
    }
  },
  authenticate(email, password) {
    return new Promise((resolve, reject) => {
      return this.get('ajax').post('/api/consumer-login', {
        data: {
          email: email,
          password: password
        }
      }).then((resp) => {
        if (parseInt(resp.consumerId)) {
          resolve(resp)
        } else {
          reject()
        }
      })
    })
  },
  invalidate(data) {
    return Ember.RSVP.resolve()
  }
});

// app/authenticators/custom.js
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: Ember.inject.service(),
  // restore(data) {
  //   …
  // },
  authenticate(email, password) {
    return this.get('ajax').post('/api/consumer-login', {
      data: {
        email: email,
        password: password
      }
    })
  },
  invalidate(data) {
    console.log('I will log out')
  }
});

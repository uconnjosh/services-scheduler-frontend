import Controller from '@ember/controller';
import { inject as service } from '@ember/service';	

export default Controller.extend({
  session: service(),
  actions: {
    login() {
      let { email, password } = this.getProperties('email', 'password');
      
      this.get('session').authenticate('authenticator:custom', email, password).then(() => {
        this.session.set('currentUser', this.store.findRecord('consumer', this.session.data.authenticated.consumerId))
        this.transitionToRoute('services');
      });
    },

    cancel() {
      this.transitionToRoute('services');
    }
  }
});

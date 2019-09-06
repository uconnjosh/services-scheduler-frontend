import Controller from '@ember/controller';
import { inject as service } from '@ember/service';	

export default Controller.extend({
  session: service(),
  actions: {
    signup() {
      let newConsumer = this.store.createRecord('consumer', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      })

      newConsumer.save().then(() => {
        this.transitionToRoute('/login')
      })
    },

    cancel() {
      this.transitionToRoute('services');
    }
  }
});

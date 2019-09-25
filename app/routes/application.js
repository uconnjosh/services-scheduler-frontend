import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';	

export default Route.extend({
  session: service(),
  beforeModel() {
    const restoredConsumerId = this.session.data.authenticated.consumerId

    if (restoredConsumerId) {
      this.session.set('currentUser', this.store.findRecord('consumer', restoredConsumerId))
    }

    // this.transitionTo('services');
  }
});

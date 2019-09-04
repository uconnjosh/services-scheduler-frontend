import Controller from '@ember/controller';
import { inject as service } from '@ember/service';	

export default Controller.extend({
	session: service(),
	actions: {
		login() {
			this.session.login(this.email).then((result) => {
				if (this.session.authenticated) {
					this.transitionToRoute('services');
				}
			})
		},

		cancel() {
			this.transitionToRoute('services');
		}
	}
});

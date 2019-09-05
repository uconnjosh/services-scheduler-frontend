import Service from '@ember/service';

export default Service.extend({
	store: Ember.inject.service(),
	authenticated: null,

	login(email) {
		return this.store.query('consumer', {
			filter: {
				email: email
			}
		}).then((foundConsumer) => {
			if (foundConsumer) {
				this.set("authenticated", foundConsumer)
			}
		})
	},

	logout() {
		this.set("authenticated", null)
	}

});

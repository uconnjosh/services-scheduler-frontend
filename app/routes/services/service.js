import Route from '@ember/routing/route';

export default Route.extend({
	model(id) {
		// todo: replace "peek"
		return this.store.peekRecord('service', `${id}`)
	}
});

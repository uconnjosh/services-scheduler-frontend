import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('service', `${params.id}`)
  },
  actions: {
    destroyService() {
      this.get('context').destroyRecord().then(() => {
        this.transitionTo('/admin/services')
      })
    }
  }
});

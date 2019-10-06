import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroyService() {
      this.get('context').destroyRecord().then(() => {
        this.transitionTo('/admin/services')
      })
    },
    save() {
      this.get('model').save()
    }
  }
});

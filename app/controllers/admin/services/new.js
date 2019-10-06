import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((record) => {
        this.transitionToRoute(`admin.services.service`, record)
      })
    },
    cancel() {
      this.transitionToRoute('admin.services')
    },
  }
});

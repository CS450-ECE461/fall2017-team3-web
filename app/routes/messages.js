import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend ({
  model() {
    let currentUser = this.get('currentUser');
    return this.get('store').query("conversation", {id: currentUser.get('email')});
  },

  setupController(controller, model) {
    controller.set('conversations', model);

    let i;
    for (i = 0; i < controller.get('conversations').content.length; i++) {
      if (controller.get('conversations').objectAtContent(i).get('participants')[1] !== this.get('currentUser').get('email')) {
        console.log(controller.get('conversations').objectAtContent(i).get('participants')[1]);
      } else {
        console.log(controller.get('conversations').objectAtContent(i).get('participants')[0]);
      }
    }
  }
});

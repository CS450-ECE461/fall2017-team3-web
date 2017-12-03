import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serialize() {
    let json = this._super(...arguments);
    return {
        id: json.id,
        name: json.name,
        rating: json.rating,
        skills: json.skills,
        email: json.skills,
        password: json.password,
        image: json.image,
        description: json.description,
        portfolio: json.portfolio,
        projects: json.projects
    }
  }
});

import DS from 'ember-data';

export default DS.RESTSerializer.extend ({
  primaryKey: 'email',
  serialize() {
    let json = this._super(...arguments);

    return {
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

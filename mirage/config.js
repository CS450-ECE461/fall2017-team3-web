export default function() {
  this.namespace = 'api';

  let users = [{
        id: 'user_one@example.com',
          name: 'Phyllis Kingsley',
          rating: [3.5, 5],
          skills: ['Photography', 'Adobe Design Suite', 'Painting'],
          email: 'user_one@example.com',
          image: '/assets/images/profile.png',
          description: 'I am passionate about taking the perfect photograph and the best designs. Willing to participate in any project',
          portfolio: 'phylliskingsley.com',
          projects: ['project_1','project_3']
      }, {
        id: 'user_two@example.com',
          name: 'Daniel Yeager',
          rating: [5.0, 4.5, 3.5],
          skills: ['Landscaping', 'Plumbing', 'roofing'],
          email: 'user_two@example.com',
          image: '/assets/images/profile.png',
          description: 'You will find me useful in any home repair activities, inside and out',
          portfolio: 'danielyeager.blogpost.com',
          projects: ['project_1','project_2']
      }, {
        id: 'user_three@example.com',
          name: 'Adam Carpenter',
          rating: [1.2, 5],
          skills: ['roofing', 'construction', 'land surveys'],
          email: 'user_three@example.com',
          image: '/assets/images/profile.png',
          description: 'I build a house from the ground up!',
          portfolio: 'projects.construction.com',
          projects: ['project_1','project_2']
      }, {
         id: 'user_four@example.com',
           name: 'James Cooper',
           rating: [3, 1.5],
           skills: ['CAD', 'Design'],
           email: 'user_four@example.com',
           image: '/assets/images/profile.png',
           description: 'Want 3D models? You need my help!',
           portfolio: '3dmodels.net',
           projects: ['project_3','project_2']

  }];

  let projects = [{
    id: 'project_1',
      name: 'Messaging App',
      description: 'creating a messaging app to beat WhatsApp',
      skills: ['web design', 'web development', 'software testing'],
      owner: 'Owner One',
      active: true,
      collaborators: ['user_two@example.com','user_one@example.com'],
      image: '/assets/images/project.png'
  }, {
    id: 'project_2',
      name: 'Building a Shed',
      description: 'building an awesome shed out of plastic plastic plastic plastic plasticplastic plastic plastic plastic plastic plastic plastic plastic plastic plastic',
      skills: ['construction', 'Land Surveying'],
      owner: 'Owner Two',
      active: false,
      collaborators: ['user_three@example.com','user_one@example.com'],
      image: '/assets/images/project.png'
  }, {
    id: 'project_3',
      name: 'catering event',
      description: 'provide awesome food to an awesome event',
      skills: ['cooking', 'baking'],
      owner: 'Owner Three',
      active: false,
      collaborators: ['user_three@example.com'],
      image: '/assets/images/project.png'
  }];


  this.get('/projects', function(db, request) {
    if(request.queryParams.skills !== undefined) {
      let filteredProjects = projects.filter(function(i) {
        return i.skills.toString().toLowerCase().indexOf(request.queryParams.skills.toString().toLowerCase()) !== -1;
      });
      return { projects : filteredProjects};
    } else {
      return { projects : projects};
    }
  });

  this.get('/users', function(db, request) {
    if(request.queryParams.skills !== undefined) {
      let filteredUsers = users.filter(function(i) {
        return i.skills.toString().toLowerCase().indexOf(request.queryParams.skills.toString().toLowerCase()) !== -1;
      });
      return { users: filteredUsers};
    } else {
      return { users: users };
    }
  });

  this.get('/users/:id', function (db, request) {
    return { users: users.find((user) => request.params.id === user.id) };
  });

  this.get('/projects/:id', function (db, request) {
    return { projects: projects.find((project) => request.params.id === project.id) };
  });
}

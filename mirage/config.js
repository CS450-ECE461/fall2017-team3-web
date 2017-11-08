export default function() {
  this.namespace = 'api';

  let users = [{
        type: 'user',
        id: 'user-one',
        attributes: {
          name: 'User One',
          rating: 3.5,
          skills: ['Photography', 'Adobe Design Suite', 'Painting'],
          email: 'user_one@example.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'user',
        id: 'user-two',
        attributes: {
          name: 'User Two',
          rating: 5.0,
          skills: ['Landscaping', 'Plumbing', 'Hanging out while doing the above'],
          email: 'user_two@example.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'user',
        id: 'user-three',
        attributes: {
          name: 'User Three',
          rating: 1.2,
          skills: ['roofing', 'construction', 'surveying'],
          email: 'user_three@example.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }, {
         type: 'user',
         id: 'user-four',
         attributes: {
           name: 'User Three',
           rating: 1.2,
           skills: ['sleeping', 'eating', 'Private Affairs'],
           email: 'user_three@example.com',
           image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
    }
  }];

  let projects = [{
    type: 'project',
    id: 'project-1',
    attributes: {
      name: 'Messaging App',
      description: 'creating a messaging app to beat WhatsApp',
      skills: ['web design', 'web development', 'software testing'],
      owner: 'Owner One',
      status: 'active',
      contributors: [users[0],users[1]]
    }
  }, {
    type: 'project',
    id: 'project-2',
    attributes: {
      name: 'Building a Shed',
      description: 'building an awesome shed out of plastic',
      skills: ['construction', 'Land Surveying'],
      owner: 'Owner Two',
      status: 'active',
      contributors: []
    }
  }, {
    type: 'project',
    id: 'project-3',
    attributes: {
      name: 'catering event',
      description: 'provide awesome food to an awesome event',
      skills: ['cooking', 'baking'],
      owner: 'Owner Three',
      status: 'inactive',
      contributors: [users[4], users[2]]
    }
  }];


  this.get('/projects', function(db, request) {
    if(request.queryParams.skills !== undefined) {
      let filteredProjects = projects.filter(function(i) {
        return i.attributes.skills.toString().toLowerCase().indexOf(request.queryParams.skills.toString().toLowerCase()) !== -1;
      });
      return { data: filteredProjects };
    } else {
      return { data: projects};
    }
  });

  this.get('/users', function(db, request) {
    if(request.queryParams.skills !== undefined) {
      let filteredUsers = users.filter(function(i) {
        return i.attributes.skills.toString().toLowerCase().indexOf(request.queryParams.skills.toString().toLowerCase()) !== -1;
      });
      return { data: filteredUsers };
    } else {
      return { data: users };
    }
  });

  this.get('/users/:id', function (db, request) {
    return { data: users.find((user) => request.params.id === user.id) };
  });

  this.get('/projects/:id', function (db, request) {
    return { data: projects.find((project) => request.params.id === project.id) };
  });
}

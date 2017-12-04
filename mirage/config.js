import Response from 'ember-cli-mirage/response';

const TOKENS = [
  {token_type: 'Bearer', access_token: '1234567890', refresh_token: '0987654321'},
  {token_type: 'Bearer', access_token: 'abcdefghij', refresh_token: 'jihgfedcba'},
  {token_type: 'Bearer', access_token: '!@#$%^&*()'}
];
//variables to hold active user credentials
var currentUsername = '';
var currentPassword = '';

export default function() {
  this.urlPrefix = 'http://localhost:5000';
  this.namespace = '/v1';

  function doAuthenticatedRequest (req, accessToken, f) {
    let authorization = req.requestHeaders['Authorization'];

    if (!authorization) {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Missing Authorization HTTP header'
        }
      });
    }

    let parts = authorization.split (' ');

    if (parts.length !== 2) {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Invalid HTTP Authorization header'
        }
      });
    }
    else if (parts[0] !== 'Bearer') {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Missing Bearer strategy'
        }
      });
    }
    else if (parts[1] !== accessToken) {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Invalid access token'
        }
      });
    }
    else {
      return f (req);
    }
  }

  this.post ('/oauth2/token', (schema, req) => {
    let body = JSON.parse (req.requestBody);
    if (body.client_id !== 'dummy') {
      return new Response (400, {'Content-Type': 'application/json'}, {
        errors: {code: 'invalid_client', message: 'Your client id is not valid.'}
      });
    }

    if (body.grant_type === 'password') {
      // working with token.0

      if (!searchById(body.username)) {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {code: 'invalid_username', message: 'Your username is incorrect.'}
        });
      }
      else if (!checkPassword(body.username, body.password)) {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {code: 'invalid_password', message: 'Your password is incorrect.'}
        });
      }
      else {
        currentUsername = body.username;
        currentPassword = body.password;
        return TOKENS[0];
      }
    }
    else if (body.grant_type === 'refresh_token') {
      // working with token.1

      if (body.refresh_token !== TOKENS[0].refresh_token) {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {status: 400, message: 'Missing/invalid refresh token'}
        });
      }
      else {
        return TOKENS[1];
      }
    }
    else if (body.grant_type === 'client_credentials') {
      if (body.client_secret !== 'ssshhh') {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {status: 400, message: 'Missing/invalid client secret'}
        });
      }
      else {
        return TOKENS[2];
      }
    }
    else {
      return new Response (400, {'Content-Type': 'application/json'}, {
        errors: {status: 400, message: `Unsupported grant type: ${body.grant_type}`}
      });
    }
  });

  this.post ('/oauth2/logout', function (schema, req) {
    return doAuthenticatedRequest (req, TOKENS[0].access_token, () => {
      return new Response (200, {'Content-Type': 'application/json'}, true);
    });
  });

  this.post ('/accounts', function (schema, req) {
    return doAuthenticatedRequest (req, TOKENS[2].access_token, () => {
      let body = JSON.parse (req.requestBody);

      if (body.account.username !== undefined &&
          body.account.password !== undefined)
      {
        let returnedUser = returnUser(body.account.username, body.account.password);
        return {
          account: returnedUser
        }
      }
      else {
        return new Response (500, {'Content-Type': 'application/json'}, {
          errors: {status: 500, message: 'Internal Server Error'}
        });
      }
    });
  });

  this.get ('/accounts/me', function (schema, req) {
    return doAuthenticatedRequest (req, TOKENS[0].access_token, () => {
      return {
        account: {
          _id: 1,
          username: currentUsername,
          password: currentPassword,
          email: currentUsername
        }
      }
    });
  });

  this.get ('/dummies', function () {
    return new Response (403, {'Content-Type': 'application/json'}, {
      errors: {status: 403, message: `Your token is invalid.`}
    });
   });

//----------------------------------------------------------------------------
  //check if user name matches an entry in the users array

let searchById = function(item) {
  if (item !== undefined) {
    let userFound = users.filter(function (i) {
      return i.id === item;
    });
    if(userFound.length === 0) {
      return false;
    } else {
      return true;
    }
  }
};


  //check if the typed password matches for the user
  let checkPassword = function(username, password) {
    if (username !== undefined && password !== undefined) {
      let passMatch = users.filter(function (i) {
        return ((i.id === username) && (i.password === password));
      });
      if(passMatch.length === 0) {
        return false;
      } else {
        return true;
      }
    }
  };

  //return the account from user array
  let returnUser = function (username, password) {
    let user = users.filter(function (i) {
      if ((i.id === username) && (i.password === password)) {
        return i;
      }
    });
    return user;
  };


//-----------------------------------------------------------------------------

  this.namespace = 'api';

  let users = [{
    id: 'user_one@example.com',
    password: 'userone',
    name: 'Phyllis Kingsley',
    rating: [3.5, 5],
    skills: ['Photography', 'Adobe Design Suite', 'Painting'],
    email: 'user_one@example.com',
    image: '/assets/images/profile.png',
    description: 'I am passionate about taking the perfect photograph and the best designs. Willing to participate in any project',
    portfolio: 'phylliskingsley.com',
    projects: ['project_1','project_4']
    }, {
    id: 'user_two@example.com',
    password: 'usertwo',
    name: 'Daniel Yeager',
    rating: [5.0, 4.5, 3.5],
    skills: ['Landscaping', 'Plumbing', 'roofing'],
    email: 'user_two@example.com',
    image: '/assets/images/profile.png',
    description: 'You will find me useful in any home repair activities, inside and out',
    portfolio: 'danielyeager.blogpost.com',
    projects: ['project_2']
    }, {
    id: 'user_three@example.com',
    password: 'userthree',
    name: 'Adam Carpenter',
    rating: [1.2, 5],
    skills: ['roofing', 'construction', 'land surveys'],
    email: 'user_three@example.com',
    image: '/assets/images/profile.png',
    description: 'I build a house from the ground up!',
    portfolio: 'projects.construction.com',
    projects: ['project_2']
    }, {
    id: 'user_four@example.com',
    password: 'userfour',
    name: 'James Cooper',
    rating: [3, 1.5],
    skills: ['CAD', '3D Modeling'],
    email: 'user_four@example.com',
    image: '/assets/images/profile.png',
    description: 'Want 3D models? You need my help!',
    portfolio: '3dmodels.net',
    projects: ['project_2']
    }, {
    id: 'user_five@example.com',
    password: 'userfive',
    name: 'Jessica Watkins',
    rating: [3, 1.5],
    skills: ['HTML', 'CSS', 'javascript'],
    email: 'user_five@example.com',
    image: '/assets/images/profile.png',
    description: 'Web Development is what I do for a living.',
    portfolio: 'jessjo.com',
    projects: ['project_1','project_4']
  }, {
    id: 'user_six@example.com',
    password: 'usersix',
    name: 'Megan Williamson',
    rating: [3, 1.5],
    skills: ['cooking', 'baking', 'Food Service'],
    email: 'user_five@example.com',
    image: '/assets/images/profile.png',
    description: 'Web Development is what I do for a living.',
    portfolio: 'awesomefood.chefs.org',
    projects: ['project_3']
  }
  ];

  let projects = [{
    id: 'project_1',
    name: 'Messaging App',
    description: 'creating a messaging app to beat WhatsApp',
    skills: ['web design', 'web development', 'software testing'],
    owner: 'Owner One',
    active: true,
    collaborators: ['user_five@example.com','user_one@example.com'],
    image: '/assets/images/project.png'
    }, {
    id: 'project_2',
    name: 'Building a Shed',
    description: 'building an awesome shed out of plastic',
    skills: ['construction', 'Land Surveying'],
    owner: 'Owner Two',
    active: false,
    collaborators: ['user_three@example.com','user_two@example.com','user_four@example.com'],
    image: '/assets/images/project.png'
    }, {
    id: 'project_3',
    name: 'catering event',
    description: 'provide awesome food to an awesome event',
    skills: ['cooking', 'baking'],
    owner: 'Owner Three',
    active: false,
    collaborators: ['user_six@example.com'],
    image: '/assets/images/project.png'
    }, {
    id: 'project_4',
    name: 'Educational Web App',
    description: 'To help Math students in our local school, I want to help create an educational app that provides sample problems and solution to common assignments',
    skills: ['HTML', 'CSS', 'javascript','web development'],
    owner: 'Owner Four',
    active: false,
    collaborators: ['user_one@example.com','user_five@example.com'],
    image: '/assets/images/project.png'
  }
  ];


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

  this.post('/users', function (db, request) {
    let attrs = JSON.parse(request.requestBody);
    users.push(attrs.user);
    return {users: attrs.user};
  });
}


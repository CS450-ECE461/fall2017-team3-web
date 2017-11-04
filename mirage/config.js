export default function() {
  this.namespace = 'api';

  let users = [{
        type: 'user',
        id: 'user-one',
        attributes: {
          name: 'User One',
          skills: ['Photography', 'design'],
          email: 'user_one@example.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'user',
        id: 'user-two',
        attributes: {
          name: 'User Two',
          skills: ['design', 'CAD'],
          email: 'user_two@example.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'user',
        id: 'user-three',
        attributes: {
          name: 'User Three',
          skills: ['cooking', 'construction', 'Land Surveys'],
          email: 'user_three@example.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }];

  this.get('/users', function(db, request) {
    if(request.queryParams.name !== undefined) {
      let filteredUsers = users.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredUsers };
    } else {
      return { data: users };
    }
  });
}

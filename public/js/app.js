var bioPage = new Vue({
  el: '#content',
  data: {
    user: {
      name : '',
      birthday: '',
      age: '',
      address: '',
      email: '',
      picture: ''
    },
    comment: {
      id: '',
      text: ''
    }
  }, /**js object**/
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {
        bioPage.user.name= json.results[0].name.first + " " + json.results[0].name.last;
        bioPage.user.birthday = json.results[0].dob.date;
        bioPage.user.email = json.results[0].email;
        bioPage.user.picture = json.results[0].picture.large;
        bioPage.user.address = json.results[0].location.street+", "+json.results[0].location.city+", "+json.results[0].location.state;
        console.log('FETCH returned: ');
        console.log(json);
      })
      .catch( err => {
        console.log('PROJECT FETCH error: ');
        console.log(err);
      });
    },
    fetchComments() {
      fetch('../api/comment.php')
      .then( response => response.json() )
      .then( json => {
        bioPage.comment.id = json.results[0].id;
        bioPage.comment.text = json.results[0].comment;
      })
    },
    pretty_Date(d) {
      //do_magic
      return moment(d).format('l');
    },
    calculateAge(d) {
       return moment().diff(d,'years');
    }
  },
  created() {
    this.fetchUser();
  }
});

var commentsApp = new Vue({
  el: '#commentTableBody',
  data: {
    comments: [
      {
        "id": "",
        "comment" : ""
      }
    ]
  }, /**js object**/
  methods: {
    fetchComments: function() {
      fetch('ec2-18-219-100-144.us-east-2.compute.amazonaws.com/api/comment.php')
      .then( response => response.json() )
      .then( json => { commentsApp.comments = json } )
      .then( json => {
        console.log('COMMENT FETCH returned: ');
        console.log(json);
      })
      .catch( err => {
        console.log("COMMENT FETCH error: ");
        console.log(err);
      });
    },
  },
  created() {
    this.fetchComments();
  }
});

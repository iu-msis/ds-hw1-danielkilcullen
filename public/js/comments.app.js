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
      fetch('../api/comment.php')
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

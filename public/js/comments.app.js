var commentsApp = new Vue({
  el: '#commentTableBody',
  data: {
    comments: {
        id: "",
        comment : ""
    },
    commentArr = [],
    commentForm = {}
  }, /**js object**/
  methods: {
    fetchComments: function() {
      fetch('../api/comment.php')
      .then( response => response.json() )
      .then( json => {
        console.log('COMMENT FETCH returned: ');
        console.log(json);
      })
      .then( json => {commentsApp.commentArr = json} )
      .then(console.log(commentArr) //testing
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

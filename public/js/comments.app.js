var commentsApp = new Vue({
  el: '#commentTable',
  data: {
    comments: {
      id: '',
      comment: ''
    }
  }, /**js object**/
  methods: {
    fetchComments() {
      fetch('../api/comment.php')
      .then( response => response.json() )
      .then( json => {
        bioPage.comments.id = json.results[0].id;
        bioPage.comments.comment = json.results[0].comment;
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

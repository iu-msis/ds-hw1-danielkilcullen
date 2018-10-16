var commentsApp = new Vue({
  el: '#HW7',
  data: {
    comments: {
        id: "",
        comment : ""
    },
    commentArr: [],
    commentForm: {}
  },
  methods: {
    fetchComments: function() {
      fetch('../api/comment.php')
      .then( response => response.json() )
      .then( json => {
        console.log('COMMENT FETCH returned: ');
        console.log(json);
      })
      .then( json => {this.commentArr = json} )
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

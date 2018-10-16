var commentsApp = new Vue({
  el: '#HW7',
  data: {
    comments: {
        id: "",
        comment : ""
    },
    commentArr: [],
    commentForm: {},
  },
  methods: {
    fetchComments: function() {
      fetch('../api/comment.php')
      .then( response => response.json() )
      .then(console.log(json))
      .then( json => { this.commentArr = json } )
      .catch( err => {
        console.log("COMMENT FETCH error: ");
        console.log(err);
      })
    }
  },
  mounted() {
    this.fetchComments();
  }
});

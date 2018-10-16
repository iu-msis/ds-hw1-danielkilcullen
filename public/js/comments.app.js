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
      fetch('ec2-18-219-100-144.us-east-2.compute.amazonaws.com/api/comment.php')
      .then( response => response.json() )
      .then( json => { this.commentArr = json } )
      .then(console.log(json)) //testing
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

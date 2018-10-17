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
      .then( json => { this.commentArr = json } )
      .catch( err => {
        console.log("COMMENT FETCH error: ");
        console.log(err);
      })
    },
    getEmptyCommentForm: function() {
      return {
        // comment: '';
      }
    },
    handleCommentForm: function() {
      if (this.commentForm == null) {
              console.error("Can't submit (it's null)");
              return;
      }

      const s = JSON.stringify(this.commentForm);
      console.log(s);//testing

      fetch('../api/comment.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s
      })
      .then( response => response.json() )
      .then( json => {this.commentArr.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      this.commentForm = this.getEmptyCommentForm();
    }
    }
  },
  created() {
    this.fetchComments();
    this.getEmptyCommentForm();
  }
});

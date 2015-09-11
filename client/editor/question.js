Template.editorQuestion.events({
  'click #saveButton': function() {
    Questions.update({_id: this._id}, {$set: {
      prompt: $('#question-text').val(),
      answerA: $('#incorrect-answer-1').val(),
      answerB: $('#incorrect-answer-2').val(),
      answerC: $('#incorrect-answer-3').val(),
      answerD: $('#correct-answer').val(),
      updatedAt: new Date()
    }});
    Router.go('editor');
  },

  'click #cancelButton': function() {
    Router.go('editor');
  }
});

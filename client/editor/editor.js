Template.editorList.questions = function () {
  return Questions.find({}, {sort: {updatedAt: -1}});
};

Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // counter starts at 0
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  })
}

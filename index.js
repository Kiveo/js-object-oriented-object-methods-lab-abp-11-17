function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  //method
  this.veto = function() {
    return "No, I must disagree";
  }
}

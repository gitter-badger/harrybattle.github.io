function Game(element) {
  this.element = element
  Crafty.c("HarryPotter", {
    init: function(){
      this.addComponent("2D, Canvas, Color");
    }
  })
}

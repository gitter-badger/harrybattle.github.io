function Game(element) {
    this.element = element
    Crafty.init(500/*px width*/,500/*px height*/,this.element/*: game element*/);
    Crafty.c("HarryPotter", {
        required: "2D, Canvas, Color",
        init: function(){
            
        },
    })
}

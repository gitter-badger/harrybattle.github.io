function Game(element) {
    this.element = element
    Crafty.init(1000/*px width*/,1000/*px height*/,this.element/*: game element*/);
    Crafty.c("HarryPotter", {
        required: "2D, Canvas, Color",
        init: function(){
            
        },
    })
}
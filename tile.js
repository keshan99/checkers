class Tile{
    constructor(x, y, size, c, sqr, p=null){
        this.x = x;
        this.y = y;
        this.size = size;
        this.sqr = sqr;
        this.piece = p;
        if (c)
            
            this.color = '#' + ( 0xDE7225).toString(16);
            //this.color = 'black';
        else
            //.color = 'white';
            this.color = '#' + ( 0xFFBF91).toString(16);
    }

    draw(context){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
        if(DEBUG){
            if(this.color == 'black'){
            context.fillStyle = "blue";
            context.font = "30px Arial";
            context.fillText(this.sqr, this.x, this.y);
            }
        }
    }

    drawPiece(context){
        if(this.piece != null){
            this.piece.draw(context);
        }
    }
}
class Shape extends Base {
    constructor(props) {
        super(props);
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);

        this.parent = null; // Pending
    }

    render(props) {
        let properHeight = this.props && this.props.h ? this.props.h : props.h - this.margin?.bottom - this.margin?.top;

        if (properHeight < 0) {
            console.log("Negative height");
        }

        if (DEBUG) {
            fill(this.r - 40, this.g - 40, this.b - 40);
            // Top
            rect(props.x, props.y, props.w, this.margin?.top);
            //Right
            rect(props.x + props.w - this.margin?.right, props.y, this.margin?.right, properHeight + this.margin?.top + this.margin?.bottom);
            //Bottom
            rect(props.x, props.y + properHeight + this.margin?.top, props.w, this.margin?.bottom);
            //Left
            rect(props.x, props.y, this.margin?.left, properHeight + this.margin?.top + this.margin?.bottom);

        }

        fill(this.r, this.g, this.b);
        rect(props.x + this.margin?.left,
            props.y + this.margin?.top,
            props.w - this.margin?.right - this.margin?.left,
            properHeight);
    }
}

const STRATEGIES = {
    FILL_HORIZONTALLY: 0, // Basic strategy, fill the entiere layout with it's components, left to right
    FILL_VERTICALLY: 1 // Fill the layout with it's components, top to bottom
}

class Layout extends Base {
    constructor(props) {
        super(props);
        this.strategy = STRATEGIES.FILL_HORIZONTALLY;
    }

    center() {
        return createVector(this.x + this.w / 2, this.y + this.h / 2);
    }

    addChild(component) {
        this.components.push(component);
    }

    render(props) {
        if (DEBUG) {
            fill(0);
            stroke(255);
            strokeWeight(this.strokeWeight);
            rect(this.props.x + this.strokeWeight / 2, this.props.y + this.strokeWeight / 2, this.props.w, this.props.h);
        }

        noStroke(); // For now

        switch (this.strategy) {
            case STRATEGIES.FILL_HORIZONTALLY: this.renderFillHorizontally(props); break;
            case STRATEGIES.FILL_VERTICALLY: this.renderFillVertically(props); break;
        }
    }

    renderFillHorizontally(props) {
        let x = (props?.x ?? this.props.x) + this.strokeWeight;
        let y = (props?.y ?? this.props.y) + this.strokeWeight;
        let w = ((props?.w ?? this.props.w) - this.strokeWeight) / this.components.length;
        let h = (props?.h ?? this.props.h) - this.strokeWeight;

        for (let i = 0; i < this.components.length; i++) {
            this.components[i].render({ x, y, w, h });
            x += w;
        }
    }

    renderFillVertically(props) {
        let x = (props?.x ?? this.props.x) + this.strokeWeight;
        let y = (props?.y ?? this.props.y) + this.strokeWeight;
        let w = (props?.w ?? this.props.w) - this.strokeWeight;
        let h = ((props?.h ?? this.props.h) - this.strokeWeight) / this.components.length;

        for (let i = 0; i < this.components.length; i++) {
            this.components[i].render({ x, y, w, h });
            y += h;
        }
    }
}
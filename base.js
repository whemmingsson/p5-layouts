class Base {
    constructor(props) {
        // Children
        this.components = [];
        // "This" - inherent properties
        this.props = props ?? {};
        // Debugging style
        this.strokeWeight = 0;
        this.margin = { top: 10, right: 10, bottom: 10, left: 10 }; // Default margin
    }

    hasOnlyOneChild() {
        return this.components.length === 1;
    }


}
/*

Some layout rules:  
* Borders (stroke) are drawn inside the rectangle, so the rectangle is smaller than the width and height.  
*/

const DEBUG = true;

let layout = null;
let s1 = null;
let s2 = null;
let shapes = [];

function setup() {
    const canvas = createCanvas(1000, 600);
    canvas.parent('sketch-holder');

    textAlign(CENTER, CENTER);

    layout = new Layout({ x: 100, y: 100, w: 800, h: 400 });
    addChildren();

    // UI Controls
    let strategy = createSelect();
    strategy.parent('controls');
    strategy.option("Fill Horizontally", STRATEGIES.FILL_HORIZONTALLY);
    strategy.option("Fill Vertically", STRATEGIES.FILL_VERTICALLY);
    strategy.changed(() => {
        layout.strategy = parseInt(strategy.value());
    });

    let margin = createSlider(0, 50, 10);
    margin.parent('controls');
    margin.changed(() => {
        const m = parseInt(margin.value());
        forAll("margin", { top: m, right: m, bottom: m, left: m });
    });

    const m = parseInt(margin.value());
    forAll("margin", { top: m, right: m, bottom: m, left: m });
}

function draw() {
    background(50);
    layout.render();
}

function forAll(prop, value) {
    shapes.forEach(s => s[prop] = value);
}

function addChildren() {
    let s1 = new Shape({ h: 100 });
    s1.margin.top = 200;
    shapes.push(s1);
    layout.addChild(s1);

    let s2 = new Layout();
    let s3 = new Shape();
    let s6 = new Shape();
    let s7 = new Shape();
    let s8 = new Shape();

    s2.addChild(s6);
    s2.addChild(s7);
    s2.addChild(s8);

    layout.addChild(s2);
    layout.addChild(s3);


    shapes.push(s2);
    shapes.push(s3);
    shapes.push(s6);
    shapes.push(s7);
    shapes.push(s8);
}
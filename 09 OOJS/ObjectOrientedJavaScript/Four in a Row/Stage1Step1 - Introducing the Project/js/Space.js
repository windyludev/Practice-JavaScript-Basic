class Space {
    constructor(x, y) {
        this.id = `space-${x}-${y}`;
        this.x = x;
        this.y = y;
        this.token = null;
        this.diameter = 76;
        this.radius = this.diameter / 2;
    }

    get owner() {
        if (this.token  !== null) {
            return this.token.owner;
        }
        else {
            return null;
        }
    }

    drawSVGSpace() {
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");

        document.getElementById("mask").appendChild(svgSpace);   
    }

    mark(token) {
        this.token = token;
    }
}
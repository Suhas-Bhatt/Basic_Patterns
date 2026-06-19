// --- DOM Elements ---
const patternSelect = document.getElementById("pattern-select");
const paramColsBox = document.getElementById("param-cols-box");
const paramNInput = document.getElementById("param-n");
const paramColsInput = document.getElementById("param-cols");
const generateBtn = document.getElementById("generate-btn");
const patternDisplay = document.getElementById("pattern-display");

// --- Show/hide columns param for hollow rectangle only ---
patternSelect.addEventListener("change", () => {
    if (patternSelect.value === "hollow_rectangle") {
        paramColsBox.classList.remove("hidden");
    } else {
        paramColsBox.classList.add("hidden");
    }
    generatePattern();
});

generateBtn.addEventListener("click", generatePattern);

// --- Pattern Generator ---
function generatePattern() {
    const type = patternSelect.value;
    const n = parseInt(paramNInput.value) || 5;
    const cols = parseInt(paramColsInput.value) || 15;
    let output = "";

    switch (type) {
        case "hollow_rectangle":      output = drawHollowRectangle(n, cols); break;
        case "mirrored_half_pyramid": output = drawMirroredHalfPyramid(n);   break;
        case "inverted_half_pyramid": output = drawInvertedHalfPyramid(n);   break;
        case "floyds_triangle":       output = drawFloydsTriangle(n);         break;
        case "zero_one_triangle":     output = drawZeroOneTriangle(n);        break;
        case "butterfly":             output = drawButterflyPattern(n);       break;
        case "solid_rhombus":         output = drawSolidRhombus(n);           break;
        case "hollow_rhombus":        output = drawHollowRhombus(n);          break;
        case "diamond":               output = drawDiamondPattern(n);         break;
        default:                      output = "Select a valid pattern.";
    }

    patternDisplay.textContent = output;
}

// --- Pattern Algorithms ---

function drawHollowRectangle(rows, cols) {
    let result = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            result += (i === 1 || i === rows || j === 1 || j === cols) ? "*" : " ";
        }
        result += "\n";
    }
    return result;
}

function drawMirroredHalfPyramid(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) result += " ";
        for (let j = 1; j <= i; j++) result += "*";
        result += "\n";
    }
    return result;
}

function drawInvertedHalfPyramid(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) result += j + " ";
        result += "\n";
    }
    return result;
}

function drawFloydsTriangle(n) {
    let result = "";
    let counter = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) result += counter++ + " ";
        result += "\n";
    }
    return result;
}

function drawZeroOneTriangle(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) result += ((i + j) % 2 === 0 ? "1" : "0") + " ";
        result += "\n";
    }
    return result;
}

function drawButterflyPattern(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) result += "*";
        for (let j = 1; j <= 2 * (n - i); j++) result += " ";
        for (let j = 1; j <= i; j++) result += "*";
        result += "\n";
    }
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) result += "*";
        for (let j = 1; j <= 2 * (n - i); j++) result += " ";
        for (let j = 1; j <= i; j++) result += "*";
        result += "\n";
    }
    return result;
}

function drawSolidRhombus(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) result += " ";
        for (let j = 1; j <= n; j++) result += "*";
        result += "\n";
    }
    return result;
}

function drawHollowRhombus(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) result += " ";
        for (let j = 1; j <= n; j++) {
            result += (i === 1 || i === n || j === 1 || j === n) ? "*" : " ";
        }
        result += "\n";
    }
    return result;
}

function drawDiamondPattern(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) result += " ";
        for (let j = 1; j <= 2 * i - 1; j++) result += "*";
        result += "\n";
    }
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) result += " ";
        for (let j = 1; j <= 2 * i - 1; j++) result += "*";
        result += "\n";
    }
    return result;
}

// --- Auto-generate on load ---
generatePattern();

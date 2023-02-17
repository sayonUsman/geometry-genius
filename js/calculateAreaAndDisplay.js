function calculateAreaAndDisplay(id) {
    let area;

    switch (id) {
        case 'triangle-area-cal-btn':
            const triangleBDisplay = document.getElementById('triangle-b-display');
            const triangleHDisplay = document.getElementById('triangle-h-display');
            const triangleB = document.getElementById('triangle-b');
            const triangleH = document.getElementById('triangle-h');
            
            triangleBDisplay.innerText = triangleB.value;
            triangleHDisplay.innerText = triangleH.value;
            area = (0.5 * parseFloat(triangleB.value) * parseFloat(triangleH.value)).toFixed(2);

            return area;

        case 'rectangle-area-cal-btn':
            const rectangleWDisplay = document.getElementById('rectangle-w-display');
            const rectangleLDisplay = document.getElementById('rectangle-l-display');
            const rectangleW = document.getElementById('rectangle-w');
            const rectangleL = document.getElementById('rectangle-l');
            
            rectangleWDisplay.innerText = rectangleW.value;
            rectangleLDisplay.innerText = rectangleL.value;
            area = (parseFloat(rectangleW.value) * parseFloat(rectangleL.value)).toFixed(2);

            return area;

        case 'parallelogram-area-cal-btn':
            const parallelogramBDisplay = document.getElementById('parallelogram-b-display');
            const parallelogramHDisplay = document.getElementById('parallelogram-h-display');
            const parallelogramB = document.getElementById('parallelogram-b');
            const parallelogramH = document.getElementById('parallelogram-h');

            parallelogramBDisplay.innerText = parallelogramB.value;
            parallelogramHDisplay.innerText = parallelogramH.value;
            area = (parseFloat(parallelogramB.value) * parseFloat(parallelogramH.value)).toFixed(2);

            return area;

        case 'rhombus-area-cal-btn':
            const rhombusD1Display = document.getElementById('rhombus-d1-display');
            const rhombusD2Display = document.getElementById('rhombus-d2-display');
            const rhombusD1 = document.getElementById('rhombus-d1');
            const rhombusD2 = document.getElementById('rhombus-d2');

            rhombusD1Display.innerText = rhombusD1.value;
            rhombusD2Display.innerText = rhombusD2.value;
            area = (0.5 * parseFloat(rhombusD1.value) * parseFloat(rhombusD2.value)).toFixed(2);

            return area;
        
        case 'pentagon-area-cal-btn':
            const pentagonPDisplay = document.getElementById('pentagon-p-display');
            const pentagonBDisplay = document.getElementById('pentagon-b-display');
            const pentagonP = document.getElementById('pentagon-p');
            const pentagonB = document.getElementById('pentagon-b');
            
            pentagonPDisplay.innerText = pentagonP.value;
            pentagonBDisplay.innerText = pentagonB.value;
            area = (0.5 * parseFloat(pentagonP.value) * parseFloat(pentagonB.value)).toFixed(2);

            return area;

        case 'ellipse-area-cal-btn':
            const ellipseABDisplay = document.getElementById('ellipse-ab-display');
            const ellipseA = document.getElementById('ellipse-a');
            const ellipseB = document.getElementById('ellipse-b');
            
            ellipseABDisplay.innerText = '3.14 x ' + ellipseA.value + ' x ' + ellipseB.value;
            area = (3.14 * parseFloat(ellipseA.value) * parseFloat(ellipseB.value)).toFixed(2);

            return area;
    }
}


document.getElementById('triangle-area-cal-btn').addEventListener('click', function() {
    calculateAreaAndDisplay('triangle-area-cal-btn');
});

document.getElementById('rectangle-area-cal-btn').addEventListener('click', function() {
    calculateAreaAndDisplay('rectangle-area-cal-btn');
});

document.getElementById('parallelogram-area-cal-btn').addEventListener('click', function() {
    calculateAreaAndDisplay('parallelogram-area-cal-btn');
});

document.getElementById('rhombus-area-cal-btn').addEventListener('click', function() {
    calculateAreaAndDisplay('rhombus-area-cal-btn');
});

document.getElementById('pentagon-area-cal-btn').addEventListener('click', function() {
    calculateAreaAndDisplay('pentagon-area-cal-btn');
});

document.getElementById('ellipse-area-cal-btn').addEventListener('click', function() {
    calculateAreaAndDisplay('ellipse-area-cal-btn');
});

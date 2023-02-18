function calculateAreaAndDisplay(id) {
    let area;

    switch (id) {
        case 'triangle-area-cal-btn':
            const triangleBDisplay = document.getElementById('triangle-b-display');
            const triangleHDisplay = document.getElementById('triangle-h-display');
            const triangleB = document.getElementById('triangle-b');
            const triangleH = document.getElementById('triangle-h');

            if (triangleB.value === '' || triangleH.value === '') {
                alert('Please enter the value.');
                return 0;
            }

            if (parseFloat(triangleB.value) < 0 || parseFloat(triangleH.value) < 0){
                alert('Please enter the positive value.');
                return 0;
            }

            triangleBDisplay.innerText = triangleB.value;
            triangleHDisplay.innerText = triangleH.value;
            area = (0.5 * parseFloat(triangleB.value) * parseFloat(triangleH.value)).toFixed(2);

            return area;

        case 'rectangle-area-cal-btn':
            const rectangleWDisplay = document.getElementById('rectangle-w-display');
            const rectangleLDisplay = document.getElementById('rectangle-l-display');
            const rectangleW = document.getElementById('rectangle-w');
            const rectangleL = document.getElementById('rectangle-l');

            if (rectangleW.value === '' || rectangleL.value === '') {
                alert('Please enter the value.');
                return 0;
            }

            if (parseFloat(rectangleW.value) < 0 || parseFloat(rectangleL.value) < 0) {
                alert('Please enter the positive value.');
                return 0;
            }
        
            rectangleWDisplay.innerText = rectangleW.value;
            rectangleLDisplay.innerText = rectangleL.value;
            area = (parseFloat(rectangleW.value) * parseFloat(rectangleL.value)).toFixed(2);

            return area;

        case 'parallelogram-area-cal-btn':
            const parallelogramBDisplay = document.getElementById('parallelogram-b-display');
            const parallelogramHDisplay = document.getElementById('parallelogram-h-display');
            const parallelogramB = document.getElementById('parallelogram-b');
            const parallelogramH = document.getElementById('parallelogram-h');

            if (parallelogramB.value === '' || parallelogramH.value === '') {
                alert('Please enter the value.');
                return 0;
            }

            if (parseFloat(parallelogramB.value) < 0 || parseFloat(parallelogramH.value) < 0) {
                alert('Please enter the positive value.');
                return 0;
            }
            
            parallelogramBDisplay.innerText = parallelogramB.value;
            parallelogramHDisplay.innerText = parallelogramH.value;
            area = (parseFloat(parallelogramB.value) * parseFloat(parallelogramH.value)).toFixed(2);

            return area;

        case 'rhombus-area-cal-btn':
            const rhombusD1Display = document.getElementById('rhombus-d1-display');
            const rhombusD2Display = document.getElementById('rhombus-d2-display');
            const rhombusD1 = document.getElementById('rhombus-d1');
            const rhombusD2 = document.getElementById('rhombus-d2');

            if (rhombusD1.value === '' || rhombusD2.value === '') {
                alert('Please enter the value.');
                return 0;
            }


            if (parseFloat(rhombusD1.value) < 0 || parseFloat(rhombusD2.value) < 0) {
                alert('Please enter the positive value.');
                return 0;
            }
            
            rhombusD1Display.innerText = rhombusD1.value;
            rhombusD2Display.innerText = rhombusD2.value;
            area = (0.5 * parseFloat(rhombusD1.value) * parseFloat(rhombusD2.value)).toFixed(2);

            return area;
        
        case 'pentagon-area-cal-btn':
            const pentagonPDisplay = document.getElementById('pentagon-p-display');
            const pentagonBDisplay = document.getElementById('pentagon-b-display');
            const pentagonP = document.getElementById('pentagon-p');
            const pentagonB = document.getElementById('pentagon-b');

            if (pentagonP.value === '' || pentagonB.value === '') {
                alert('Please enter the value.');
                return 0;
            }

            if (parseFloat(pentagonP.value) < 0 || parseFloat(pentagonB.value) < 0) {
                alert('Please enter the positive value.');
                return 0;
            }
            
            pentagonPDisplay.innerText = pentagonP.value;
            pentagonBDisplay.innerText = pentagonB.value;
            area = (0.5 * parseFloat(pentagonP.value) * parseFloat(pentagonB.value)).toFixed(2);

            return area;

        case 'ellipse-area-cal-btn':
            const ellipseABDisplay = document.getElementById('ellipse-ab-display');
            const ellipseA = document.getElementById('ellipse-a');
            const ellipseB = document.getElementById('ellipse-b');

            if (ellipseA.value === '' || ellipseB.value === '') {
                alert('Please enter the value.');
                return 0;
            }

            if (parseFloat(ellipseA.value) < 0 || parseFloat(ellipseB.value) < 0) {
                alert('Please enter the positive value.');
                return 0;
            }
            
            ellipseABDisplay.innerText = '3.14 x ' + ellipseA.value + ' x ' + ellipseB.value;
            area = (3.14 * parseFloat(ellipseA.value) * parseFloat(ellipseB.value)).toFixed(2);

            return area;
    }
}

function createNewSection(id, area, count) {
    const calculationArea = document.getElementById('calculation-area');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const sup1 = document.createElement('sup');
    const sup2 = document.createElement('sup');
    const button = document.createElement('button');

    div.classList.add('d-flex');
    div.classList.add('justify-content-between');
    div.classList.add('mb-3');

    p1.classList.add('ms-2');

    button.classList.add('btn');
    button.classList.add('btn-primary');
    
    p1.innerText = count.toString() + '. ' + id;
    p2.innerText = area + 'cm';
    sup1.innerText = '2';
    sup2.innerText = '2';
    button.innerText = 'Convert to m';

    calculationArea.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    p2.appendChild(sup1);
    button.appendChild(sup2);
    div.appendChild(button);
}


let count = 1;

document.getElementById('triangle-area-cal-btn').addEventListener('click', function() {
    const area = calculateAreaAndDisplay('triangle-area-cal-btn');
    createNewSection('Triangle', area, count);
    count ++;
});

document.getElementById('rectangle-area-cal-btn').addEventListener('click', function() {
    const area = calculateAreaAndDisplay('rectangle-area-cal-btn');
    createNewSection('Rectangle', area, count);
    count ++;
});

document.getElementById('parallelogram-area-cal-btn').addEventListener('click', function() {
    const area = calculateAreaAndDisplay('parallelogram-area-cal-btn');
    createNewSection('Parallelogram', area, count);
    count ++;
});

document.getElementById('rhombus-area-cal-btn').addEventListener('click', function() {
    const area = calculateAreaAndDisplay('rhombus-area-cal-btn');
    createNewSection('Rhombus', area, count);
    count ++;
});

document.getElementById('pentagon-area-cal-btn').addEventListener('click', function() {
    const area = calculateAreaAndDisplay('pentagon-area-cal-btn');
    createNewSection('Pentagon', area, count);
    count ++;
});

document.getElementById('ellipse-area-cal-btn').addEventListener('click', function() {
    const area = calculateAreaAndDisplay('ellipse-area-cal-btn');
    createNewSection('Ellipse', area, count);
    count ++;
});


document.getElementById('blog-btn').addEventListener('click', function() {
    window.location.href = 'blog.html';
});
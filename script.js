const { body } = document;

function changeBackground(backgroundOption) {
    // Check if background already showing
    let previousBackground;
    if (body.className) {
        previousBackground = body.className;
    }
    // Reset body classes to nothing
    body.className = '';
    switch (backgroundOption) {
        case '1':
            return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
        default:
            break;
    }
}
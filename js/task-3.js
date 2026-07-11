function text field() {
    const $input = document.querySelector('input#name-input');
    const $output = document.querySelector('span#name-output');

    function handleInput(e) {
        let inputValue = e.target.value.trim();
        $output.textContent = inputValue.length > 0 ? inputValue : 'Anonymous';
    }

    $input.addEventListener('input', (e) => handleInput(e))
}

text field();
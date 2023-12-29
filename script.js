//your JS code here. If required.
function handleInput(input) {
            if (input.value.length === 1) {
                // Move focus to the next input
                const nextInput = input.nextElementSibling;
				
                if (nextInput) {
                    //nextInput.focus();
					setTimeout(() => nextInput.focus(), 100);
                }
            } else if (input.value.length === 0) {
                // Move focus to the previous input on backspace
                const prevInput = input.previousElementSibling;
                if (prevInput) {
                   // prevInput.focus();
					setTimeout(() => prevInput.focus(), 100);
                }
            }
        }
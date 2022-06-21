            'use strict'

            // Declare variables             
            
            let name = prompt('What are your names?');
            let height = parseFloat(prompt("What your height?"));
            let country = prompt('What is your country name?');
            
            // Write content on the screen
            
            document.writeln(`<main class = 'container'>
                <h1>
                    My name is <span> ${name}</span>
                </h1><br/>
                <p>
                    I am  <span>${height} feets </span> tall from <span>${country}</span>
                </p>
                </main>`);

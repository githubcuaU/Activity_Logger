

let clickCount = 0;

let button = document.getElementById("button");

let clickOutput = document.getElementById("clickCount");

button.addEventListener("click", function () 
{
    clickCount++;
    clickOutput.innerHTML = clickCount;

    fetch('/click', 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify
        ({ 
            clickCount
        })
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error(error));
});
 

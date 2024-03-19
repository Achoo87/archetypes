document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll('.container');
    let size = 0; //starting size
    const MAX_SIZE = 100; //ending size
    let intervalId; //timer obj
    let isMaxSize = false; 
    const intervalSpeed = 20; //change interval speed here, higher = slower


    containers.forEach(container => {
        container.addEventListener('click', event => {
            const containerId = container.id;
            const link = document.querySelector(`#${containerId}Link`);

            if (link) {
                if (!isMaxSize) {
                    event.preventDefault();
                    link.classList.add("disabled-link");

                }
                else {
                    link.classList.remove("disabled-link");
                    link.style.pointerEvents= "auto";
                    event.stopPropagation();
                }
            } else {
                console.error(`Link not found for container with ID: ${containerId}`);
            }

        });


        container.addEventListener('mousemove', function (event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            //creates a rect obj around the div
            const containerRect = container.getBoundingClientRect();

            // Checks if the mouse is within the boundaries of the rectangle
            if (mouseX >= containerRect.left && mouseX <= containerRect.right &&
                mouseY >= containerRect.top && mouseY <= containerRect.bottom) {
                //removes red circles from other divs
                containers.forEach(container => {
                    const existingRedCircle = container.querySelector('.red-circle');
                    if (existingRedCircle) {
                        existingRedCircle.remove();
                    }
                });

                // calculates the size of the red circle
                size += 1;
                if (size > MAX_SIZE) {
                    size = MAX_SIZE;
                    colour = 'green';
                }
                else
                {
                    colour='red'
                }

                const redCircle = createRedCircle(event, size, colour); //creates a red circle, passed args event (where mouse is) and size (calcualted size)

                container.appendChild(redCircle);   //adds cicle to container
            }
            else {
                //here mouse moves outside of any container div so delete circle, reset size
                const existingRedCircle = container.querySelector('.red-circle');
                if (existingRedCircle) {
                    existingRedCircle.remove();
                }
                size = 0; // Reset size when mouse leaves the container
            }
        });
    });

    //increase the size if not already started
    intervalId = setInterval(function () {
        containers.forEach(container => {
            const redCircle = container.querySelector('.red-circle');
            if (redCircle) {
                size += 1;
                if (size > MAX_SIZE) {
                    size = MAX_SIZE;
                    redCircle.style.backgroundColor = 'green';

                }
                redCircle.style.width = `${size}px`;
                redCircle.style.height = `${size}px`;

                if (size == MAX_SIZE) {
                    const rect = container.getBoundingClientRect();
                    const topLeftX = rect.left + window.scrollX;
                    const topLeftY = rect.top + window.scrollY;

                    redCircle.style.left = topLeftX;
                    redCircle.style.top = topLeftY;

                    //  put code here for when the size is max,
                    //ie changing colour, enabling hyperlink

                    isMaxSize = true;


                }
                else {
                    redCircle.style.left = `${parseFloat(redCircle.style.left) - 0.5}px`; // To maintain the circle in the center
                    redCircle.style.top = `${parseFloat(redCircle.style.top) - 0.5}px`; // To maintain the circle in the center
                }

            }
        });
    }, intervalSpeed);

    //create red circle element
    function createRedCircle(event, size, colour) {
        const redCircle = document.createElement('div');
        redCircle.classList.add('red-circle');

        redCircle.style.backgroundColor = colour;

        redCircle.style.width = `${size}px`;
        redCircle.style.height = `${size}px`;
        redCircle.style.borderRadius = '50%';
        redCircle.style.position = 'fixed';
        redCircle.style.left = `${event.clientX - size / 2}px`;
        redCircle.style.top = `${event.clientY - size / 2}px`;
        redCircle.style.zIndex = '0'; // Set a high z-index to ensure it appears in front

        return redCircle;
    }
});

function updateTime() {
    var now = new Date();
    var options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById("clock").textContent = timeString;
}

// Call updateTime function to update clock with local time and timezone
updateTime();

// Update time every second
setInterval(updateTime, 1000);

function resetPage() {
    location.reload(); // Reload the page
}

// Add event listener to the reset button
document.getElementById("resetButton").addEventListener("click", resetPage);




























// document.addEventListener("DOMContentLoaded", function () {
//     const containers = document.querySelectorAll('.container');
//     let size = 0; //starting size
//     const MAX_SIZE = 100; //ending size
//     let intervalId; //timer obj
//     let isMaxSize = false; 
//     const intervalSpeed = 20; //change interval speed here, higher = slower


//     containers.forEach(container => {
//         container.addEventListener('click', event => {
//             const containerId = container.id;
//             const link = document.querySelector(`#${containerId}Link`);

//             if (link) {
//                 if (!isMaxSize) {
//                     event.preventDefault();
//                     link.classList.add("disabled-link");

//                 }
//                 else {
//                     link.classList.remove("disabled-link");
//                 }
//             } else {
//                 console.error(`Link not found for container with ID: ${containerId}`);
//             }
//         });


//         container.addEventListener('mousemove', function (event) {
//             const mouseX = event.clientX;
//             const mouseY = event.clientY;

//             //creates a rect obj around the div
//             const containerRect = container.getBoundingClientRect();

//             // Checks if the mouse is within the boundaries of the rectangle
//             if (mouseX >= containerRect.left && mouseX <= containerRect.right &&
//                 mouseY >= containerRect.top && mouseY <= containerRect.bottom) {
//                 //removes red circles from other divs
//                 containers.forEach(container => {
//                     const existingRedCircle = container.querySelector('.red-circle');
//                     if (existingRedCircle) {
//                         existingRedCircle.remove();
//                     }
//                 });

//                 // calculates the size of the red circle
//                 size += 1;
//                 if (size > MAX_SIZE) {
//                     size = MAX_SIZE;
//                     colour = 'green';
//                 }
//                 else
//                 {
//                     colour='red'
//                 }

//                 const redCircle = createRedCircle(event, size, colour); //creates a red circle, passed args event (where mouse is) and size (calcualted size)

//                 container.appendChild(redCircle);   //adds cicle to container
//             }
//             else {
//                 //here mouse moves outside of any container div so delete circle, reset size
//                 const existingRedCircle = container.querySelector('.red-circle');
//                 if (existingRedCircle) {
//                     existingRedCircle.remove();
//                 }
//                 size = 0; // Reset size when mouse leaves the container
//             }
//         });
//     });

//     //increase the size if not already started
//     intervalId = setInterval(function () {
//         containers.forEach(container => {
//             const redCircle = container.querySelector('.red-circle');
//             if (redCircle) {
//                 size += 1;
//                 if (size > MAX_SIZE) {
//                     size = MAX_SIZE;
//                     redCircle.style.backgroundColor = 'green'; 
//                 }
//                 redCircle.style.width = `${size}px`;
//                 redCircle.style.height = `${size}px`;

//                 if (size == MAX_SIZE) {
//                     const rect = container.getBoundingClientRect();
//                     const topLeftX = rect.left + window.scrollX;
//                     const topLeftY = rect.top + window.scrollY;

//                     redCircle.style.left = topLeftX;
//                     redCircle.style.top = topLeftY;

//                     //  put code here for when the size is max,
//                     //ie changing colour, enabling hyperlink

//                     isMaxSize = true;


//                 }
//                 else {
//                     redCircle.style.left = `${parseFloat(redCircle.style.left) - 0.5}px`; // To maintain the circle in the center
//                     redCircle.style.top = `${parseFloat(redCircle.style.top) - 0.5}px`; // To maintain the circle in the center
//                 }

//             }
//         });
//     }, intervalSpeed);

//     //create red circle element
//     function createRedCircle(event, size, colour) {
//         const redCircle = document.createElement('div');
//         redCircle.classList.add('red-circle');

//         redCircle.style.backgroundColor = colour;

//         redCircle.style.width = `${size}px`;
//         redCircle.style.height = `${size}px`;
//         redCircle.style.borderRadius = '50%';
//         redCircle.style.position = 'fixed';
//         redCircle.style.left = `${event.clientX - size / 2}px`;
//         redCircle.style.top = `${event.clientY - size / 2}px`;
//         redCircle.style.zIndex = '999'; // Set a high z-index to ensure it appears in front

//         return redCircle;
//     }

//     // function activateLink(container) {
//     //     const link = container.querySelector('a'); // Get the anchor tag inside the container
//     //     if (link) {
//     //         link.classList.remove("disabled-link"); // Remove disabled-link class
//     //         link.style.pointerEvents = "auto"; // Enable pointer events to make the link clickable
//     //     } else {
//     //         console.error(`Link not found within container`);
//     //     }
//     // }

// });































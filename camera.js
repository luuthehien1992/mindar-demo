const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('captureButton');
const ctx = canvas.getContext('2d');
// const videoCtx = video.getContext('2d');

// Request access to the camera
navigator.mediaDevices.getUserMedia({
    // video: true,
    video: {
        width: {ideal: 1920}, // Ideal width in pixels
        height: {ideal: 1080}, // Ideal height in pixels
        // facingMode: "environment", // Use the back camera if available
    }
})
    .then((stream) => {
        video.srcObject = stream; // Stream the camera to the video element
        video.addEventListener('loadedmetadata', () => {
            const width = video.videoWidth;
            const height = video.videoHeight;

            // Display dimensions
            console.log(`Camera Dimensions: ${width} x ${height}`);
            //
            // let scaleFactor = 0.3;
            // Draw the current frame from the video to the canvas
            // ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            // videoCtx.drawImage(img, 0, height - height * scaleFactor, width, width * scaleFactor); // Or at whatever offset you like
        });
    })
    .catch((err) => {
        console.error('Error accessing camera:', err);
    });

// let canvas = document.getElementById('canvas-filter');
let img = new Image();
// let ctx = canvas.getContext('2d');

// img.onload = function () {
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Or at whatever offset you like
// };

img.src = 'ben_thanh_filter.png';
// Capture the image from the video stream
captureButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    console.log(video.videoWidth, video.videoHeight);
    // canvas.width = 1080;
    // canvas.height = 1920;
    let scaleFactor = 0.3;

    // Draw the current frame from the video to the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, canvas.height - canvas.height * scaleFactor, canvas.width, video.videoHeight * scaleFactor); // Or at whatever offset you like
});
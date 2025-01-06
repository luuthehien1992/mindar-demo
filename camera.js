const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('captureButton');
const ctx = canvas.getContext('2d');

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
        });
    })
    .catch((err) => {
        console.error('Error accessing camera:', err);
    });

// Capture the image from the video stream
captureButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // canvas.width = 1080;
    // canvas.height = 1920;

    // Draw the current frame from the video to the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
});
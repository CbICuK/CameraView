async function startCamera() {
    const videoElement = document.getElementById('camera');
    try {
        console.log('Requesting camera access...');
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
        console.log('Camera access granted');
    } catch (error) {
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDismissedError') {
            alert('Access to the camera is required for this extension. Please allow access in the browser settings.');
        } else {
            console.error('Error accessing camera:', error);
            alert(`Could not access the camera: ${error.message}`);
        }
    }
}

startCamera();
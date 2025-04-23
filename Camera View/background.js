chrome.runtime.onInstalled.addListener(() => {
    console.log('Background script initialized');
});

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        console.log('Camera stream started');
    } catch (error) {
        console.error('Error accessing camera:', error.message);
    }
}

startCamera();
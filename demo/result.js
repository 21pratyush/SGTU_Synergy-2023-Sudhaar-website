document.addEventListener("DOMContentLoaded", function () {
    const syncInput = document.getElementById("sync-input");

    // Listen for changes in the input field and store the value in localStorage
    syncInput.addEventListener("input", function () {
        localStorage.setItem("syncedValue", syncInput.value);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const syncedContent = document.getElementById("synced-content");

    // Get the synced value from localStorage and display it
    const syncedValue = localStorage.getItem("syncedValue");
    if (syncedValue !== null) {
        syncedContent.textContent = syncedValue;
    }
});

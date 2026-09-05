document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation toggle
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Interactive prompt execution simulation
    const runBtn = document.getElementById("runBtn");
    const promptInput = document.getElementById("promptInput");
    const outputWindow = document.getElementById("outputWindow");

    if (runBtn) {
        runBtn.addEventListener("click", () => {
            const query = promptInput.value.trim();

            if (!query) {
                outputWindow.innerHTML = '<span style="color: #f85149;">Please enter a prompt first.</span>';
                return;
            }

            outputWindow.innerHTML = '<em>Processing prompt with FoundryCast Engine...</em>';

            setTimeout(() => {
                outputWindow.innerHTML = `<strong style="color: #58a6ff;">[FoundryCast Response]:</strong> Execution successful for query: "${query}". System status: Nominal. Processing time: 24ms.`;
            }, 1200);
        });
    }
});
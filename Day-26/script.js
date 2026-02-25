function connectDatabase() {
    const status = document.getElementById("status");

    status.innerText = "Status: Connecting...";

    // Simulate connection delay
    setTimeout(() => {
        console.log("Connecting to mongodb://localhost:27017...");
        console.log("Database connected successfully");
        
        status.innerText = "Status: Database connected successfully";
        status.style.color = "green";
    }, 2000);
}
// Function to simulate fetching data with a delay
function fetchData(callback) {
    setTimeout(() => {
        console.log("Fetching data...");
        callback("Data received"); // Calls the callback function with "Data received" after 1 second
    }, 1000);
}

// Function to simulate processing data with a delay
function processData(data, callback) {
    setTimeout(() => {
        console.log("Processing " + data);
        callback("Processed Data"); // Calls the callback function with "Processed Data" after 1 second
    }, 1000);
}

// Function to simulate saving data with a delay
function saveData(processedData, callback) {
    setTimeout(() => {
        console.log("Saving " + processedData);
        callback("Saved Data"); // Calls the callback function with "Saved Data" after 1 second
    }, 1000);
}

// Executing the functions using callbacks → This leads to Callback Hell (Pyramid of Doom)
fetchData((data) => { // Fetch data first
    processData(data, (processedData) => { // Once fetched, process the data
        saveData(processedData, (savedData) => { // Once processed, save the data
            console.log("All operations completed: " + savedData); // Final message after all operations
        });
    });
});

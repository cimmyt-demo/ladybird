// src/core/logic.js

// Example function to process a list of items
function processItems(items) {
    if (!items || items.length === 0) {
        console.log("No items to process.");
        return;
    }

    let processedCount = 0;

    // Line 35: loop to process each item (this is what you will refactor)
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // Example processing logic
        if (item.active) {
            console.log(`Processing item: ${item.name}`);
            processedCount++;
        }
    }

    // Some core logic after processing
    if (processedCount === 0) {
        console.log("No active items were processed.");
    } else {
        console.log(`Processed ${processedCount} active items.`);
    }

    return processedCount;
}

// Example export for module usage
module.exports = {
    processItems
};

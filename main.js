class HashMap {
    constructor(number = 10) {
        // Default value of 10 if no number is provided
        this.number = number;
        this.storage = {}; // Store key-value pairs here
    }

    // Hash function
    hash(key) {
        let result = 0;
        const prime = 31;
        for (let i = 0; i < key.length; i++) {
            result = (prime * result + key.charCodeAt(i)) % this.number;
        }
        return result;
    }

    // Set method: set a key-value pair
    set(key, value) {
        const hashedKey = this.hash(key);
        this.storage[hashedKey] = value;
        return this;
    }

    // Get method: retrieve a value by key
    get(key) {
        const hashedKey = this.hash(key);
        return this.storage.hasOwnProperty(hashedKey)
            ? this.storage[hashedKey]
            : null;
    }

    // Check if key exists
    has(key) {
        const hashedKey = this.hash(key);
        return this.storage.hasOwnProperty(hashedKey);
    }

    // Remove a key-value pair
    remove(key) {
        const hashedKey = this.hash(key);
        if (this.storage.hasOwnProperty(hashedKey)) {
            delete this.storage[hashedKey];
            return true;
        } else {
            return false;
        }
    }

    // Get the number of items stored
    length() {
        return Object.keys(this.storage).length;
    }

    // Clear all key-value pairs
    clear() {
        this.storage = {};
    }

    // Return all keys in the HashMap
    keys() {
        return Object.keys(this.storage);
    }

    // Return all values in the HashMap
    values() {
        return Object.values(this.storage);
    }

    // Return all key-value pairs as arrays
    entries() {
        let result = [];
        for (let key in this.storage) {
            if (this.storage.hasOwnProperty(key)) {
                result.push([key, this.storage[key]]);
            }
        }
        return result;
    }
}

// Example usage:
const hashMap = new HashMap();

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");

console.log(hashMap.get("apple")); // Output: "red"
console.log(hashMap.keys()); // Output: Array of keys
console.log(hashMap.values()); // Output: Array of values
console.log(hashMap.entries()); // Output: Array of key-value pairs
console.log(hashMap.length()); // Output: Number of stored key-value pairs

hashMap.set("orange", "orange");
console.log(hashMap.get("orange"));

hashMap.set("moon", "silver");
console.log(hashMap.keys("moon"));

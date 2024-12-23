export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
    }

    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = (31 * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }
}

export class HashMap {
    data = new Array(7);
    capacity = 0;
    loadFactor = 0.75;

    hash(key, tableSize) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = (31 * hashCode + key.charCodeAt(i)) % tableSize;
        }

        return hashCode;
    }

    resize() {
        const newData = new Array(this.data.length * 2 - 1);
        this.data.forEach((item) => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = this.hash(key, newData.length);
                    if (newData[idx]) {
                        newData[idx].push([key, value]);
                    } else {
                        newData[idx] = [[key, value]];
                    }
                });
            }
        });
        this.data = newData;
    }

    set(key, value) {
        this.capacity++;
        const loadFactor = 0.75;
        if (this.capacity / this.data.length > loadFactor) {
            this.resize();
        }

        const idx = this.hash(key, this.data.length);
        if (this.data[idx]) {
            this.data[idx].push([key, value]);
        } else {
            this.data[idx] = [[key, value]];
        }
    }

    get(key) {
        const idx = this.hash(key, this.data.length);
        if (!this.data[idx]) {
            return null;
        }

        return this.data[idx].find((x) => x[0] === key)[1];
    }

    has(key) {
        const idx = this.hash(key, this.data.length);
        if (this.data[idx]) {
            if (this.data[idx].find((x) => x[0] === key)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    remove(key) {
        const idx = this.hash(key, this.data.length);
        const element = this.data[idx].find((x) => x[0] === key);
        const elementIdx = this.data[idx].indexOf(element);
        if (this.data[idx]) {
            if (element) {
                this.data[idx].splice(elementIdx, 1);
                this.capacity--;
                return true;
            }
        } else {
            return false;
        }
    }

    length() {
        return this.data.length;
    }

    clear() {
        this.data.splice(0, this.data.length);
    }

    keys() {
        const result = [];
        this.data.forEach((item) => {
            item.forEach(([key, value]) => {
                result.push(key);
            });
        });

        return result;
    }

    values() {
        const result = [];
        this.data.forEach((item) => {
            item.forEach(([key, value]) => {
                result.push(value);
            });
        });

        return result;
    }

    entries() {
        const result = [];
        this.data.forEach((item) => {
            item.forEach(([key, value]) => {
                result.push([key, value]);
            });
        });

        return result;
    }
}

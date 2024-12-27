export class HashMap {
    data = new Array(3);
    capacity = 0;

    hash(key, tableSize) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = (31 * hashCode + key.charCodeAt(i)) % tableSize;
        }

        return hashCode;
    }

    resize() {
        const newData = new Array(this.data.length * 2);
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
        this.table = newData;
    }

    set(key, value) {
        this.capacity++;
        const loadFactor = this.capacity / this.data.length;
        if (loadFactor > 0.75) {
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
}

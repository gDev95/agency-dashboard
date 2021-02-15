export default class FormValidator {
    public errors = new Set<string>();

    public validate(key: string, value: any): void {
        if (Array.isArray(value)) {
            this.validateArray(key, value);
        } else if (typeof value === "string") {
            this.validateString(key, value);
        } else if (typeof value === "object") {
            this.validateObject(key, value);
        }
    }

    private validateString(key: string, value: string): void {
        const withoutWhitespace = value.trim();
        if (withoutWhitespace.length > 0) {
            this.errors.has(key) && this.errors.delete(key);
        } else {
            this.errors.add(key);
        }
    }

    private validateArray(key: string, value: any[]) {
        if (value.length > 0) {
            value.forEach((item) => {
                this.validate(key, item);
            });
        } else {
            this.errors.add(key);
        }
    }

    private validateObject(key: string, value: any) {
        Object.entries(value).forEach((entry) => this.validate(entry[0], entry[1]));
    }
}

export class Course {
    name: string;
    description: string;
    logo: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
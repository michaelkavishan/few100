import { IProvideInformation } from './interfaces';
import { Person } from './person';

export class Retiree extends Person implements IProvideInformation {
    constructor(private pension: number) {
        super();
    }
    get currentPension() {
        return this.pension;
    }
    getInfo() {
        return `${this.firstName} ${this.lastName} is a retiree.`;
    }
}
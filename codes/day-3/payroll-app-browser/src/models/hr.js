import { Employee } from "./employee";

export class Hr extends Employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra)
        this.gratuitySalary = gratuity;
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.gratuitySalary
    }
}
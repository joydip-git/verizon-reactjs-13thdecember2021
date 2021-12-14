class Developer extends Employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.incentiveSalary = incentive;
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalSalary += this.incentiveSalary
    }
}
export default function createIteratorObject(report) {
  function* employeeGenerator() {
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return employeeGenerator();
}

export default function* createIteratorObject(report) {
  const allDepartments = Object.values(report.allEmployees);

  for (const employees of allDepartments) {
    yield* employees;
  }
}

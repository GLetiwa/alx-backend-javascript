function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeMatch = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeMatch ? gradeMatch.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;

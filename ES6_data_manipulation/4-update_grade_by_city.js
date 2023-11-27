/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter(({ location }) => location === city).map((student) => {
    const find = newGrades.find((grade) => grade.studentId === student.id);
    student.grade = 'N/A';
    if (find) {
      student.grade = find.grade;
    }
    return student;
  });
}

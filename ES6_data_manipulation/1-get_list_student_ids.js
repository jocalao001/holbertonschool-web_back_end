export default function getListStudentIds(element) {
  if (element instanceof Array) {
    const ids = element.map((ele) => ele.id);
    return ids;
  }
  return [];
}

/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number')
    }
    this._length = length;
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an object')
    }
    this._students = students;
  }
  // get method for name
  get name() {
    return this._name;
  }

  // set method for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value
  }

  // get method for length
  get length() {
    return this._length;
  }

  // set method for length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number')
    }
    this._length = value;
  }

  // get method for students
  get students() {
    return this._students;
  }

  // set method for students
  set students(value) {
    if (typeof value !== 'object') {
      throw new TypeError('Students must be an object')
    }
    this._students = value;
  }
}

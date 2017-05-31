import { ArrayEx } from '../lib/array-extension';

let testList = ['grade', 'class', 'age'];

let showResult = (record) => {
  let log = '';
  testList.forEach((propNm) => {
    log += (propNm + ':' + record[propNm] + ' ');
  });
  console.log(log);
};

// 测试数据
let students =
  [{
    grade: '2年级',
    class: '3班',
    name: '学生D',
    age: 7,
    math: 94,
    english: 87
  }, {
    grade: '1年级',
    class: '2班',
    name: '学生C',
    age: 7,
    math: 97,
    english: 87
  }, {
    grade: '2年级',
    class: '1班',
    name: '学生B',
    age: 8,
    math: 77,
    english: 87
  }, {
    grade: '1年级',
    class: '1班',
    name: '学生E',
    age: 8,
    math: 97,
    english: 91
  }, {
    grade: '1年级',
    class: '7班',
    name: '学生A',
    age: 7,
    math: 96,
    english: 99
  }, {
    grade: '4年级',
    class: '1班',
    name: '学生F',
    age: 10,
    math: 97,
    english: 87
  }, {
    grade: '3年级',
    class: '1班',
    name: '学生H',
    age: 9,
    math: 97,
    english: 90
  }, {
    grade: '2年级',
    class: '1班',
    name: '学生G',
    age: 9,
    math: 97,
    english: 87
  }, {
    grade: '5年级',
    class: '6班',
    name: '学生Z',
    age: 12,
    math: 97,
    english: 100
  }, {
    grade: '6年级',
    class: '1班',
    name: '学生M',
    age: 12,
    math: 97,
    english: 78
  }, {
    grade: '3年级',
    class: '1班',
    name: '学生S',
    age: 9,
    math: 100,
    english: 87
  }, {
    grade: '1年级',
    class: '1班',
    name: '学生E',
    age: 7,
    math: 97,
    english: 91
  }, {
    grade: '1年级',
    class: '1班',
    name: '学生Z',
    age: 6,
    math: 97,
    english: 91
  }];

let studentsEx = new ArrayEx(...students);

console.log('年级升序，班级升序，年龄升序');
studentsEx = studentsEx.orderBy(x => x.grade).thenBy(x => x.class).thenBy(x => x.age).toArrayEx();

studentsEx.forEach(showResult);

console.log(new Array(21).join('-'));

console.log('年级升序，班级升序，年龄倒序');

studentsEx = new ArrayEx(...students);

studentsEx = studentsEx.thenBy(x => x.grade).thenBy(x => x.class).thenByDescending(x => x.age).toArrayEx();

studentsEx.forEach(showResult);

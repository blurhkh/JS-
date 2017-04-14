/**
 * Created by HKH on 2017/2/25.
 */

// 测试数据
var students =
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

students.orderBy('grade').thenBy('class').thenBy('age');

var testList = ['grade', 'class', 'age'];

students.forEach(function (record) {
    var log = '';
    testList.forEach(function (propNm) {
        log += (propNm + ':' + record[propNm] + ' ');
    });
    console.log(log);
});

console.log('年龄倒序排列');

students.orderBy('grade').thenBy('class').thenByDescending('age');

students.forEach(function (record) {
    var log = '';
    testList.forEach(function (propNm) {
        log += (propNm + ':' + record[propNm] + ' ');
    });
    console.log(log);
});
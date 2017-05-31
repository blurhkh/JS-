/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let bubbleSort = (arr, comparer) => {
    let i = 0,
        len = arr.length,
        j;
    for (; i < len - 1; i++) {
        for (j = 0; j < len - i - 1; j++) {
            if (comparer(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
},
    isValidNumber = num => typeof num === 'number' && !isNaN(num) && isFinite(num),
    compareString = (val1, val2) => {
    // 对null和undefined做同等处理
    if (val1 == val2) return 0;
    // 如果其中有一个是null或undefined，则这一个排在后面
    if ([val1, val2].some(val => val == null)) return val1 && -1 || 1;
    // 如果其中有一个是数字，则全按字符串处理
    return ('' + val1).localeCompare('' + val2);
},
    compare = (val1, val2) => {
    return isValidNumber(val1) && isValidNumber(val2) ? val1 - val2 : compareString(val1, val2);
},
    getComparer = (keySelector, desc) => {
    let ks = keySelector;
    return !desc ? (o1, o2) => compare(ks(o1), ks(o2)) : (o1, o2) => compare(ks(o2), ks(o1));
},
    __preComparers__ = Symbol('preComparers');

class ArrayEx extends Array {
    constructor() {
        super(...arguments);
        this[__preComparers__] = this[__preComparers__] || [];
    }

    setComparer(keySelector, desc) {
        let comparer = getComparer(keySelector, desc);
        let preComparers = [...this[__preComparers__]];
        this[__preComparers__].push(!preComparers.length ? comparer : (o1, o2) => {
            return preComparers.every(preComparer => preComparer(o1, o2) == 0) ? comparer(o1, o2) : 0;
        });
    }

    orderBy(keySelector, desc) {
        let res = new ArrayEx(...this);
        this.setComparer(keySelector, desc);
        bubbleSort(res, this[__preComparers__][this[__preComparers__].length - 1]);
        res[__preComparers__] = this[__preComparers__];
        return res;
    }

    orderByDescending(keySelector) {
        return this.orderBy(keySelector, true);
    }

    thenBy(keySelector) {
        return this.orderBy(keySelector);
    }

    thenByDescending(keySelector) {
        return this.orderByDescending(keySelector);
    }

    toArrayEx() {
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ArrayEx;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_array_extenstion__ = __webpack_require__(0);


let testList = ['grade', 'class', 'age'];

let showResult = record => {
  let log = '';
  testList.forEach(propNm => {
    log += propNm + ':' + record[propNm] + ' ';
  });
  console.log(log);
};

// 测试数据
let students = [{
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

let studentsEx = new __WEBPACK_IMPORTED_MODULE_0__lib_array_extenstion__["a" /* ArrayEx */](...students);

console.log('年级升序，班级升序，年龄升序');
studentsEx = studentsEx.orderBy(x => x.grade).thenBy(x => x.class).thenBy(x => x.age).toArrayEx();

studentsEx.forEach(showResult);

console.log(new Array(21).join('-'));

console.log('年级升序，班级升序，年龄倒序');

studentsEx = new __WEBPACK_IMPORTED_MODULE_0__lib_array_extenstion__["a" /* ArrayEx */](...students);

studentsEx = studentsEx.thenBy(x => x.grade).thenBy(x => x.class).thenByDescending(x => x.age).toArrayEx();

studentsEx.forEach(showResult);

/***/ })
/******/ ]);
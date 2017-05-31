let bubbleSort = (arr, comparer) => {
    let i = 0, len = arr.length, j;
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
        if ([val1, val2].some(val => val == null)) return (val1 && -1) || 1;
        // 如果其中有一个是数字，则全按字符串处理
        return ('' + val1).localeCompare('' + val2);
    },
    compare = (val1, val2) => {
        return isValidNumber(val1)
            && isValidNumber(val2) ? val1 - val2
            : compareString(val1, val2);
    },
    getComparer = (keySelector, desc) => {
        let ks = keySelector;
        return !desc ? (o1, o2) => compare(ks(o1), ks(o2)) : (o1, o2) => compare(ks(o2), ks(o1));
    },
    __preComparers__ = Symbol('preComparers');

export class ArrayEx extends Array {
    constructor() {
        super(...arguments);
        this[__preComparers__] = this[__preComparers__] || [];
    }

    setComparer(keySelector, desc) {
        let comparer = getComparer(keySelector, desc);
        let preComparers = [...this[__preComparers__]];
        this[__preComparers__].push(!preComparers.length ?
            comparer : (o1, o2) => {
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
        return this.orderBy(keySelector, true)
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
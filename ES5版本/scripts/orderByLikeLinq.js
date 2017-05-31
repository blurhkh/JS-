/**
 * Created by HKH on 2017/2/25.
 */
(function () {
    // 1是升序,-1是降序
    var option = 1;
    var bubbleSort = function (arr, comparator) {
        var i = 0, len = arr.length, j, temp;
        for (; i < len - 1; i++) {
            for (j = 0; j < len - i - 1; j++) {
                if (comparator(arr[j], arr[j + 1])) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    };

    var stringComparator = function (val1, val2) {
        return (option * val1.localeCompare(val2)) > 0;
    };

    var numberComparator = function (val1, val2) {
        return (option * (val1 - val2)) > 0;
    };

    // 根据类型获取比较器
    var getComparator = function (keySelector) {
        // 判断属性的类型
        switch (typeof keySelector) {
            case 'string':
                return stringComparator;
            case  'number':
                return numberComparator;
        }
    };

    // 根据键按升序对序列的元素排序
    Array.prototype.orderBy = function (curKeySelector) {
        var comparator = getComparator(this[0][curKeySelector]);
        var arr;
        // 记录这次排序用的键
        this.preKeySelectors = [];
        this.preKeySelectors.push(curKeySelector);
        arr = bubbleSort(this, function (record1, record2) {
            return comparator(record1[curKeySelector], record2[curKeySelector]);
        });
        return arr;
    };

    // 根据某个键按升序对序列中的元素执行后续排序
    Array.prototype.thenBy = function (curKeySelector) {
        var preKeySelectors = this.preKeySelectors;
        var comparator = getComparator(this[0][curKeySelector]);
        var isSameGroup;
        var arr;

        arr = bubbleSort(this, function (record1, record2) {
            // 判断是否属于同一组
            isSameGroup = preKeySelectors.every(function (preKeySelector) {
                return record1[preKeySelector] == record2[preKeySelector];
            });
            if (isSameGroup) {
                return comparator(record1[curKeySelector], record2[curKeySelector]);
            } else {
                return false;
            }
        });

        this.preKeySelectors.push(curKeySelector);
        return arr;
    };

    Array.prototype.orderByDescending = function (curKeySelector) {
        option = -1;
        return this.orderBy(curKeySelector);
        option = 1;
    };

    Array.prototype.thenByDescending = function (curKeySelector) {
        option = -1;
        return this.thenBy(curKeySelector);
        option = 1;
    };
})();
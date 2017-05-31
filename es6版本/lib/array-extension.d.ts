type Func<TElement, TKey> = (element: TElement) => TKey;

export declare class ArrayEx<TElement> extends Array<TElement> {
    constructor(...arr: TElement[]);
    /**
     * 根据键按升序对序列的元素排序。
     * @param keySelector
     */
    orderBy<TKey>(keySelector: Func<TElement, TKey>): IOrderedArrayEx<TElement>;
    /**
     * 根据键按降序对序列的元素排序。
     * @param keySelector 
     */
    orderByDescending<TKey>(keySelector: Func<TElement, TKey>): IOrderedArrayEx<TElement>;

    /**
     * 返回ArrayEx类型。
     */
    toArrayEx(): ArrayEx<TElement>;
}

interface IOrderedArrayEx<TElement> {
    /**
     * 根据某个键按升序对序列中的元素执行后续排序。
     * @param keySelector 用于从元素中提取键的函数
     */
    thenBy<TKey>(keySelector: Func<TElement, TKey>): IOrderedArrayEx<TElement>;
    /**
     * 根据某个键按降序对序列中的元素执行后续排序
     * @param keySelector
     */
    thenByDescending<TKey>(keySelector: Func<TElement, TKey>): IOrderedArrayEx<TElement>;

    /**
     * 返回ArrayEx类型
     */
    toArrayEx(): ArrayEx<TElement>;
}


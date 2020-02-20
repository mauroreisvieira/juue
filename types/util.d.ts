/**
 * Copy all properties from `props` onto `obj`.
 * @param {object} obj Object onto which properties should be copied.
 * @param {object} props Object from which to copy properties.
 * @returns {object}
 * @private
 */
export declare function extend(obj: any, props: any): any;
/** Invoke or update a ref, depending on whether it is a function or object ref.
 *  @param {object|function} [ref=null]
 *  @param {any} [value]
 */
export declare function applyRef(ref: any, value: any): void;

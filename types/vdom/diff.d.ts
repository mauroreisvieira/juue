/**
 * Queue of components that have been mounted and are awaiting componentDidMount
 * @type {Array<import('../component').Component>}
 */
export declare const mounts: any[];
/** Diff recursion count, used to track the end of the diff cycle. */
export declare let diffLevel: number;
/** Invoke queued componentDidMount lifecycle methods */
export declare function flushMounts(): void;
/**
 * Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 * @param {import('../dom').PreactElement} dom A DOM node to mutate into the shape of a `vnode`
 * @param {import('../vnode').VNode} vnode A VNode (with descendants forming a tree) representing
 *  the desired DOM structure
 * @param {object} context The current context
 * @param {boolean} mountAll Whether or not to immediately mount all components
 * @param {Element} parent ?
 * @param {boolean} componentRoot ?
 * @returns {import('../dom').PreactElement} The created/mutated element
 * @private
 */
export declare function diff(dom: any, vnode: any, context: any, mountAll: any, parent: any, componentRoot: any): any;
/**
 * Recursively recycle (or just unmount) a node and its descendants.
 * @param {import('../dom').PreactElement} node DOM node to start
 *  unmount/removal from
 * @param {boolean} [unmountOnly=false] If `true`, only triggers unmount
 *  lifecycle, skips removal
 */
export declare function recollectNodeTree(node: any, unmountOnly: any): void;
/**
 * Recollect/unmount all children.
 *    - we use .lastChild here because it causes less reflow than .firstChild
 *    - it's also cheaper than accessing the .childNodes Live NodeList
 */
export declare function removeChildren(node: any): void;

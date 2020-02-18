import options from './options';

export function render(vnode: any, parentDom?: HTMLElement) {
    if (options._root) options._root(vnode, parentDom);
    if (vnode.split) return document.createTextNode(vnode);
    const node = document.createElement(vnode.nodeName);

    let a = vnode.attributes || {};
    Object.keys(a).forEach(k => node.setAttribute(k, a[k]));
    (vnode.children || []).forEach((c: any) => node.appendChild(render(c)));

    return parentDom ? parentDom.appendChild(node) : node;
}

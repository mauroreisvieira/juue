export function render(vnode: any, parentDom?: HTMLElement) {
    console.log(vnode);
    console.log(parentDom);
    if (vnode.split) return document.createTextNode(vnode);
    const node = document.createElement(vnode.nodeName);

    let a = vnode.attributes || {};
    Object.keys(a).forEach(k => node.setAttribute(k, a[k]));
    (vnode.children || []).forEach((c: any) => node.appendChild(render(c)));

    return parentDom ? parentDom.appendChild(node) : node;
}

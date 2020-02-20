import { setAccessor } from './dom';

export function render(vnode: any, parentDom?: HTMLElement) {


    if (vnode.ref) {
        console.log(vnode.ref.node);
    }

    if (typeof vnode.type === 'function') {
        const aux = new vnode.type();
        vnode = aux.render();
    }
    const node = document.createElement(vnode.type);
    const { children, ...reset } = vnode.props;
    const attributes = reset || {};

    Object.keys(attributes).forEach((name: string) => {
        setAccessor(node, name, attributes[name]);
    });

    const childrens = children || [];
    childrens.forEach((child: any) => {
        if (typeof child === 'string') {
            return node.appendChild(document.createTextNode(child));
        }
        return node.appendChild(render(child));
    });

    return parentDom ? parentDom.appendChild(node) : node;
}

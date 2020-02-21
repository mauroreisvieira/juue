import { diffAttributes, diffContent } from './diff';

export function render(vnode: any, parentDom?: HTMLElement) {
    if (vnode.ref) {
        console.log(vnode.ref.node);
    }

    if (typeof vnode.type === 'function') {
        const element = new vnode.type();
        vnode = element.render();
    }

    const node = document.createElement(vnode.type);
    const { children, ...reset } = vnode.props;
    const attributes = reset || {};

    diffAttributes(node, name, attributes);

    const childrens = children || [];
    childrens.forEach((child: any) => {
        if (typeof child === 'string') {
            return node.appendChild(diffContent(node, child));
        }
        return node.appendChild(render(child));
    });

    return parentDom ? parentDom.appendChild(node) : node;
}

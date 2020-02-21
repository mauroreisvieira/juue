import { clone } from './util';
import options from './options';

export function h(type: any, props: any, ...args: any) {
    const normalizedProps: any = {};

    for (const i in props) {
        if (i !== 'key' && i !== 'ref') normalizedProps[i] = props[i];
    }

    if (args.length) normalizedProps.children = [].concat(...args);

    if (typeof type === 'function' && type.defaultProps != null) {
        for (let i in type.defaultProps) {
            if (normalizedProps[i] === undefined) {
                normalizedProps[i] = type.defaultProps[i];
            }
        }
    }

    return createVNode(
        type,
        normalizedProps,
        props && props.key,
        props && props.ref
    );
}

export function createRef() {
    return {};
}

export function Fragment(props: any) {
    return props.children;
}

export function getNodeProps(vnode: any) {
  let props: any = clone(vnode.attributes),
    c = vnode.children;
  if (c) props.children = c;

  let defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps) {
    for (let i in defaultProps) {
        props[i] = defaultProps[i];
    }
  }

  return props;
}

export function createVNode(type: any, props: any, key: any, ref: any) {
    const vnode = {
        type,
        props,
        key,
        ref,
    };

    if (options.vnode) options.vnode(vnode);

    return vnode;
}

export function createTextVNode(vnode: any, text: string) {
    return vnode.appendChild(document.createTextNode(text));
}

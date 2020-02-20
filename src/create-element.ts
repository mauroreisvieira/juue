import options from './options';

export function createElement(type: any, props: any, ...args: any) {
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

    return virtualNode(
        type,
        normalizedProps,
        props && props.key,
        props && props.ref
    );
}

export function createRef() {
    return {};
}

export function virtualNode(type: any, props: any, key: any, ref: any) {
    const vnode = {
        type,
        props,
        key,
        ref,
    };

    if (options.vnode) options.vnode(vnode);

    return vnode;
}

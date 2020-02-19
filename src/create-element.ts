import options from './options';

export function createElement(type: any, props: any, children: any) {
    const normalizedProps: any = {};

    for (const i in props) {
        if (i !== 'key' && i !== 'ref') normalizedProps[i] = props[i];
    }

    if (arguments.length > 3) {
        children = [children];
        for (let i = 3; i < arguments.length; i++) {
            children.push(arguments[i]);
        }
    }
    if (children != null) {
        normalizedProps.children = children;
    }

    if (typeof type === 'function' && type.defaultProps != null) {
        for (let i in type.defaultProps) {
            if (normalizedProps[i] === undefined) {
                normalizedProps[i] = type.defaultProps[i];
            }
        }
    }

    return createNode(
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

export function createNode(type: any, props: any, key: any, ref: any) {
    const vnode = {
        type,
        props,
        key,
        ref,
    };

    if (options.vnode) options.vnode(vnode);

    return vnode;
}

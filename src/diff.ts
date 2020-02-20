import { setAccessor } from './dom';

export function diffAttributes(dom: any, attrs: any, old: any) {
    let name;
    // remove attributes no longer present on the vnode by setting them to undefined
    for (name in old) {
        if (!(attrs && attrs[name] != null) && old[name] != null) {
            setAccessor(dom, name, old[name]);
        }
    }

    // add new & update changed attributes
    for (name in attrs) {
        if (
            name !== 'children' &&
            name !== 'innerHTML' &&
            (!(name in old) ||
                attrs[name] !==
                    (name === 'value' || name === 'checked'
                        ? dom[name]
                        : old[name]))
        ) {
            setAccessor(dom, name, old[name]);
        }
    }
}

export function diffContent(dom: any, vnode: string) {
    // empty values (null, undefined, booleans) render as empty Text nodes
    if (vnode == null || typeof vnode === 'boolean') vnode = '';

    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return dom.appendChild(document.createTextNode(vnode));
    }
}

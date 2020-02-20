import { applyRef } from '../util';
import options from '../options';

export function removeNode(node: any) {
    let parentNode = node.parentNode;
    if (parentNode) parentNode.removeChild(node);
}

export function setAccessor(node: any, name: any, value: any) {
    if (name === 'className') name = 'class';

    if (name === 'key') {
        // ignore
    } else if (name === 'ref') {
        applyRef(value, node);
    } else if (name === 'class') {
        node.className = value || '';
    } else if (name === 'style') {
        if (!value || typeof value === 'string') {
            node.style.cssText = value || '';
        }
        if (value && typeof value === 'object') {
            for (let i in value) {
                node.style[i] =
                    typeof value[i] === 'number' ? value[i] + 'px' : value[i];
            }
        }
    } else if (name === 'dangerouslySetInnerHTML') {
        if (value) node.innerHTML = value.__html || '';
    } else if (name[0] == 'o' && name[1] == 'n') {
        let useCapture = name !== (name = name.replace(/Capture$/, ''));
        name = name.toLowerCase().substring(2);
        if (value) {
            node.addEventListener(name, eventProxy, useCapture);
        } else {
            node.removeEventListener(name, eventProxy, useCapture);
        }
        (node._listeners || (node._listeners = {}))[name] = value;
    } else if (name !== 'list' && name !== 'type' && name in node) {
        try {
            node[name] = value == null ? '' : value;
        } catch (e) {}
        if ((value == null || value === false) && name != 'spellcheck')
            node.removeAttribute(name);
    } else {
        let ns = name !== (name = name.replace(/^xlink:?/, ''));
        if (value == null || value === false) {
            if (ns)
                node.removeAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    name.toLowerCase()
                );
            else node.removeAttribute(name);
        } else if (typeof value !== 'function') {
            if (ns)
                node.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    name.toLowerCase(),
                    value
                );
            else node.setAttribute(name, value);
        }
    }
}

function eventProxy(e: any) {
  return this._listeners[e.type](options.event && options.event(e) || e);
}

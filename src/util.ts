export function extend(obj: any, props: any) {
    for (let i in props) obj[i] = props[i];
    return obj;
}

export function clone(obj: any) {
    return Object.assign({}, obj);
}

export function applyRef(ref: any, value: any) {
    if (ref != null) {
        if (typeof ref == 'function') ref(value);
        else ref.current = value;
    }
}

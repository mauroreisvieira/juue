import { Fragment } from './create-element';

export function Component(props: any, context: any) {
    this.props = props;
    this.context = context;
}

Component.prototype.render = Fragment;

import { createElement as Vivaldi } from './create-element';

Vivaldi.prototype.createElement = Vivaldi;

export { render } from './render';
export {
    Fragment,
    createRef,
} from './create-element';
export default Vivaldi;
export { Component } from './component';

import { FunctionBrick, registerBrick, Context } from 'olympe';
import {getLogger} from '@olympeio/core';

export default class SetInContext extends FunctionBrick {

    /**
     * Executed every time an input (key, value) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {!Context} context
     * @param {string} key
     * @param {*} value
     * @param {!Array} outputs
     */
    onUpdate(context, [key, value], outputs) {
        if(typeof key !== 'string') {
            getLogger('SetInContext').error(`Provided key is a string`);
            return;
        }

        const parent = context.getParent();
        if(parent !== null) {
            parent.set(key, value);
        } else {
            getLogger('SetInContext').error(`No parent for current context. Should not happen.`);
        }
    }
}

registerBrick('017d943012b0ee69e7eb', SetInContext);

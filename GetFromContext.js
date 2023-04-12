import { FunctionBrick, registerBrick, Context } from 'olympe';
import {getLogger} from '@olympeio/core';

export default class GetFromContext extends FunctionBrick {

    /**
     * Executed every time an input (key) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {string} key
     * @param {function(*)} setValue
     */
    onUpdate(context, [key], [setValue]) {
        if(typeof key !== 'string') {
            getLogger('GetFromContext').error(`Provided key is a string`);
            return;
        }
        context.observe(key, true, true).subscribe(setValue);
    }
}

registerBrick('017d942e6e387481b3eb', GetFromContext);

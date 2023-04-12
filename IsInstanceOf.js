import { Brick, registerBrick } from 'olympe';

export default class IsInstanceOf extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} object
     * @param {*} type
     * @param {function(boolean)} setResult
     */
    update($, [object, type], [setResult]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        //TODO make it work with inheritance
        setResult(object.getModelTag() === type.getTag());
    }
}

registerBrick('017efd85f4460e1294f5', IsInstanceOf);

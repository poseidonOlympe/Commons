import { FunctionBrick, registerBrick } from 'olympe';
import { merge } from "rxjs";
import { map } from "rxjs/operators";

export default class DataMultiplexer extends FunctionBrick {

    /**
     * @override
     */
    setupExecution($) {
        return merge(...this.getInputs().map((i) => $.observe(i)))
            // Wrap any data into an array to handle the case when data is an array and to propagate `null`.
            .pipe(map((data) => [data]));
    }

    /**
     * @protected
     * @param {!Context} context
     * @param {object} incomingEvent
     * @param {function(object)} forwardEvent
     */
    update(context, [data], [setData]) {
        setData(data);
    }
}

registerBrick('017db92c54d4eab8802c', DataMultiplexer);

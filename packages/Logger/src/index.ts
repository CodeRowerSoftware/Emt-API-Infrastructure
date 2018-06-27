import {EmtInterfaces} from '@emt/infrastructure_interfaces';
import {EmtShared} from "@emt/infrastructure_shared";

export namespace Emt {

//    const EmtShared = require('@emt/infrastructure_shared');

    export class Logger implements EmtInterfaces.ILogger {
        log(message: string, type: string): void {
            debugger;
            console.log(EmtShared.AppConstants.Global.ADD_MESSAGE, message, type);
        }
    }
}

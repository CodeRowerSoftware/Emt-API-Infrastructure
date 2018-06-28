import {emt_infra_interfaces} from 'emt_infra_interfaces';

//var EmtShared = require("EmtShared");
//EmtShared = EmtShared.EmtShared;
import {emt_infra_shared} from 'emt_infra_shared';

export namespace emt_infra_logger {

//    const EmtShared = require('@emt/infrastructure_shared');
    export class Logger implements emt_infra_interfaces.ILogger {
        log(message: string, type: emt_infra_shared.AppEnum.MessageType): void {
            console.log(emt_infra_shared.AppConstants.Global.ADD_MESSAGE, message, type);
        }
    }
}

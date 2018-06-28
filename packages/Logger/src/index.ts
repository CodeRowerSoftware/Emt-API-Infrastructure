import { EmtInterfaces } from '@emt/infrastructure_interfaces';

//var EmtShared = require("EmtShared");
//EmtShared = EmtShared.EmtShared;
import { EmtShared } from 'EmtShared';

export namespace Emt {

//    const EmtShared = require('@emt/infrastructure_shared');
  export class Logger implements EmtInterfaces.ILogger {
    log(message: string, type: EmtShared.MessageType): void {
      debugger;
      console.log(EmtShared.AppConstants.Global.ADD_MESSAGE, message, type);
    }
  }
}

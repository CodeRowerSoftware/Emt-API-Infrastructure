import * as Shared from '@emt/infrastructure_shared';
import * as Interfaces from '@emt/infrastructure_interfaces';

export namespace Emt {
    export class Logger implements Interfaces.Emt.Interfaces.ILogger{
      log(message: string, type: string): void {
        console.log(Shared.AppConstants.Global.ADD_MESSAGE, message, type);
      }
    }
}

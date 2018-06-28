// https://github.com/Microsoft/TypeScript/issues/20273

import { Constants } from './Constants/index';
//import { Enums, MessageType } from './Enums/index';

export namespace EmtShared {

  export const AppConstants = Constants;

  export enum MessageType {
    Toast,
    Dialog
  }
}


/* If I use this, Emt Name is replaces by other module using the same namespace.
Refer test.html

*/
/*
export namespace Emt{
    export namespace Shared {
        export const AppConstants = Constants;
    }
}

 */

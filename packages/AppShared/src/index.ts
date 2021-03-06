// https://github.com/Microsoft/TypeScript/issues/20273

import {Constants } from './Constants/Constants';
import AppEnums from './Enums/AppEnums';

export namespace EmtShared {
    export const AppConstants = Constants;
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

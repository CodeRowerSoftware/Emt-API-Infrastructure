// https://github.com/Microsoft/TypeScript/issues/20273

import {Constants} from './Constants/index';
import {Enums} from './Enums/index';

export namespace emt_infra_shared {

    export import AppConstants = Constants;
    export import AppEnum = Enums

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

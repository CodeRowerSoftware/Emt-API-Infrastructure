// https://github.com/Microsoft/TypeScript/issues/20273

import AppConstants from './Constants/AppConstants';
import AppEnums from './Enums/AppEnums';

export namespace Emt {
  export namespace Shared {
    export import APP_CONSTANTS = AppConstants;
    export import APP_ENUMS = AppEnums;
  }
}


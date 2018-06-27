// https://github.com/Microsoft/TypeScript/issues/20273

import LoggerInterfaces from './logger/ILogger';

export namespace Emt {
  export namespace Interfaces {
    export import ILogger = LoggerInterfaces.Logger;
  }
}


// https://github.com/Microsoft/TypeScript/issues/20273

import LoggerInterfaces from './logger/ILogger';

export namespace emt_infra_interfaces {
    export import ILogger = LoggerInterfaces.Logger;
}


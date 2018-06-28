import {emt_infra_shared} from 'emt_infra_shared';

declare namespace LoggerInterfaces {
    export interface Logger {
        log(message: string, type: emt_infra_shared.AppEnum.MessageType): void
    }
}
export default LoggerInterfaces;

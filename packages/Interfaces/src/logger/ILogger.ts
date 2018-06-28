import {EmtShared} from 'EmtShared';
declare namespace LoggerInterfaces {
  export interface Logger {
    log(message: string, type: EmtShared.MessageType): void
  }
}
export default LoggerInterfaces ;
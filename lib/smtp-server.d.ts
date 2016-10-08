// Type definitions for smtp-server v1.15.0
// Project: https://github.com/andris9/smtp-server
// Definitions by: markisme <zhaogehi@gmail.com>
// Definitions: https://github.com/markisme/smtp-server.git

import { Stream } from 'typed-stream';

export class SMTPServer {
    constructor(options: SMTPServerOptions);
    close(callback: (err?: Error | null) => any): any;
    listen(...args: any[]): void;
    onAuth(auth: Authentication, session: Session, callback: any): any;
    onClose(callback: (err?: Error | null) => any): any;
    onConnect(session: Session, callback: (err?: Error | null) => any): any;
    onData(stream: Stream, session: Session, callback: (err?: Error | null) => any): any;
    onMailFrom(address: Address, session: Session, callback: (err?: Error | null) => any): any;
    onRcptTo(address: Address, session: Session, callback: (err?: Error | null) => any): any;
}

export interface SMTPServerOptions {
    secure?: boolean; //default is false.
    name?: string;//optional hostname of the server.
    banner?: string;//optional greeting message.
    size?: number;
    authMethods?: string[];//'PLAIN', 'LOGIN' or 'XOAUTH2',defaults to ['PLAIN', 'LOGIN']
    authOptional?: any;
    disabledCommands?: string[];
    hideSTARTTLS?: boolean;
    hidePIPELINING?: boolean;
    hide8BITMIME?: boolean;
    hideSMTPUTF8?: boolean;
    allowInsecureAuth?: boolean;
    disableReverseLookup?: boolean;
    sniOptions?: Object;
    logger?: boolean;
    maxClients?: number;//defaults to Infinity
    useProxy?: boolean;
    useXClient?: boolean;
    useXForward?: boolean;
    lmtp?: boolean;
    socketTimeout?: number;//millisceonds
    closeTimeout?: number;//millisceonds
    onAuth?: (auth: Authentication, session: Session, callback: (err?: Error | null, response?: AuthenticationResponse) => any) => any;
    onConnect?: (session: Session, callback: (err?: Error | null) => any) => any;
    onMailFrom?: (address: Address, session: Session, callback: (err?: Error | null) => any) => any;
    onRcptTo?: (address: Address, session: Session, callback: (err?: Error | null) => any) => any;
    onData?: (stream: any, session: Session, callback: (err?: Error | null) => any) => any;
    onClose?: (session: Session) => any;
}

export interface Authentication {
    method: string;//'PLAIN', 'LOGIN' or 'XOAUTH2'
    username?: string;
    password?: string;
    accessToken?: string;
    validatePassword: (password: string) => boolean;
}

export interface AuthenticationResponse {
    user: any;
    data?: {};
}

export interface Session {
    id: string;
    remoteAddress: Address;
    clientHostname: string;
    openingCommand: string;
    hostNameApearsAs: string;
    envelope: Envelope;
}

export interface Envelope {
    mailFrom: Address;
    rcptTo: Address[];
}

export interface Address {
    address: string;
    args: {
        'SIZE'?:number,
        'RET'?:string,
        'NOTIFY'?:string
    };
}

export interface SMTPCommands {

}

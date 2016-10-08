import { test } from 'blue-tape';
import { SMTPServer, SMTPServerOptions } from '../lib/smtp-server';

function SMTPServerConnectTest() {
    let options: SMTPServerOptions = {
        secure: false,
    };
    let server = new SMTPServer(options);
    server.listen(2323);
}


// Type definitions for smtp-server v1.15.0
// Project: https://github.com/andris9/smtp-server
// Definitions by: markisme <https://github.com/markisme/>
// Definitions: https://github.com/markisme/smtp-server.git

import { SMTPServer, SMTPServerOptions } from '../lib/smtp-server';

function SMTPServerConnectTest() {
    let options: SMTPServerOptions = {
        secure: false,
    };
    let server = new SMTPServer(options);
    server.listen(2323);
}

SMTPServerConnectTest();


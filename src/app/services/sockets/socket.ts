import { Service } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';


@Service()
export class Socket {

    private socket:any;
    constructor() { }

    initSocket() {
        this.socket = io(SERVER_URL);
        return ()=>{this.socket.disconnect();}
  
    }

    send(message: string) {
        this.socket.emit('message',message);
    }

    getMessage() {
        return new Observable<string>(observer=>{
            this.socket.on('message', (data: any) => {observer.next(data)
            });
        });
    }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import WebexSDK from 'webex';

@Injectable({
  providedIn: 'root'
})

export class WebexService {
  webex: any
  currentRoom: any;

  onBeforeLogin() {
    this.webex = WebexSDK.init({
      config: {
        meetings: {
          deviceType: 'WEB'
        },
        credentials: {
          client_id: environment.client_id,
          redirect_uri: environment.redirect_uri,
          scope: environment.scope
        }
      }
    })
    this.listenForWebex()
    this.webex.authorization.initiateLogin()
  }

  onInit() {
    this.webex = WebexSDK.init({
        config: {
          meetings: {
            deviceType: 'WEB'
          }
        },
        credentials: {
          access_token: localStorage.getItem('webex_token')
        }
    })
    this.listenForWebex()
  }

  async onCreateRoom(name: string) {
    try {
      this.currentRoom = await this.webex.rooms.create({ title: name })
      alert("Your room has been created")
    } catch(error) {
      window.alert(error);
    }
  }

  async onListRoom() {
    return this.webex.rooms.list()
  }

  async listenForWebex() {
    this.webex.once(`ready`, () => {
      console.log("READY", this.webex.credentials.supertoken)
      if (this.webex.credentials.supertoken){
        localStorage.setItem('webex_token', this.webex.credentials.supertoken.access_token)
      }
    });
  }

  onLogin() {
    this.webex.authorization.initiateLogin()
  }

  onLogout() {
    if(this.webex) {
      if (this.webex.canAuthorize) {
        console.log('Already Logged in')
        this.webex.logout();
      }
      else {
        this.webex.logout();
        console.log('Cannot logout when no user is authenticated')
      }
      localStorage.removeItem('webex_token')
    }
  }

  async addmember(name: string) {
    try {
    return this.webex.memberships.create({
    personEmail: 'virahul@cisco.com',
    roomId: '42a075e0-7032-11eb-b013-f7d4446a08c5',
    });
    } catch(error) {
    window.alert(error);
    }
    }

    async sendmsg(name: string) {
      try {
      return this.webex.messages.create({
      text: 'Hello',
      roomId: '42a075e0-7032-11eb-b013-f7d4446a08c5'
      
      });

    }  catch(error) {
      window.alert(error);
      }
    }


}


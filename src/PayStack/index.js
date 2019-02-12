'use strict';

const Event = use('Event')
const Env = use('Env')

class PayStackAPIClient {
      constructor(Agent, Config) {
          this.agent = new Agent(
              Config.get('paystack.apiKey'),
              Env.get('NODE_ENV')
          );
        
          if(Config.get('paystack.installWebHook') === true){
              ;
          }
      }
};

module.exports = PayStackAPIClient

'use strict';

const Event = use('Event')

class PayStackAPIClient {
      constructor(Agent, Config) {
          this.agent = new Agent(
              Config.get('paystack.apiKey'),
              Config.get('app.env')
          );
        
          if(Config.get('paystack.installWebHook') === true){
              this.agent.webhook = Agent.webhook.install(
                  Event
              )
          }
      }
};

module.exports = PayStackAPIClient

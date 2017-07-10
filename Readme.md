## Alexa Mac Controller

Uses the WeMo emulator [wemore](https://github.com/dhleong/wemore) to expose an on/off command to Alexa to put your mac to sleep, and to wake it up (immediately).

### Setup
1. `npm install`
2. `node app`
3. rename `.env_sample` to `.env` and add a unique SERIAL (I used a random [uuid](https://www.uuidgenerator.net/version4))
3. Go to the Alexa App, or tell Alexa to discover new devices.
4. _(optional)_ If you want to run this controller as a service, install [pm2](https://github.com/Unitech/pm2) by running `npm install pm2 -g` and then run `pm2 start app.js` from this directory.
5. _(optional)_ To start `pm2` on boot run `pm2 startup`. Alternately, to stop `pm2` from launching on boot run `pm2 unstartup launchd`

### Alexa commands
1. Say `Alexa turn off the Computer` to put your mac to sleep.
1. Say `Alexa turn on the Computer` to wake your mac from sleep.

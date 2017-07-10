## Alexa Mac Controller

Uses the WeMo emulator [wemore](https://github.com/dhleong/wemore) to expose an on/off command to Alexa to put your mac to sleep, and to wake it up (immediately).

### Setup
1. `npm install`
2. `node app`
3. rename .env_sample to .env and add a unique Serial (I used a random [uuid](https://www.uuidgenerator.net/version4))
3. Go to the Alexa App, or tell Alexa to discover new devices.

### Alexa commands
1. Say `Alexa turn off the Computer` to put your mac to sleep.
1. Say `Alexa turn on the Computer` to wake your mac from sleep.

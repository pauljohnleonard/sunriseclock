// #include "vr.h"
#include "global.h"
#include "ui.h"
#include "display.h"
#include "temperature.h"


//-------------------------- SETUP AND LOOP CODE ---------------------------

void setup() { 
  Serial.begin(9600);
  while(!Serial);
  Serial.println(F(__DATE__));

  setupTemperature();
  setupDisplay();
  setupUI();
  loadFromEEPROM();
  displaySetScheme();

}

void loop() {
 
  if (alarm.on) {
    if ( (alarm.Hour == tm.Hour) && (alarm.Minute == tm.Minute) && (tm.Second == 0 )) {
      doAlarm();
    }
  }

  ui();
  RTC.read(tm);   
  // Serial.println(readTemperature());
  display();
  waitForRelease();  // debounce
}

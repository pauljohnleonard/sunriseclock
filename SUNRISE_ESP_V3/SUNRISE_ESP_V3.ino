#include <math.h>
#include "wifi.h"
#include "eeprom.h"


void setup() {

  delay(1000);

  Serial.begin(74880);

  Serial.println();

  Serial.print("Setup ...");
  eeprom_setup();
 
}




void handleCmd(String req) {
  Serial.print(" handleCmd "); Serial.println(req);  
  String str=find(req,"ssid");
  str.toCharArray(esid,MAX_SSID);
  Serial.print("SSID=");Serial.println(esid);
  str=find(req,"password");
  str.toCharArray(epass,MAX_PASS);
  Serial.println("PASSWORD=");Serial.print(epass);
  eeprom_write(); 
}


void loop() {

  if (wifi_state == wifi_UNDEF) {
    wifi_setup();
    wifi_print_status();
  }

  // Wait until the client sends some data
 
  String  request = wifi_getCommand();
                    

  if (request != "") {
    handleCmd(request);
 
    delay(1);

    // wifi_response("OK");
    Serial.println("Client disconnected");
    Serial.println("");
  }

}



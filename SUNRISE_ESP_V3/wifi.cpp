#include "eeprom.h"
#include "wifi.h"


const char *apssid = "SunriseSetup";

WiFiServer server(80);//Service Port

int wifi_state=wifi_UNDEF;


Request::Request(char *raw){
    this->raw=raw;
    this->type=strtok(raw," ");

}

char*  Request::getParam(char *param){
//  String req=String(reqB);


  int start=this->raw.indexOf(param+"=");
  start=this->raw.indexOf("=",start);

  if (start<0) return "";
  start++;
  int jj=this->raw.indexOf("&",start);
  int kk=this->raw.indexOf(" ",start);
  int end=jj;
  
  if ( jj < 0  ||  (kk >0 && kk <jj) ) end=kk;
  
  char* val = this->raw.substring(start,end);

  return val;
}

void wifi_setupSTATION() {

  Serial.print("WIFI trying to connect to ");Serial.println(esid);

  WiFi.begin(esid, epass);

  for(int i=0;i<20;i++) {
    if (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    } else {
      wifi_state = wifi_STATION;
  
      Serial.println("");
      Serial.println("WiFi connected");
    
      // Start the server
      server.begin();
      Serial.println("Server started");
    
      // Print the IP address
      Serial.print("Use this URL to connect: ");
      Serial.print("http://");
      Serial.print(WiFi.localIP());
      Serial.println("/");
      return;
    }

  
  }
 
  Serial.println("Giving up");
  WiFi.disconnect();
  wifi_state = wifi_UNDEF;

}


void wifi_setup() {
    Serial.println("WIFI SETUP");
   // wifi_setupSTATION();   //  First try to connect to local network using  "esid" and "epass" rom EPROM 

   // if (wifi_state == wifi_STATION) return;

    wifi_setupAP();

    if (wifi_state == wifi_AP) return;

}


void wifi_setupAP() {


 Serial.print("WIFI creating access point ");Serial.println(apssid);

   boolean result =  WiFi.softAP(apssid);

//   while (WiFi.status() != WL_CONNECTED) {
//     delay(500);
//     Serial.print(".");
//   }

  if (result) {  
    Serial.println("");
    Serial.println("WiFi AP created");
  
    wifi_state = wifi_AP;
  
    // Start the server
    server.begin();
    Serial.println("Server started");

    IPAddress myIP = WiFi.softAPIP();

    Serial.print("AP IP address: ");

    Serial.println(myIP);
  } else {
    Serial.println("WiFi AP failed to create");

    wifi_state = wifi_UNDEF;
    WiFi.disconnect();

  }    

}


String wifi_getCommand() {


  WiFiClient client = server.available();

  if (!client) return "";

  Serial.println(" Client connected");

  bool avail = 0;
  for (int i = 0; i < 200; i++) {
    avail = client.available();
    if (avail) break;
    delay(1);
  }

  if (avail) {
    Serial.print(" avaible: "); Serial.println(client.available());

    // Read the first line of the request
    String request = client.readStringUntil('\r');
    Serial.print(" requst: "); Serial.println(request);

    client.flush();


    // Return the response
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/plain");
    client.println("Access-Control-Allow-Origin: *");
    client.println(""); //  do not forget this one
    client.println("OK");
    client.stop();
    return request;
  } else {
//    client.flush();
//
//    // Return the response
//    client.println("HTTP/1.1 200 OK");
//    client.println("Content-Type: text/plain");
//    client.println("Access-Control-Allow-Origin: *");
//    client.println(""); //  do not forget this one
//    client.println("ERRUM");
    client.stop();
    return "";
  }
}

void wifi_print_status() {

    switch(wifi_state) {
        case wifi_UNDEF: Serial.println(" WIFI unconnected");break;
        case wifi_STATION: Serial.print(" WIFI station ");Serial.print(esid);break;
        case wifi_AP: Serial.print(" WIFI station ");Serial.print(apssid);break;
    }
}



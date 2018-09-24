#ifndef _WIFI_H
#define _WIFI_H

#include <ESP8266WiFi.h>
#include <WiFiClient.h>

// #include <ESP8266WebServer.h>


extern WiFiServer server; //Service Port

#define wifi_UNDEF    -1
#define wifi_STATION   1
#define wifi_AP  2

extern int wifi_state;

void wifi_setup();
void wifi_setupAP();
void wifi_setupSTATION();
char *wifi_getCommand();
void wifi_response(char *resp);
void wifi_print_status();


class Request {
    char *type;
    char *raw;
    public: char *path;

    public: Request(char *raw);
    public: String getParam(char *param);
};

#endif

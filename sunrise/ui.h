#ifndef _UI_H
#define _UI_H


#define COMMAND  0 
#define TEMPERATURE 3 
#define ALARM 6 
#define OFF1  7 
#define OFF2  8 
#define RATE  9 
#define SUNRISE 10 
#define SCHEME  11 

void setupUI();
void ui();
int checkButtons();
void waitForRelease();

extern bool buts[12];

#endif

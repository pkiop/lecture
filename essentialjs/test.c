#include <stdio.h>
#define BIG_NUMBER 9999


int main() {
  short* bigArray = (short*)malloc(sizeof(short) * BIG_NUMBER);
  for(int i=0;i<BIG_NUMBER;i++) {
    printf("%d", bigArray[i]);
  }
  free(bigArray);

  // big Array를 사용하지 않는 100만개의 작업

  return 0;
}


#include <iostream>

using namespace std;

/*
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/

int main() {
  int t;
  int arr[1001];
  int arrLength;

  cout << fixed;
  cout.precision(3);

  cin >> t; 
  while(t--) {
    double totalSum = 0.0;
    cin >> arrLength;

    for(int i=0;i<arrLength;++i) {
      cin >> arr[i];
      totalSum += double(arr[i]);
    }

    double average = totalSum / double(arrLength);

    int goodStudent = 0;
    for(int i=0;i<arrLength;++i) {
      if(double(arr[i]) > average) {
        goodStudent++;
      }
    }

    double ans = (double(goodStudent) / arrLength * 100);

    cout << ans << "%\n";
  }
}
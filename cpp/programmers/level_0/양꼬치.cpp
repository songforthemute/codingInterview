//
//  양꼬치.cpp
//  cpp
//
//  Created on 2023/01/24.
//

#include <stdio.h>

#include <math.h>
#include <string>
#include <vector>


using namespace std;

int solution(int n, int k) {
    int meat = 12000;
    int beverage = 2000;
    
    meat *= n;
    beverage *= (k - floor(n / 10));
    
    return meat + beverage;
}

// debug
int main(void) {
    printf("Test: %d\n", solution(10, 3)); // 124000
    printf("Test: %d\n", solution(64, 6)); // 768000
    return 0;
}

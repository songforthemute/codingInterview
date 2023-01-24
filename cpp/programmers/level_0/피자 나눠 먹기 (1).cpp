//
//  피자 나눠 먹기 (1).cpp
//  cpp
//
//  Created on 2023/01/24.
//

#include <stdio.h>

#include <math.h>
#include <string>
#include <vector>


using namespace std;

int solution(int n) {
    return ceil(float(n) / 7);
}

// debug
int main(void) {
    printf("Test: %d\n", solution(7)); // 1
    printf("Test: %d\n", solution(1)); // 1
    printf("Test: %d\n", solution(15)); // 3
    return 0;
}

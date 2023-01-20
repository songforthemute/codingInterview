//
//  숫자 비교하기.cpp
//  cpp
//
//  Created on 2023/01/21.
//

#include <stdio.h>
#include <math.h>
#include <string>
#include <vector>

using namespace std;

int solution(int num1, int num2) {
    return num1 == num2 ? 1 : -1;
}

// debug
int main(void) {
    printf("Test Case: %d\n", solution(2, 3)); // -1
    printf("Test Case: %d\n", solution(11, 11)); // 1
    printf("Test Case: %d\n", solution(7, 99)); // -1
    return 0;
}

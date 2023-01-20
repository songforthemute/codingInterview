//
//  두 수의 나눗셈.cpp
//  cpp
//
//  Created on 2023/01/21.
//

#include <stdio.h>

#include <string>
#include <vector>
#include <math.h>

using namespace std;

int solution(int num1, int num2) {
    return floor(num1 * 1000 / num2);
}

// debug
int main(void) {
    printf("Test Case: %d\n", solution(3, 2)); // 1500
    printf("Test Case: %d\n", solution(7, 3)); // 2333
    printf("Test Case: %d\n", solution(1, 16)); // 62
    return 0;
}

//
//  두 수의 곱.cpp
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
    return num1 * num2;
}

// debug
int main(void) {
    printf("Test Case: %d\n", solution(3, 4)); // 12
    printf("Test Case: %d\n", solution(27, 19)); // 513
    return 0;
}

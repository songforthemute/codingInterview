//
//  나이 출력.cpp
//  cpp
//
//  Created on 2023/01/21.
//

#include <stdio.h>
#include <math.h>
#include <string>
#include <vector>

using namespace std;

int solution(int age) {
    return 2023 - age;
}

// debug
int main(void) {
    printf("Test Case: %d\n", solution(40)); // 1983
    printf("Test Case: %d\n", solution(23)); // 2000
    return 0;
}

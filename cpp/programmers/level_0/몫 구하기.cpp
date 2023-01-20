//
//  몫 구하기.cpp
//  cpp
//
//  Created on 2023/01/20.
//

#include <iostream>
#include <stdio.h>
#include <math.h>
#include <string>
#include <vector>

using namespace std;

int solution(int num1, int num2) {
    return floor(num1 / num2);
}

int main(void) {
    printf("%d\n", solution(10, 3)); // 3
    return 0;
}

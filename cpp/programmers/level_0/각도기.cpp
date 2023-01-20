//
//  각도기.cpp
//  cpp
//
//  Created on 2023/01/21.
//

#include <stdio.h>

#include <string>
#include <vector>


using namespace std;

int solution(int angle) {
    if (angle < 90) {
        return 1;
    } else if (angle == 90) {
        return 2;
    } else if (angle < 180) {
        return 3;
    } else {
        return 4;
    }
}

// debug
int main(void) {
    printf("Test Case: %d\n", solution(70)); // 1
    printf("Test Case: %d\n", solution(91)); // 3
    printf("Test Case: %d\n", solution(180)); // 4
    return 0;
}

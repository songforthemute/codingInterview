//
//  짝수의 합.cpp
//  cpp
//
//  Created on 2023/01/22.
//

#include <stdio.h>

#include <string>
#include <vector>


using namespace std;

int solution(int n) {
    int sum = 0;
    int i = 0;
    
    while (i <= n) {
        sum += i;
        
        i += 2;
    }
    
    
    return sum;
}

// debug
int main(void) {
    printf("Test Case: %d\n", solution(10)); // 30
    printf("Test Case: %d\n", solution(4)); // 6
    return 0;
}

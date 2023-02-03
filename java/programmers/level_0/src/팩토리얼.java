public class 팩토리얼 {

    //i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 
// return 하도록 solution 함수를 완성해주세요.
    public static int solution(int n) {
        for (int i = 1; i <= 11; i++) {
            if (factorial(i) <= n && n < factorial(i + 1)) {
                return i;
            }
        }
        return 0;
    }

    static int factorial(int x) {
        int answer = 1;
        for (int i = 1; i <= x; i++) {
            answer *= i;
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.println(solution(3628800));
        System.out.println(solution(7)); //3!=6, 4!=24 => 3!출력

    }
}

public class 짝수의_합 {
//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
  public static int solution(int n) {
    int answer = 0;

    for (int i = 1; i <= n; i++) {
      if (i % 2 == 0) {   //n이 짝수라면
        answer += i;
      }
    }
    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution(16));
  }
}

public class 순서쌍의_개수 {

  public static int solution(int n) {
    int answer = 0;

    for (int i = 1; i <= Math.sqrt(n); i++) {
      answer += (n % i == 0) ? (n / i == Math.sqrt(n) ? 1 : 2) : 0;
    }

    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution(39));
    System.out.println(solution(21));
    System.out.println(solution(144));
    System.out.println(solution(64));
  }
}

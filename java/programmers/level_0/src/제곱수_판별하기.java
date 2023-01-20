public class 제곱수_판별하기 {

  public static int solution(int n) {
    int answer = 0;

    if (n % Math.sqrt(n) == 0) {
      answer = 1;
    } else {
      answer = 2;
    }
    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution(23));
  }
}

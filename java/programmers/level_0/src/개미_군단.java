public class 개미_군단 {

  public static int solution(int hp) {
    int answer = hp / 5;
    hp %= 5;

    answer += hp / 3;
    hp %= 3;

    answer += hp / 1;

    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution(242));
  }
}

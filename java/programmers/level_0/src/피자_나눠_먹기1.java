public class 피자_나눠_먹기1 {
//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때
//모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
  public static int solution(int n) {
    /*int answer = 0;
    if (7 > n || 7 == n) {
      answer = 1;
    } else if (n % 7 == 0) {
      answer = n / 7;
    } else {
      answer = n / 7 + 1;
    }
    return answer;*/

    if(7>n || 7 == n) return 1;
    else if(n % 7 == 0) return n/7;
    else return n/7 + 1;
  }

  public static void main(String[] args) {
    System.out.println(solution(5));
    System.out.println(solution(15));
  }
}

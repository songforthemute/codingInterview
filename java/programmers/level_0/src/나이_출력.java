public class 나이_출력 {

  //머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
  public static int solution(int age) {
    return 2022 - age + 1;  //한국에서는 태어날 때부터 1살이기 때문에 +1을 해준 것.
  }

  public static void main(String[] args) {
    System.out.println(solution(24));
  }
}

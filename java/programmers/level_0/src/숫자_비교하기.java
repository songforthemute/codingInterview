public class 숫자_비교하기 {

  //정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
  public static int solution(int num1, int num2) {
    return (num1 == num2 ? 1 : -1);
  }

  public static void main(String[] args) {
    System.out.println(solution(24, 6));
    System.out.println(solution(6, 6));
  }
}

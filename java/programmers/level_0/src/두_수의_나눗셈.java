public class 두_수의_나눗셈 {

  //정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
  public static int solution(float num1, float num2) {
    return (int) ((num1 / num2) * 1000);  //float형으로 계산을 했기 때문에 int형으로 변환한 후 return해야할 필요가 있다.
  }

  public static void main(String[] args) {
    System.out.println(solution(24, 6));
  }
}

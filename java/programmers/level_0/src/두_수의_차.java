public class 두_수의_차 {

  //정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
  public static int solution(int num1, int num2) {
    /*int answer = num1 - num2;
    return answer;*/

    //위처럼 하는 것보다 answer변수 없이 num1 - num2만 return 해주는 것이 더욱 좋을 것 같음
    return num1 - num2;
  }

  public static void main(String[] args) {
    System.out.println(solution(23, 14));
  }
}

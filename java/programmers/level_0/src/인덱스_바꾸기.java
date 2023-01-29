public class 인덱스_바꾸기 {

  //문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
  public static String solution(String my_string, int num1, int num2) {
    String answer = "";

    for (int i = 0; i < my_string.length(); i++) {
      if (i == num1) {
        answer += my_string.charAt(num2);
      } else if (i == num2) {
        answer += my_string.charAt(num1);
      } else {
        answer += my_string.charAt(i);
      }
    }

    return answer;
  }
//my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

  public static void main(String[] args) {
    System.out.println(solution("I love you", 3, 6));
  }
}

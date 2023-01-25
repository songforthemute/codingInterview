public class 모음_제거 {
//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
//문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

  public static String solution(String my_string) {
    String answer = "";

    for (int i = 0; i < my_string.length(); i++) {
      char ch = my_string.charAt(i);
      if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u') {
        answer += ch;
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution("Hello my name is String"));
  }
}
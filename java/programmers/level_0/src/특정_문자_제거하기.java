public class 특정_문자_제거하기 {

  public String solution(String my_string, String letter) {
    String answer = "";

    for (int i = 0; i < my_string.length(); i++) {
      if (my_string.charAt(i) != letter.charAt(0)) {
        answer += my_string.charAt(i);
      }
    }

    return answer;
  }
}

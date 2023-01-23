public class 숨어있는_숫자의_덧셈1 {

  public int solution(String my_string) {
    int answer = 0;
    for (int i = 0; i < my_string.length(); i++) {
      if (Character.isDigit(my_string.charAt(i))/*==true*/) {
        answer += my_string.charAt(i) - '0';    //문자를 숫자로 변환하기 위해 문자 '0'을 빼줌.
      }
    }

    return answer;
  }
}

public class 반복_문자_출력하기 {

  public static String solution(String my_string, int n) {
    String answer = "";

    for (int i = 0; i < my_string.length(); i++) {  //
      for (int j = 0; j < n; j++) { //n만큼 반복시켜서 한 문자를 n번 저장하도록 함.
          answer += my_string.charAt(i);
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution("hello", 4));
  }
}

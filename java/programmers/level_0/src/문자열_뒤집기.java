public class 문자열_뒤집기 {

  //문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
  public static String solution(String my_string) {
    String answer = "";

    /*for (int i = my_string.length() - 1; i >= 0; i--) {
      answer = answer + my_string.charAt(i);
    }*/

    //배열은 0부터 시작하기 때문에 (배열의 길이 - 1)부터 시작해서 0까지 계산해야한다.
    for (int i = my_string.length() - 1; i >= 0; i--) {
      answer += my_string.charAt(i);
    }
    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution("Hello"));
  }
}


public class 대문자와_소문자 {
  //문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

  public static String solution(String my_string) {
    String answer = "";
    char[] arr = new char[my_string.length()];

    for (int i = 0; i < my_string.length(); i++) {
      arr[i] = my_string.charAt(i);
    }

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] >= 'A' && arr[i] < 'Z') {
        String tmp = arr[i] + "";
        answer += tmp.toLowerCase();
      }
      if (arr[i] >= 'a' && arr[i] < 'z') {
        String tmp = arr[i] + "";
        answer += tmp.toUpperCase();
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution("C"));
  }
}

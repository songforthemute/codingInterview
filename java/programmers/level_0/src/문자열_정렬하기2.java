import java.util.Arrays;

public class 문자열_정렬하기2 {

  //영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을
// return 하도록 solution 함수를 완성해보세요.
  public static String solution(String my_string) {
    String answer = "";
    int[] arr = new int[my_string.length()];
    answer = my_string.toLowerCase();
    for (int i = 0; i < arr.length; i++) {
      arr[i] = answer.charAt(i);
    }
    Arrays.sort(arr);
    answer = "";
    for (int i = 0; i < arr.length; i++) {
      answer += (char)arr[i];
    }
    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution("PythoN"));
  }
}

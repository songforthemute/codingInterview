import java.lang.reflect.Array;
import java.util.Arrays;

public class 숫자_찾기 {

  //정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고
  // 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
  public static int solution(int num, int k) {
    int answer = 0;
    String str = num + "";

    int[] arr = new int[(num + "").length()];
    for (int i = 0; i < arr.length; i++) {
      arr[i] = str.charAt(i) - '0';
    }

    for (int i = 0; i < str.length(); i++) {
      if (arr[i] == k) {
        return i + 1;
      }
    }

    return -1;
  }

  public static void main(String[] args) {
    System.out.println(solution(29183, 1));
    System.out.println(solution(232443, 4));
    System.out.println(solution(123456, 6));

  }
}

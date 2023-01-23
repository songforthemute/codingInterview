import java.util.Arrays;

public class n의_배수_고르기 {
  //정수 n과 정수 배열 numlist가 매개변수로 주어질 때
  //numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

  public static int[] solution(int n, int[] numlist) {
    int[] answer = new int[count(numlist, n)];  //배열의 길이를 구하는 메소드를 이용하여 배열의 길이를 구함
    int x = 0;
    for (int e : numlist) {
      if (e % n == 0) {
        answer[x++] = e;
      }
    }
    return answer;
  }

  static int answer = 0;

  static int count(int[] numlist, int n) {  //배열의 길이를 구하는 메소드
    for (int e : numlist) {
      if (e % n == 0) {
        answer++;
      }
    }
    return answer;
  }


  public static void main(String[] args) {
    System.out.println(Arrays.toString(solution(3, new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9})));
  }
}


import java.util.Arrays;

public class 짝수_홀수_개수 {

  //정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
  public static int[] solution(int[] num_list) {
    /*int[] answer = new int[2];
    int evenNumber = 0;
    int oddNumber = 0;

    for (int i = 0; i < num_list.length; i++) {
      if (num_list[i] % 2 == 0) {
        evenNumber++; //홀수
      } else {
        oddNumber++;  //짝수
      }
    }
    answer[0] = evenNumber;
    answer[1] = oddNumber;
    return answer;*/

    int[] answer = new int[2];

    for (int j : num_list) {  // 배열의 길이만큼 실행 => 향상된 for문으로 변경
      if (j % 2 == 0) {
        answer[0]++;  //oddNumber, evenNumber 대신 answer배열의 값을 조작시켜서 필요없는 변수를 제거
      } else {
        answer[1]++;
      }
    }
    return answer;
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(solution(new int[]{1, 3, 5, 7})));
    System.out.println(Arrays.toString(solution(new int[]{1, 2, 3, 4, 5})));
  }
}

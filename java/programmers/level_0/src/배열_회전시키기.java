import java.util.Arrays;

public class 배열_회전시키기 {

  //정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
//배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
  public static int[] solution(int[] numbers, String direction) {
    int[] answer = new int[numbers.length];
    int tmpRight = numbers[numbers.length - 1];
    int tmpLeft = numbers[0];

    //right일때
    if (direction.equals("right")) {
      for (int i = 1; i < numbers.length; i++) {
        answer[i] += numbers[i - 1];
      }
      answer[0] = tmpRight;
    }

    //left일때
    if (direction.equals("left")) {
      for (int j = 1; j < numbers.length; j++) {
        answer[j - 1] += numbers[j];
      }
      answer[numbers.length - 1] = tmpLeft;
    }

    return answer;
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(solution(new int[]{4, 455, 6, 4, -1, 45, 6}, "left")));
    System.out.println(Arrays.toString(solution(new int[]{1, 2, 3}, "right")));
  }
}

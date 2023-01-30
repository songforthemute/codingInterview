import java.util.Arrays;

public class 최댓값_만들기2 {

  //정수 배열 numbers가 매개변수로 주어집니다.
  // numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
  public static int solution(int[] numbers) {
    int answer = 0;

    Arrays.sort(numbers);

    int num1 = numbers[0] * numbers[1];
    int num2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];

    if (num1 < num2) {
      return num2;
    } else {
      return num1;
    }
  }

  public static void main(String[] args) {
    System.out.println(solution(new int[]{1, 2, -3, 4, -5}));
  }
}

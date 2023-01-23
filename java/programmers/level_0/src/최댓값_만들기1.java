public class 최댓값_만들기1 {

  public int solution(int[] numbers) {

    int answer = 0;
    int tmp = numbers[0];

    for (int i = 0; i < numbers.length; i++) {
      if (numbers[0] < numbers[i]) {
        numbers[0] = numbers[i];
        numbers[i] = tmp;
        tmp = numbers[0];
      }
    }

    answer = numbers[0];
    numbers[0] = tmp;
    tmp = numbers[1];

    for (int i = 1; i < numbers.length; i++) {
      if (numbers[1] < numbers[i]) {
        numbers[1] = numbers[i];
        numbers[i] = tmp;
        tmp = numbers[1];
      }
    }
    answer *= numbers[1];

    return answer;
  }

}

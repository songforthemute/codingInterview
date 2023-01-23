public class 배열의_평균값 {

  //정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
  public static double solution(int[] numbers) {
    double answer = 0;

   /*
    기존코드
    for (int i = 0; i < numbers.length; i++) {
      answer += numbers[i];

    }
    answer /= numbers.length;
    return answer;*/
    for (int number : numbers) {  //개선된 for문: 변수를 선언한 뒤 그 변수에 배열의 값이 저장되어 반복하게 되며, 배열의 길이만큼 코드가 반복된다.
      answer += number;
    }
    answer /= numbers.length;
    return answer;
  }

  public static void main(String[] args) {
    System.out.println(solution(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}));
  }
}

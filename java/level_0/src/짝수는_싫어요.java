public class 짝수는_싫어요 {

  public int[] solution(int n) {
    int[] answer = new int[(n + 1) / 2];

    for (int i = 0; i < answer.length; i++) {
      answer[i] = i * 2 + 1;
    }

    return answer;
  }
}

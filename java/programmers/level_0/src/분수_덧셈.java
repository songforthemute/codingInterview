public class 분수_덧셈 {

  public int[] solution(int numer1, int denom1, int numer2, int denom2) {
    int[] answer = new int[2];

    int totalNum, totalDen;
    totalDen = denom1 * denom2;
    totalNum = denom1 * numer2 + denom2 * numer1;

    //큰 값을 a로 설정해줌
    int a, b, r;
    if (totalDen > totalNum) {
      a = totalDen;
      b = totalNum;
    } else {
      a = totalNum;
      b = totalDen;
    }

    //최대공약수 구하는 방법 (호제법)
    //a>b일 때 성립
    while (true) {
      r = a % b;
      if (r == 0) {
        break;
      }
      a = b;
      b = r;
    }

    answer[1] = totalDen / b;
    answer[0] = totalNum / b;
    return answer;
  }
}

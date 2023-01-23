public class 세균_증식 {

  public int solution(int n, int t) {
    int answer = 0;

    //1시간(t)에 두배만큼 증식
    for (int i = 0; i < t; i++) {
      n = n * 2;
    }

    return answer = n;
  }
}

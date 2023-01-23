public class 접의_위치_구하기 {

  //사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
  public static int solution(int[] dot) {
    /*int answer = 0;


    if (dot[0] > 0 && dot[1] > 0) {
      answer = 1;
    } else if (dot[0] < 0 && dot[1] > 0) {
      answer = 2;
    } else if (dot[0] < 0 && dot[1] < 0) {
      answer = 3;
    } else {
      answer = 4;

      return answer;
    }*/

    //불필요한 answer 변수를 지운뒤 하나의 값만 return으로 바로 제출
    //가독성을 위해 x, y변수를 추가

    int x = dot[0];
    int y = dot[1];

    if (x > 0 && y > 0) { //1사분면
      return 1;
    } else if (x < 0 && y > 0) {  //2사분면
      return 2;
    } else if (x < 0 && y < 0) {  //3사분면
      return 3;
    } else {  //4사분면
      return 4;
    }
  }

  public static void main(String[] args) {
    System.out.println(solution(new int[]{2, -5}));
  }
}

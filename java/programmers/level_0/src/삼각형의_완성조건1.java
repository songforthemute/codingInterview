import java.util.Arrays;

public class 삼각형의_완성조건1 {

  //선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//
//    가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//
//삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
  public static int solution(int[] sides) {
    /*int answer = 0;
    int tmp = sides[0];

    for (int i = 0; i < sides.length; i++) {
      if (sides[0] < sides[i]) {
        sides[0] = sides[i];
        sides[i] = tmp;
        tmp = sides[0];
      }
    }

    if (sides[0] < sides[1] + sides[2]) {
      answer = 1;
    } else {
      answer = 2;
    }
    return answer;
*/

    //오름차순으로 정렬하는 메서드를 사용해서 계산하면편하지 않을까
    Arrays.sort(sides);
    if (sides[2] < sides[0] + sides[1]) {
      return 1;
    } else {
      return 2;
    }
  }
  public static void main(String[] args) {
    System.out.println(solution(new int[]{3, 6, 2}));
    System.out.println(solution(new int[]{199, 72, 222}));
  }
}

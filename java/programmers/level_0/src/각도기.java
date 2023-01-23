public class 각도기 {

  //각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
//각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
  public static int solution(int angle) {
    /*int answer = 0;
    for (int i = 0; i < 4; i++) {
      if (angle < 90) {
        answer = 1;
      }
      if (angle == 90) {
        answer = 2;
      }
      if (angle == 180) {
        answer = 4;
      }
      if (angle < 180 && angle > 90) {
        answer = 3;
      }
    }
    return answer;*/
    //위 코드를 개선 할 수 있지 않을까?
    //쓸모없는 반복문 제거, else를 사용

    if (angle < 90) {
      return 1;
    } else if (angle == 90) {
      return 2;
    } else if (angle == 180) {
      return 4;
    } else {
      return 3;
    }
  }

  public static void main(String[] args) {
    System.out.println(solution(70));
    System.out.println(solution(160));
    System.out.println(solution(180));
    System.out.println(solution(90));
  }
}

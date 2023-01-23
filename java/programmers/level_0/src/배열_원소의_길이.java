import java.util.Arrays;
//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
public class 배열_원소의_길이 {
  public static int[] solution(String[] strlist) {
    int[] answer = new int[strlist.length];
    for(int i=0;i<strlist.length;i++) {
      answer[i] = strlist[i].length(); //배열의 길이를 구할 때에는 꼭 length(). 소괄호 필수!!
    }
    return answer;
  }

}

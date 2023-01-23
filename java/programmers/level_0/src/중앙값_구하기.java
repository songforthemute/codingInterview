import java.util.Arrays;

public class 중앙값_구하기 {

  public int solution(int[] array) {
    Arrays.sort(array); //오름차순 정렬

    return array[array.length / 2];//배열의 길이가 홀수이기 때문에 2로 나누어줌
  }
}

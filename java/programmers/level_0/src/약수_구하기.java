import java.util.Arrays;

public class 약수_구하기 {
  public static int[] solution(int n) {
    int[] answer = new int[cul(n)];
    int j = 0;
    for(int i = 1; i <= n; i++){
      if(n % i == 0){
        answer[j] = i;
        j++;
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(solution(24)));
  }

  static int cul(int x){
    int count = 0;
    for(int j = 1; j<= x; j++){
      if(x % j == 0){
        count++;
      }
    }
    return count;
  }
}

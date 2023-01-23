public class 피자_나눠_먹기3 {

  public int solution(int slice, int n) {
    int answer = 0;
    if (slice > n || slice == n) {
      answer = 1;
    } else if (slice < n && n % slice == 0) {
      answer = n / slice;
    } else {
      answer = n / slice + 1;
    }
    return answer;
  }
}

public class 자릿수_더하기 {
//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
  public static int solution(int n) {
    /*int answer = 0;

    while (n > 0) {
      answer += n % 10;
      n /= 10;
    }

    return answer;*/

    //정수를 문자열로 만들어서 하나씩 더해나가는 방법

    int answer = 0;
    String s = Integer.toString(n); //int n을 String으로 변환

    for (int i = 0; i < s.length(); i++) {
      answer += s.charAt(i) - '0';  //'0' == 49 - 48
      // answer += Integer.parseInt(s.substring(i, i+1));  와 같음.
    }
    return answer;

  }

  public static void main(String[] args) {
    System.out.println(solution(234235));
  }
}

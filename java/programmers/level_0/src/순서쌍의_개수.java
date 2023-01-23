public class 순서쌍의_개수 {

  public int solution(int n) {
    int answer = 0;
        /*
        for(int i = 0; i < n; i++){
            if(n % (i+1) == 0){     //n % i == 0으로 하면 처음에 n % 0에서 오류가 발생
                answer++;
            }
        }*/

    //과연 위 코드가 최선??
    //순서쌍이니까 제곱수까지 계산하게 되면 더 빠르지 않을까?


        /*
        for (int i = 1; i <= Math.sqrt(n); i++) //제곱근의 개수만큼 반복
            if(n % i == 0){ //약수인 경우
                if(n / i == Math.sqrt(n)) answer+= 1;   //n/i 의 몫이 n의 제곱근과 같다면 answer += 1
                else if(n / i != Math.sqrt(n)) answer += 2; //n/i의 n의 제곱근과 같지 않다면 answer += 2;
            }
        */
    //위 코드를 삼항 연산자로도 표현할 수 있지 않을까...??

    for (int i = 1; i <= Math.sqrt(n); i++) {
      answer += (n % i == 0) ? (n / i == Math.sqrt(n) ? 1 : 2) : 0;
    }
    return answer;
  }
}

public class k의_개수 {

    //1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
// 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
    public static int solution(int i, int j, int k) {
        int answer = 0;

        for (; i <= j; i++) { //i부터 j까지 반복
            String str = i + "";

            for (int a = 0; a < str.length(); a++) {
                if (str.charAt(a) - '0' == k) {
                    answer++;
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.println(solution(1, 13, 1)); //6
        System.out.println(solution(10, 50, 5));//5
        System.out.println(solution(3, 10, 2)); //0
    }
}

public class 가까운_수 {

    /*//정수 배열 array와 정수 n이 매개변수로 주어질 때,
    // array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
    public static int solution(int[] array, int n) {

        Arrays.sort(array);
        int[] dif = new int[array.length];

        for (int i = 0; i < array.length; i++) {
            dif[i] = array[i] - n;
            if (dif[i] < 0) {
                dif[i] *= -1;
            }
        }
        int min = dif[0];
        int tmp = 0;

        for (int i = 0; i < dif.length; i++) {
            if (min > dif[i]) {
                min = dif[i];
                tmp = i;
            }
        }
        return array[tmp];
*/
    public static int solution(int[] array, int n) {

        //double min = Double.POSITIVE_INFINITY;

        int min = 101;
        for (int i = 0; i < array.length; i++) {
            if (Math.abs(min - n) > Math.abs(array[i] - n)) {
                min = array[i];
            } else if (Math.abs(min - n) == Math.abs(array[i] - n)) {
                min = Math.min(min, array[i]);
            }
        }
        return min;

    }

    public static void main(String[] args) {
        System.out.println(solution(new int[]{3, 10, 28}, 20));
        System.out.println(solution(new int[]{10, 11, 12}, 13));
        System.out.println(solution(new int[]{11, 12, 9, 14}, 10));
        System.out.println(solution(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 10));
    }
}

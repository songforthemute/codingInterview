import java.util.Arrays;

public class A로_B_만들기 {

    //문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
    public static int solution(String before, String after) {
        char[] beforeArr = new char[before.length()];
        char[] afterArr = new char[after.length()];
        save(beforeArr, before);
        save(afterArr, after);
        Arrays.sort(beforeArr);
        Arrays.sort(afterArr);
        if (Arrays.equals(beforeArr, afterArr)) {
            return 1;
        }
        return 0;
    }

    static void save(char[] arr, String str) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] = str.charAt(i);
        }
    }

    public static void main(String[] args) {
        System.out.println(solution("olleh", "hello"));
        System.out.println(solution("allpe", "apple"));
    }

}

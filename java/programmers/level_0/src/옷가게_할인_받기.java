public class 옷가게_할인_받기 {

  public static void main(String[] args) {

    System.out.println(solution(100000));
  }

  public static int solution(int price) {
    double answer = 0;

    if (price >= 100_000 && price < 300_000) {
      answer = ((double) (price) * 95 / 100);
    } else if (price >= 300_000 && price < 500_000) {
      answer = ((double) (price) * 90 / 100);
    } else if (price >= 500_000) {
      answer = ((double) (price) * 80 / 100);
    } else {
      answer = price;
    }

    return (int) answer;
  }
}

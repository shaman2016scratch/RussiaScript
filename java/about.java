import java.util.Scanner;
public class RussiaScript
{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("О RussiaScript");
    System.out.println("Ваше имя");
    String name = sc.nextLine();
    System.out.println(name);
    System.out.println("Привет, "+name+"!")
    System.out.println("RussiaScript — это язык программирования на JavaScript");
    System.out.println("Также планируются версии RussiaScript для Node.js, python, C, C# и Java");
    System.out.println("Документация: https://shaman2016scratch.github.io/Docs/RussiaScript");
    System.out.println("Статья на SHAMAN2016-WIKI: https://shaman2016scratch.github.io/shaman2016.github.io/wiki/RussiaScript");
  }
}

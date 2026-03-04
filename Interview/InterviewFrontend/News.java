import java.util.*;

public class News{
     void number(String [] args){
        for(int i =0; i <=100; i++){
            System.out.println(i);
        }
    }


    void odd(String [] args){
        for(int i =0; i <=100; i++){
            if( i % 2 != 0){
                System.out.println("Odd : " +i);
            }
        }
    }


     void greaterOdd(String [] args){
        for(int i =0; i <=100; i++){
            if( i % 2 != 0){
                if ( i > 50){
                    System.out.println("Odd : " +i);
                }
            }
        }
    }


    public static void main(String [] args){
        longc digit = 123155211241234L;
        int count =0;

        while( digit > 0){
            digit = digit /10;
            count++;
        }
        System.out.println("count is : " +count);


    }
}
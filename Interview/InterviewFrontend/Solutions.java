import java.util.*;
import java.io.*;
import java.lang.reflect.Array;

public class Solutions{
    public static void main(String[] args) {

        int [] arr = {12,52,12,234,12,1123,4124,1,2,3,4,5,6,7,8,9,10,1,2,4,5,6,78,23,3,452,3,2,354,2,4,5,3};
        // System.out.println(Arrays.toString(arr));


        // for(int i =0; i < arr.length; i++){
        //     System.out.println(arr[i]);
        // }
    
    // for(int num :arr){
    //     System.out.println(num);
    // }
    Arrays.sort(arr);
    ArrayList<Integer> original = new ArrayList<>();
    original.add(arr[0]);
    for(int i =1; i < arr.length; i++){
        if(arr[i] != arr[i -1]){
            
            original.add(arr[i]);
        }
    }
    System.out.println(original);
}
}
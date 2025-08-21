public class hey{

    public static void hollow_pattern(int totRows,int totCols){
        //outer loop 
        for(int i=1;i<=totRows;i++){
            //inner loops
            for(int j=1;j<=totCols;j++){
                //array-(i,j)
                if(i == 1 || i == totRows || j == 1 || j == totCols){
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
    public static void inverted_pyramid(int n){
        //outer loop 
        for(int i=1;i<=n;i++){
            //spaces
            for(int j=0;j<=n-i;j++){
                System.out.print(" ");
            }
            //stars
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void inverted_half_pyramid(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i+1;j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }
    }

    public static void floyds_triangle(int n){
        int counter=1;
        for (int i=1;i<=n;i++) {
            for(int j=1;j<=i;j++){
                System.out.print(counter+"   ");
                counter++;
            }
            System.out.println();
        }
    }

    public static void zero_one_triangle(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if( (i+j) % 2 == 0){
                    System.out.print("1");
                }else{
                    System.out.print("0");
                }
            }
            System.out.println();
        }
    }
    public static void butterfly_pattern(int n){
        for(int i=1;i<=n;i++){
            //stars
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }

            //spaces
            for(int j=1;j<=2*(n-i);j++){
                System.out.print(" ");
            }

            //stars
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }






            System.err.println();
        }

        for(int i=n;i>=1;i--){
            //stars
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }

            //spaces
            for(int j=1;j<=2*(n-i);j++){
                System.out.print(" ");
            }

            //stars
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }

            System.err.println();
        }
        
    }

    public static void solid_rhombus(int n){
        for(int i=1;i<=n;i++){
            //spaces
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //stars
            for(int j=1;j<=n;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }


    public static void hollow_rhombus(int n){
        for(int i=1;i<=n;i++){
            //spaces
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //hollow rectangle-stars
            for(int j=1;j<=n;j++){
                if( i == 1 || i == n || j == 1 || j == n){
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void diamond_pattern(int n){
        for(int i=1;i<=n;i++){
            //spaces
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //stars
            for(int j=1;j<=2*(i-1);j++){
                System.out.print("*");
            }
            System.out.println();
        } 
        //inverted part
        for(int i=n;i>=1;i--){
            //spaces
            for(int j=1;j<=n-i;j++){
                System.out.print(" ");
            }
            //stars
            for(int j=1;j<=2*(i-1);j++){
                System.out.print("*");
            }
            System.out.println();
        }



    }

    public static void main(String args[]){
        hollow_pattern(4,20);
        inverted_pyramid(5);
        inverted_half_pyramid(5);
        floyds_triangle(4);
        zero_one_triangle(5);
        butterfly_pattern(5);
        solid_rhombus(5);
        hollow_rhombus(5);
        diamond_pattern(4);
    }
}

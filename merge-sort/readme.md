# Merge-Sort
Proje 2 [16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız. Big-O gösterimini yazınız.

------------------------------------------------------------------

## Bölme (Divide):

Verilen diziyi ortadan ikiye böleriz.
[16, 21, 11] ve [8, 12, 22] olmak üzere iki alt dizimiz oluşur.

## Sıralama (Sort):

Her alt dizi için merge sort algoritmasını tekrar çağırırız.
2.1. [16, 21, 11]:

[16, 21] ve [11] olacak şekilde ikiye bölünür.
[16] ve [21] sıralanır.
[11] zaten tek elemanlı olduğu için sıralamaya gerek yoktur.
[16, 21, 11] olarak birleştirilir.
2.2. [8, 12, 22]:

[8] ve [12, 22] olacak şekilde ikiye bölünür.
[12] ve [22] sıralanır.
[8, 12, 22] olarak birleştirilir.

## Birleştirme (Merge):

Her alt diziyi sıralı bir şekilde birleştiririz.
[16, 21, 11] ve [8, 12, 22] birleştirilir.
Sıralı olarak: [8, 12, 16, 21, 11, 22].
Bu şekilde sıralama tamamlanmış olur.

Big-O gösterimi: O(n log n)
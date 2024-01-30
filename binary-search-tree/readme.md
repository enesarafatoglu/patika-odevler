# Binary-Search-Tree
Proje 3 [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

----------------------------------------------------------------------

1. Dizinin ilk elemanını kök düğüm yaparız.
2. Dizinin geri kalan elemanlarını sırayla kök düğümün alt ağaçlarına ekleriz, elemanlar BST kurallarına uygun bir şekilde eklenir.
Verilen dizimiz: [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]

1. Kök düğümü belirleyelim: Kök 7 olacak.

1. Kök düğümü belirleyelim: Kök 7 olacak.
2. Sırayla elemanları ekleyelim:
   - 5: 5, 7'nin solunda olduğu için 7'nin sol alt ağacına eklenir.
   - 1: 1, 7 ve 5'in solunda olduğu için 5'in sol alt ağacına eklenir.
   - 8: 8, 7'nin sağından olduğu için 7'nin sağ alt ağacına eklenir.
   - 3: 3, 7 ve 5'in sağından olduğu için 5'in sağ alt ağacına eklenir.
   - 6: 6, 7 ve 5'in sağından olduğu için 5'in sağ alt ağacına eklenir.
   - 0: 0, 7, 5 ve 1'in solunda olduğu için 1'in sol alt ağacına eklenir.
   - 9: 9, 7 ve 8'in sağından olduğu için 8'in sağ alt ağacına eklenir.
   - 4: 4, 7, 5 ve 3'ün sağından olduğu için 3'ün sağ alt ağacına ve ardından 3'ün solunda olduğu için 3'ün sol alt ağacına eklenir.
   - 2: 2, 7, 5, 3 ve 4'ün solunda olduğu için 4'ün sol alt ağacına eklenir.

```
Kök: 7
7'nin solunda: 5
5'nin solunda: 1, 1'nin solunda: 0, 1'nin sağında: 3, 3'ün solunda: 2, 3'ün sağında: 4
7'nin sağında: 8, 8'in sağında: 9
```
# Insertion Sort

Proje 1 [22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması Worst case: Aradığımız sayının sonda olması Best case: Aradığımız sayının dizinin en başında olması.

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız

Insertion Sort: [22, 27, 16, 2, 18, 6] -> (2, 22, 27, 16, 18, 6) [2, 22, 27, 16, 18, 6] -> (2, 6, 22, 27, 16, 18) [2, 6, 22, 27, 16, 18] -> (2, 6, 16, 22, 27, 18) [2, 6, 16, 22, 27, 18] -> (2, 6, 16, 18, 22, 27)

[7, 3, 5, 8, 2, 9, 4, 15, 6] dizisinin Selection Sort'a göre ilk 4 adımı: [2, 3, 5, 8, 7, 9, 4, 15, 6] [2, 3, 4, 8, 7, 9, 5, 15, 6] [2, 3, 4, 5, 7, 9, 8, 15, 6] [2, 3, 4, 5, 6, 9, 8, 15, 7]

Big-O: İşlemler n'den 1'e kadar gideceği için, 1'den n'e kadar olan sayilarin toplami sonucu verecektir. n.(n+1)/2 =n^2

    ->  o(n^2)
Time Complexity: [6,2,16,18,22,27] siralama yandaki gibi olacagindan 6 = Lower , 27 = Higher ve 18 = Middle oluyor

18 = Average Case

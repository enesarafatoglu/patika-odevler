let name = prompt("Bir isim giriniz: ");
let isim = document.getElementById("myName");
let gun_saat = document.getElementById("gun");

function clock(){
    if (name != "" && name!="null") {
        let content = document.getElementById("content");
        content.style.display = "block";
        isim.innerHTML = name;
        console.log(name);
    
        let tarih = new Date();

        let hour = tarih.getHours() <  10 ? "0"+tarih.getHours() : tarih.getHours();
        let minutes = tarih.getMinutes() < 10 ? "0"+tarih.getMinutes() : tarih.getMinutes();
        let seconds = tarih.getSeconds() < 10 ? "0"+tarih.getSeconds() : tarih.getSeconds();
        
        let gun = tarih.getDay();
        let gunbilgisi = "";
        
        let saat = hour + ":" + minutes + ":" + seconds;
        
    
        switch (gun) {
            case 1:
                gunbilgisi = "Pazartesi"
                break;
            case 2:
                gunbilgisi = "Salı"
                break;
            case 3:
                gunbilgisi = "Çarşamba"
                break;
            case 4:
                gunbilgisi = "Perşembe"
                break;
            case 5:
                gunbilgisi = "Cuma"
                break;
            case 6:
                gunbilgisi = "Cumartesi"
                break;
            case 7:
                gunbilgisi = "Pazar"
                break;
        }
    
        let tumbilgi = saat + " " + gunbilgisi;
    
        let bilgi = document.getElementById("gun");
        bilgi.innerHTML = tumbilgi + "<br>tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın Javascript bölümü 1. Ödevindesiniz.";
     
        
    }
    else
    {
        name = prompt("Lütfen bir isim giriniz!");
    }
}

setInterval(clock,1000);

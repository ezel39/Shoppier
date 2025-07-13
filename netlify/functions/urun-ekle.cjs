<script>
  document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const urunAdi = document.getElementById("adi").value;
    const aciklama = document.getElementById("aciklama").value;
    const fiyat = document.getElementById("fiyat").value;
    const gorsel = document.getElementById("gorsel").value;

    const response = await fetch("/.netlify/functions/urun-ekle", {
      method: "POST",
      body: JSON.stringify({ urunAdi, aciklama, fiyat, gorsel })
    });

    const data = await response.json();
    document.getElementById("sonuc").innerText = data.message || "İşlem tamam";
  });
</script>

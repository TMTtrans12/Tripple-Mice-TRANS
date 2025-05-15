document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tourForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const nama = document.getElementById("nama").value;
      const destination = document.getElementById("destination").value;
      const people = document.getElementById("people").value;
      const checkin = document.getElementById("checkin").value;
      const checkout = document.getElementById("checkout").value;
      
      const message = `Halo, saya ingin memesan paket wisata:\n
      - Nama: ${nama}
      - Destinasi: ${destination}
      - Jumlah Orang: ${people}
      - Check-in: ${checkin}
      - Check-out: ${checkout}`;
  
      const phoneNumber = "6289671722797"; // Ganti dengan nomor WhatsApp kamu
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      window.open(url, "_blank");
    });
  });
  
  
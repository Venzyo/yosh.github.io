window.onload = function() {
    var container = document.getElementById('image-container');  // Ambil elemen container
    var numImages = 24;  // Jumlah gambar yang ingin ditambahkan (26 gambar)

    // Loop untuk menambahkan gambar dari neyo.jpg hingga neyo25.jpg
    for (var i = 0; i < numImages; i++) {
        // Buat elemen gambar baru
        var img = document.createElement('img');
        // Mengatur path gambar, dengan gambar pertama adalah neyo.jpg dan selanjutnya neyo1.jpg, neyo2.jpg, ...
        img.src = 'img/neyo' + (i === 0 ? '.jpg' : i + '.jpg');  // Gambar pertama 'neyo.jpg', gambar lainnya 'neyo1.jpg', 'neyo2.jpg', ...
        img.alt = 'Neyo ' + (i);  // Memberikan teks alternatif dengan nomor urut gambar
        img.classList.add('flower');  // Menambahkan kelas 'flower' untuk styling

        // Mengatur posisi acak untuk gambar
        var randomTop = Math.random() * 80;  // Posisi top antara 0% dan 80% dari tinggi container
        var randomLeft = Math.random() * 80;  // Posisi left antara 0% dan 80% dari lebar container
        img.style.top = randomTop + '%';
        img.style.left = randomLeft + '%';

        // Menambahkan gambar ke dalam container
        container.appendChild(img);
    }
};

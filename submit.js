
    function kirimData() {
        var name = document.getElementById("nama").value;
        var notelp = document.getElementById("notelp").value;
        var alamat = document.getElementById("alamat").value;
        var tanggal = document.getElementById("tanggal").value;
        var judulLagu = document.getElementById("Judul Lagu").value;
        var genre = document.querySelector("input[name=genre]:checked").value;
        var kritikSaran = document.getElementById("KritiknSaran").value;
        var type = document.getElementById("type").value;

        alert(
            "Nama: " + name +
            "\nNo Telpon: " + notelp +
            "\nAlamat: " + alamat +
            "\nTanggal: " + tanggal +
            "\nJudul Lagu: " + judulLagu +
            "\nGenre: " + genre +
            "\nKritik & Saran: " + kritikSaran +
            "\nType: " + type
        );
    }

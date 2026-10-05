const nimInput = document.getElementById("nim");
const namaInput = document.getElementById("nama");
const btnAdd = document.getElementById("btnAdd");
const dataMahasiswa = document.getElementById("dataMahasiswa");

// Menampilkan data yang sudah tersimpan
let mahasiswa = JSON.parse(localStorage.getItem("mahasiswa")) || [];

tampilkanData();

btnAdd.addEventListener("click", function() {

    const nim = nimInput.value;
    const nama = namaInput.value;

    if (nim === "" || nama === "") {
        alert("NIM dan Nama harus diisi!");
        return;
    }

    // Masukkan data baru
    mahasiswa.push({
        nim: nim,
        nama: nama
    });

    // Simpan ke localStorage
    localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));

    // Tampilkan data
    tampilkanData();

    // Kosongkan input
    nimInput.value = "";
    namaInput.value = "";
});

function tampilkanData() {

    // Kosongkan tabel terlebih dahulu
    dataMahasiswa.innerHTML = "";

    mahasiswa.forEach(function(data) {

        const row = document.createElement("tr");

        const kolomNim = document.createElement("td");
        kolomNim.textContent = data.nim;

        const kolomNama = document.createElement("td");
        kolomNama.textContent = data.nama;

        row.appendChild(kolomNim);
        row.appendChild(kolomNama);

        dataMahasiswa.appendChild(row);
    });
}
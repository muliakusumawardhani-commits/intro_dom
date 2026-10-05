const nimInput = document.getElementById("nim");
const namaInput = document.getElementById("nama");
const btnAdd = document.getElementById("btnAdd");
const dataMahasiswa = document.getElementById("dataMahasiswa");

btnAdd.addEventListener("click", function() {

    const nim = nimInput.value;
    const nama = namaInput.value;

    if (nim === "" || nama === "") {
        alert("NIM dan Nama harus diisi!");
        return;
    }

    const row = document.createElement("tr");

    const kolomNim = document.createElement("td");
    kolomNim.textContent = nim;

    const kolomNama = document.createElement("td");
    kolomNama.textContent = nama;

    row.appendChild(kolomNim);
    row.appendChild(kolomNama);

    dataMahasiswa.appendChild(row);

    nimInput.value = "";
    namaInput.value = "";
});
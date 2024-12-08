// Membuat elemen HTML menggunakan JavaScript
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.color = "white";
document.body.style.backgroundImage = "url('gambar/download1.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.minHeight = "100vh";

// Kontainer utama
const content = document.createElement("div");
content.className = "content";
content.style.textAlign = "left";
content.style.maxWidth = "90%";
content.style.padding = "20px";
content.style.margin = "20px";
content.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
content.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
content.style.borderRadius = "10px";
document.body.appendChild(content);

// Judul utama
const title = document.createElement("h1");
title.textContent = "Faktor Persekutuan Terbesar (FPB) dan Kelipatan Persekutuan Terkecil (KPK)";
title.style.color = "#2ecc71";
title.style.textAlign = "center";
content.appendChild(title);

// FPB Section
const fpbSectionTitle = document.createElement("h2");
fpbSectionTitle.textContent = "Faktor Persekutuan Terbesar (FPB)";
fpbSectionTitle.style.color = "#2ecc71";
content.appendChild(fpbSectionTitle);

const fpbDescription = document.createElement("p");
fpbDescription.textContent =
  "FPB adalah bilangan bulat terbesar yang dapat membagi dua atau lebih bilangan bulat tanpa sisa.";
content.appendChild(fpbDescription);

// Cara mencari FPB
const fpbStepsTitle = document.createElement("h3");
fpbStepsTitle.textContent = "Cara Mencari FPB";
content.appendChild(fpbStepsTitle);

const fpbSteps = document.createElement("ol");
["Lakukan faktorisasi prima dari masing-masing bilangan.", 
 "Ambil faktor-faktor prima yang sama dengan pangkat terkecil.",
 "Kalikan faktor-faktor tersebut untuk mendapatkan FPB."
].forEach(step => {
  const li = document.createElement("li");
  li.textContent = step;
  fpbSteps.appendChild(li);
});
content.appendChild(fpbSteps);

// Contoh FPB
const fpbExample = document.createElement("div");
fpbExample.className = "example";
fpbExample.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
fpbExample.style.borderLeft = "5px solid #3498db";
fpbExample.style.padding = "10px";
fpbExample.style.margin = "10px 0";
const fpbExampleTitle = document.createElement("h4");
fpbExampleTitle.textContent = "Contoh:";
fpbExample.appendChild(fpbExampleTitle);
const fpbExampleContent = document.createElement("p");
fpbExampleContent.innerHTML = `
Cari FPB dari 18 dan 24:<br>
<code>18 = 2 × 3²</code><br>
<code>24 = 2³ × 3</code><br>
Faktor prima yang sama adalah 2 dan 3. Ambil pangkat terkecil:<br>
<code>FPB = 2 × 3 = 6</code><br>
Jadi, <strong>FPB dari 18 dan 24 adalah 6</strong>.
`;
fpbExample.appendChild(fpbExampleContent);
content.appendChild(fpbExample);

// KPK Section
const kpkSectionTitle = document.createElement("h2");
kpkSectionTitle.textContent = "Kelipatan Persekutuan Terkecil (KPK)";
kpkSectionTitle.style.color = "#2ecc71";
content.appendChild(kpkSectionTitle);

const kpkDescription = document.createElement("p");
kpkDescription.textContent =
  "KPK adalah bilangan bulat positif terkecil yang merupakan kelipatan dari dua atau lebih bilangan.";
content.appendChild(kpkDescription);

// Tabel FPB dan KPK
const tableTitle = document.createElement("h3");
tableTitle.textContent = "Tabel Perbandingan FPB dan KPK";
content.appendChild(tableTitle);

const table = document.createElement("table");
table.style.width = "100%";
table.style.borderCollapse = "collapse";
table.style.margin = "20px 0";
table.style.fontSize = "1.2em";
table.style.backgroundColor = "rgba(255, 255, 255, 0.1)";

const headers = ["Bilangan", "FPB", "KPK"];
const headerRow = document.createElement("tr");
headers.forEach(header => {
  const th = document.createElement("th");
  th.textContent = header;
  th.style.padding = "15px";
  th.style.textAlign = "center";
  th.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  th.style.border = "1px solid #bdc3c7";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

const data = [
  ["18 dan 24", "6", "72"],
  ["30 dan 45", "15", "90"],
  ["12 dan 16", "4", "48"]
];
data.forEach(row => {
  const tr = document.createElement("tr");
  row.forEach(cell => {
    const td = document.createElement("td");
    td.textContent = cell;
    td.style.padding = "15px";
    td.style.textAlign = "center";
    td.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    td.style.border = "1px solid #bdc3c7";
    tr.appendChild(td);
  });
  table.appendChild(tr);
});
content.appendChild(table);

// Footer
const footer = document.createElement("footer");
footer.style.marginTop = "auto";
footer.style.textAlign = "center";
footer.style.padding = "10px 0";
footer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
footer.style.color = "white";
const footerLink = document.createElement("a");
footerLink.href = "NISAA.html";
footerLink.textContent = "Kembali ke halaman utama";
footerLink.style.color = "#3498db";
footer.appendChild(footerLink);
document.body.appendChild(footer);

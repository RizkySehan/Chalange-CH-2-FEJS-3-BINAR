const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
    //Total keuntungan = 3.900.000
    //Total Modal = 10.020.000
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
    //Total keuntungan = 4.788.000
    //Total Modal = 14.325.000
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
    //Total keuntungan = 6.816.000
    //Total Modal = 14.606.000
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
    //Total keuntungan = 260.000
    //Total Modal = 4.180.000
  },
];

function getInfoPenjualan(dataPenjualan) {
  //Check if paramater not arrayObject
  if (!Array.isArray(dataPenjualan)) {
    return "Error: Invalid data type";
  }

  //Make variables to save the arrayObject results
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = null;
  let penulisTerlaris = null;
  let maxTerjual = 0;

  for (const produk of dataPenjualan) {
    totalKeuntungan +=
      (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
    totalModal += produk.hargaBeli * (produk.totalTerjual + produk.sisaStok);

    if (produk.totalTerjual > maxTerjual) {
      maxTerjual = produk.totalTerjual;
      produkBukuTerlaris = produk.namaProduk;
      penulisTerlaris = produk.penulis;
    }
  }

  const presentaseKeuntungan =
    ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";
  const rupiahTotalKeuntungan = totalKeuntungan.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const rupiahTotalModal = totalKeuntungan.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return {
    rupiahTotalKeuntungan,
    rupiahTotalModal,
    presentaseKeuntungan,
    produkBukuTerlaris,
    penulisTerlaris,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
console.log(getInfoPenjualan());

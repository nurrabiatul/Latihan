// Mendefinisikan Kelas
class Skincare {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
    }

    // Metode
    beauty() {
        console.log(`${this.merk} berwarna ${this.warna} sedang berjalan.`);
    }
}

// Pewarisan
class Scpagi extends Skincare {
    constructor(merk, warna, kecepatanPemakaian) {
        super(merk, warna); // Memanggil konstruktor kelas induk
        this.kecepatanPemakaian = kecepatanPemakaian;
    }

    // Overriding Metode
    beauty() {
        console.log(`${this.merk} berwarna ${this.warna} untuk kulit berjerawat ${this.kecepatanPemakaian} bulan.`);
    }
}

// Membuat Objek
const sc1 = new Skincare('Wardah', 'Tosca');
sc1.beauty(); // Output: Wardah berwarna Tosca sedang berjalan.

const sc2 = new Scpagi('Skintific', 'biru', 2);
sc2.beauty(); // Output: Skintific berwarna biru untuk kulit berjerawat 2 bulan.

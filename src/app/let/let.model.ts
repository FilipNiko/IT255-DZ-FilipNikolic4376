export class Let {
    aerodrom: string;
    sifra: string;
    destinacija: string;
    polazak: string;
    dolazak: string;
    biznisKlasa: boolean;
    gratisHrana: boolean;
    direktanLet: boolean;


    constructor(aerodrom: string, sifra: string, destinacija: string, polazak: string, dolazak: string, biznisKlasa: boolean, gratisHrana: boolean, direktanLet: boolean) {
        this.aerodrom = aerodrom;
        this.sifra = sifra;
        this.destinacija = destinacija;
        this.polazak = polazak;
        this.dolazak = dolazak;
        this.biznisKlasa = biznisKlasa;
        this.gratisHrana = gratisHrana;
        this.direktanLet = direktanLet;
    }

}
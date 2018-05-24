import { Jabatan } from './jabatan';
import { Pengguna } from '../user/pengguna';
import { KantorDivisi } from './kantor-divisi';

export class Pegawai {
    id: number;
    nama: string;
    nip: string;
    jabatan: Jabatan;
    pengguna: Pengguna;
    kantorDivisi: KantorDivisi;
}

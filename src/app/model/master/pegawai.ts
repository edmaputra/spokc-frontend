import { Pengguna } from '../user/pengguna';
import { Username, Jabatan, KantorDivisi } from '.';

export class Pegawai {
    id: number;
    nama: string;
    nip: string;
    jabatan: Jabatan;
    pengguna: Pengguna;
    kantorDivisi: KantorDivisi;
    username: Username[];
}

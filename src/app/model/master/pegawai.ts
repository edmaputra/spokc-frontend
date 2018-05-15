import { Jabatan } from './jabatan';
import { Pengguna } from '../user/pengguna';

export class Pegawai {
    id: number;
    nama: string;
    nip: string;
    jabatan: Jabatan[];
    pengguna: Pengguna[];
}

import { Otoritas } from '.';

export class Pengguna {
    id: number;
    username: string;
    password: string;
    passwordKonfirmasi: string;
    accountExpired: boolean;
    accountLocked: boolean;
    credentialsExpired: boolean;
    enabled: boolean;
    authorities: Otoritas[];
}

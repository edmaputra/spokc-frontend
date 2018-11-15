import { Role } from '.';

export class User {
    id: number;
    username: string;
    password: string;
    passwordKonfirmasi: string;
    accountExpired: boolean;
    accountLocked: boolean;
    credentialsExpired: boolean;
    enabled: boolean;
    roles: Role[];
}

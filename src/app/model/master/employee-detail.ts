import { Region, Office, Department, Position, Employee } from '.';

export class EmployeeDetail {
    id: number;
    employee: Employee;
    position: Position;
    department: Department;
    office: Office;
    isActive: boolean;
}

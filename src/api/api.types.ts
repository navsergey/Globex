export interface Employee {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string; // можно также использовать Date после преобразования
}

export type Employees = Employee[];
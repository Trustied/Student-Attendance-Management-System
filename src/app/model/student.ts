export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    faculty: string;
    department: string;
    gender: string;
    state: string;
    country: string;
    is_deleted: boolean;
    createdAt: Date;
}
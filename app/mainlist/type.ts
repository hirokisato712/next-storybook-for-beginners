export interface EmployeeData {
  data: {
    id: string;
    name: string;
    email: string;
    phone: string;
    initial: string;
    hireDate: string;
    color: string;
    isCalendarVisible: boolean;
    role: string;
  }[];
}
export interface PartnerData {
  data: {
    id: string;
    name: string;
    initial: string;
    phone: string;
  }[];
}

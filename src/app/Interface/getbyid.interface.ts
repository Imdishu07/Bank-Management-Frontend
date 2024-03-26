export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: Date;
    aadharNumber: string;
    accountType?: string; // Make accountType optional
    // status?: string; // Make status optional
    balance: number;
  }
  
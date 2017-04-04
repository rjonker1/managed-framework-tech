import { IndustryType, CompanySize, CompanyType, PhysicalAddress } from './index'


export class ClientCompanyInformation {
    id: number;
    companyName: string;
   // industryTypes: Array<IndustryType> = [];
    industryType: IndustryType;
   // companySizes: Array<CompanySize> = [];
    companySize: CompanySize;
    physcialAddress: PhysicalAddress;
    firstName: string;
    surname: string;
    email: string;
    contactNumber: string;
   // companyTypes: Array<CompanyType> = [];;
    companyType: CompanyType;
}
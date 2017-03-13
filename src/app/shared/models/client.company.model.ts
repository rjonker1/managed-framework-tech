import { IndustryType } from './industry.type.model'
import { CompanySize } from './company.size.model'
import { CompanyType } from './company.type.model'
import { PhysicalAddress} from './address.models'


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
import { User, Subscription, Status, Site, Framework, Profile,ClientCompanyInformation } from './index';


export class Registration {
    id: number;
    profile: Profile;
    user: User;
    subscription: Subscription;
    clientCompanyInformation: ClientCompanyInformation;
    status: Status;
    site: Site
    framework: Framework;
    dateCreated: string;
    dateUpdated: string;
    createdBy: User;
    updatedBy: User;
    slug: string;
}
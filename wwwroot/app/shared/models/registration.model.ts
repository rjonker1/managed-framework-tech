import { User } from './user.model';
import { Subscription } from './subscription.model'
import { ClientCompanyInformation } from './client.company.model'
import { Status } from './status.model'
import { Site } from './site.model'
import { Framework } from './framework.model'
import { Profile } from './profile.model'

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
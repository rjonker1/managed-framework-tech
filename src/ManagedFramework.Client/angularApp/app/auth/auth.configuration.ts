import { Injectable } from '@angular/core'
@Injectable()
export  class AuthConfiguration {
     // The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
    iss = 'https://localhost:44363';
    server = 'https://localhost:44363';
    redirect_url = 'https://localhost:44363';

    // This is required to get the signing keys so that the signiture of the Jwt can be validated.
    jwks_url = 'https://localhost:44363/.well-known/openid-configuration/jwks';

    // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
    // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
    client_id = 'singleapp';

    response_type = 'id_token token';
    scope = 'dataEventRecords openid';
    post_logout_redirect_uri = 'https://localhost:44363/Unauthorized'; 
}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var OidcSecurityValidation = (function () {
    function OidcSecurityValidation() {
    }
    OidcSecurityValidation.prototype.IsTokenExpired = function (token, offsetSeconds) {
        var decoded;
        decoded = this.GetPayloadFromToken(token, false);
        var tokenExpirationDate = this.getTokenExpirationDate(decoded);
        offsetSeconds = offsetSeconds || 0;
        if (tokenExpirationDate == null) {
            return false;
        }
        return !(tokenExpirationDate.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    OidcSecurityValidation.prototype.Validate_id_token_nonce = function (dataIdToken, local_nonce) {
        if (dataIdToken.nonce !== local_nonce) {
            console.log('Validate_id_token_nonce failed');
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.Validate_id_token_iss = function (dataIdToken, client_id) {
        if (dataIdToken.iss !== client_id) {
            console.log('Validate_id_token_iss failed');
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.Validate_id_token_aud = function (dataIdToken, aud) {
        if (dataIdToken.aud !== aud) {
            console.log('Validate_id_token_aud failed');
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.ValidateStateFromHashCallback = function (state, local_state) {
        if (state !== local_state) {
            console.log('ValidateStateFromHashCallback failed');
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.GetPayloadFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    OidcSecurityValidation.prototype.GetHeaderFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[0];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    OidcSecurityValidation.prototype.GetSignatureFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[2];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    OidcSecurityValidation.prototype.Validate_signature_id_token = function (id_token, jwtkeys) {
        if (!jwtkeys || !jwtkeys.keys) {
            return false;
        }
        var header_data = this.GetHeaderFromToken(id_token, false);
        var kid = header_data.kid;
        var alg = header_data.alg;
        if ('RS256' != alg) {
            console.log('Only RS256 supported');
            return false;
        }
        var isValid = false;
        for (var _i = 0, _a = jwtkeys.keys; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.kid === kid) {
                var publickey = KEYUTIL.getKey(key);
                isValid = KJUR.jws.JWS.verify(id_token, publickey, ['RS256']);
                return isValid;
            }
        }
        return isValid;
    };
    OidcSecurityValidation.prototype.Validate_id_token_at_hash = function (access_token, at_hash) {
        var hash = KJUR.crypto.Util.hashString(access_token, 'sha256');
        var first128bits = hash.substr(0, hash.length / 2);
        var testdata = hextob64u(first128bits);
        if (testdata === at_hash) {
            return true;
        }
        return false;
    };
    OidcSecurityValidation.prototype.getTokenExpirationDate = function (dataIdToken) {
        if (!dataIdToken.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(dataIdToken.exp);
        return date;
    };
    OidcSecurityValidation.prototype.urlBase64Decode = function (str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    };
    return OidcSecurityValidation;
}());
OidcSecurityValidation = __decorate([
    Injectable()
], OidcSecurityValidation);
export { OidcSecurityValidation };
//# sourceMappingURL=oidc.security.validation.js.map
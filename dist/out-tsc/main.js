import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/main.js.map
import { platformBrowser } from '@angular/platform-browser';
import { PokedexAppModule } from './app/pokedex-app.module';

platformBrowser()
  .bootstrapModule(PokedexAppModule)
  .catch((err) => console.error(err));

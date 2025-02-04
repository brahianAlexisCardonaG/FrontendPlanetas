# planets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Pasos para ejecutar la aplicacion en ambiente dev o local
antes de seguir los pasos es importante que en el archivo package.json,
se cambien las variables de esta manera
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
1. instalar las dependencias con el comando npm run install
2. hacer un nmp run start para que el aplicativo corra en el puerto localhost:4200
3. si desea ejecutar el backend debe tener en cuenta que tambien debe instalar
las dependecias con un npm install
4. para ejecutar el backend lo hacemos con el comando node app.js
5. para que puedas utilizar el backend en el puerto 3000 localhost debes cambiar la
   URL_BASE en el archivo planet.constant.ts que se encuentra en src/core/constants/planet.constant.ts
   cambias la URL_BASE por http//localhost:3000

Con estos pasos puedes ejecuatar la aplicacion de planetas en ambiente dev

la informacion mas relevante sobre la aplicación la encontramos en los siguientes videos 
https://drive.google.com/drive/folders/1biZxyKfkky45JzAliRLLpWnTusI7XTj0?usp=sharing

Las decisiones sobre diseño se tomaron encuenta respecto a las necesidades del usuario, ya que
se solicitaba obtener datos de una api y que mejor forma de una api propia, ademas de mostrar 
datos se pueden hacer otros tipos de peticiones, es decir un CRUD en su totalidad.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

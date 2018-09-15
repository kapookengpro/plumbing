# Plumbing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Install Global 
npm install -g @angular/cli

## Reinstall node_modules It follow package.json
npm install

## Remove node_modules
rm -rf node_modules

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server with open
ng build serve --open or ng build serve -o

## Cancel serve
ctrl + c

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build With App Part
Run `ng build` to build the project. ng build --base-href=`projectname` --prod

## Build To Another Folder
ng build --output-path `dist/production` --prod
ng build --output-path `dist/production` --base-href=plumbing --prod

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Create new component
ng generate component `name_component`

## Create new sub component
ng generate component path/`name_component`

## Create Routing
ng generate module app-routing --flat --module=app

## Create Service
ng g service api

#Cordova install
plumbing>npm i -g cordova

#datable
npm i angular-6-datatable --save

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Install Ionic
npm install -g ionic

## Install Ionic
ionic start ionic4-angular-new tabs --type=angular
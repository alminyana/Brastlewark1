# Axa1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Summary

### Technologies

Angular CLI: 7.3.10 | 
Node: 10.16.3 | 
OS: linux x64 | 
Angular: 7.2.16

The main branch with all the changes is 'master' which is a copy of 'develop'. Develop is the branch where the feature/TD branches  are merged, so i didn't use epic branches for this project.

I have tryed to achieve all technical requirements except to cache the image url.
I didn't have experience working with Redux at my job position, so I implemented a basic structure of Redux in the app, passing the new state to the Store service with Actions and Reducers and subscribing the component to the Store in order to get the data to show.
The list of specs is not large but they are all in green. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

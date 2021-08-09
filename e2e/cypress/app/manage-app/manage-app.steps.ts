// Ideally we use paths here, but made it simple for exclusion of plugins.
import { AppPo } from '@app/app.po';
// import { AppPo } from '../../../../src/app/app.po';
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I see the app page', () => {
  cy.visit('/');
  new AppPo().isVisible();
});

When('I add a component', () => {
  new AppPo().addComponent();
});

Then('I see how to add a component', () => {
  new AppPo().hasComponentInstructions();
});

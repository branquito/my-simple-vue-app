
Feature('Welcome');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.wait(3);
  I.see('Welcome');
});

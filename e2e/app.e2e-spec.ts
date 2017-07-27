import { AngularMaterializePage } from './app.po';

describe('angular-materialize App', () => {
  let page: AngularMaterializePage;

  beforeEach(() => {
    page = new AngularMaterializePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

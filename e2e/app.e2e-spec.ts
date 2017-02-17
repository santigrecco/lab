import { DeloitteLabPage } from './app.po';

describe('deloitte-lab App', function() {
  let page: DeloitteLabPage;

  beforeEach(() => {
    page = new DeloitteLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

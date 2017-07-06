import { LineupPage } from './app.po';

describe('lineup App', () => {
  let page: LineupPage;

  beforeEach(() => {
    page = new LineupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { DataMiningProjectPage } from './app.po';

describe('data-mining-project App', () => {
  let page: DataMiningProjectPage;

  beforeEach(() => {
    page = new DataMiningProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

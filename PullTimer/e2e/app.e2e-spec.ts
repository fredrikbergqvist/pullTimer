import { PullTimerPage } from './app.po';

describe('pull-timer App', () => {
  let page: PullTimerPage;

  beforeEach(() => {
    page = new PullTimerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { GitHubBattlePage } from './app.po';

describe('git-hub-battle App', () => {
  let page: GitHubBattlePage;

  beforeEach(() => {
    page = new GitHubBattlePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

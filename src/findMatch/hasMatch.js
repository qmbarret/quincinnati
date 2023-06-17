export class HasMatch {
  static Unknown = new HasMatch('unknown');
  static JoinedMatch = new HasMatch('joinedMatch');
  static NoMatch = new HasMatch('unauthenticated');

  constructor(gameID) {
    this.gameID = gameID;
  }
}

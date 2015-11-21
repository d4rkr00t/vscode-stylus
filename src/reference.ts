import {ReferenceProvider, TextDocument, Position, CancellationToken, Location, workspace} from 'vscode';

export class StylusReferenceProvider implements ReferenceProvider {
  public provideReferences(document: TextDocument, position: Position, options: { includeDeclaration: boolean }, token: CancellationToken): Thenable<Array<Location>> {
    return workspace.saveAll(false).then(() => {
      return new Promise((resolve, reject) => {
        const references: Array<Location> = [];
        resolve(references);
      });
    });
  }
}

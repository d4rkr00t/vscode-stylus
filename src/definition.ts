import {DefinitionProvider, TextDocument, Position, CancellationToken, Location, Range, Uri} from 'vscode';

export class StylusDefinitionProvider implements DefinitionProvider {
  public provideDefinition(document: TextDocument, position: Position, token: CancellationToken): Thenable<Location> {
    return new Promise((resolve, reject) => {
      const definitionResource = Uri.file('TODO');
      const range = new Range(0, 0, 0, 0);
      resolve(new Location(definitionResource, range));
    });
  }
}

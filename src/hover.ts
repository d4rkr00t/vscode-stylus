import {HoverProvider, Hover, TextDocument, Position, CancellationToken} from 'vscode';

export class StylusHoverProvider implements HoverProvider {
  public provideHover(document: TextDocument, position: Position, token: CancellationToken): Thenable<Hover> {
    return new Promise((resolve, reject) => {
      const hover = new Hover({
        language: 'stylus',
        value: 'TODO'
      });

      resolve(hover);
    });
  }
}

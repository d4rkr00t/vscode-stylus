import {DocumentFormattingEditProvider, TextDocument, FormattingOptions, CancellationToken, TextEdit, Range} from 'vscode';

export class StylusDocumentFormattingEditProvider implements DocumentFormattingEditProvider {
  public provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): Thenable<Array<TextEdit>> {
    return document.save().then(() => {
      return new Promise((resolve, reject) => {
        const range = new Range(0, 0, 0, 0);
        resolve(new TextEdit(range, 'TODO'));
      });
    });
  }
}

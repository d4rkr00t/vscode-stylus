import {CompletionItem, CompletionItemKind, CompletionItemProvider, TextDocument, Position, CancellationToken} from 'vscode';

export class StylusCompletionItemProvider implements CompletionItemProvider {
  public provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): Thenable<Array<CompletionItem>> {
    return new Promise((resolve, reject) => {
      const items: Array<CompletionItem> = [];

      const item = new CompletionItem('TODO');
      item.detail = 'TODO';
      item.kind = CompletionItemKind.Field;
      item.sortText = `00_${item.label}`;

      items.push(new CompletionItem('TODO'));
      resolve(items);
    });
  }
}

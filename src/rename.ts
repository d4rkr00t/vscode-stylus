import {RenameProvider, TextDocument, Position, CancellationToken, WorkspaceEdit, workspace} from 'vscode';

export class StylusRenameProvider implements RenameProvider {
  public provideRenameEdits(document: TextDocument, position: Position, newName: string, token: CancellationToken): Thenable<WorkspaceEdit> {
    return workspace.saveAll(false).then(() => {
      return new Promise((resolve, reject) => {
        const edits: WorkspaceEdit = new WorkspaceEdit();
        resolve(edits);
      });
    });
  }
}

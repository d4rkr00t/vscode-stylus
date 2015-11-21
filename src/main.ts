import {DiagnosticCollection, ExtensionContext, languages} from 'vscode';
import {STYLUS_MODE} from './mode';
import {STYLUS_LANGUAGE_CONFIGURATION} from './language-configuration';
import {StylusHoverProvider} from './hover';
import {StylusCompletionItemProvider} from './intellisense';
import {StylusDefinitionProvider} from './definition';
import {StylusReferenceProvider} from './reference';
import {StylusDocumentFormattingEditProvider} from './format';
// import {StylusDocumentSymbolProvider} from './symbol'
import {StylusRenameProvider} from './rename';

let diagnosticCollection: DiagnosticCollection;

export function activate(context: ExtensionContext) {
  diagnosticCollection = languages.createDiagnosticCollection('stylus');

  context.subscriptions.push(
    languages.registerHoverProvider(STYLUS_MODE, new StylusHoverProvider()),
    languages.registerCompletionItemProvider(STYLUS_MODE, new StylusCompletionItemProvider(), ' ', ':'),
    languages.registerDefinitionProvider(STYLUS_MODE, new StylusDefinitionProvider()),
    languages.registerReferenceProvider(STYLUS_MODE, new StylusReferenceProvider()),
    languages.registerDocumentFormattingEditProvider(STYLUS_MODE, new StylusDocumentFormattingEditProvider()),
    // languages.registerDocumentSymbolProvider(STYLUS_MODE, new StylusDocumentSymbolProvider()),
    languages.registerRenameProvider(STYLUS_MODE, new StylusRenameProvider()),
    diagnosticCollection
  );

  languages.setLanguageConfiguration(STYLUS_MODE.language, STYLUS_LANGUAGE_CONFIGURATION);

  console.log('Extension "vscode-stylus" activated!');
}

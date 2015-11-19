declare module 'vscode/lib/testrunner' {
  interface ITestRunnerConfiguration {
    ui: string;
    useColors: boolean;
  }

  export function configure(configs: ITestRunnerConfiguration);
}

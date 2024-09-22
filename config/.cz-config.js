module.exports = {
  // Angular conventionを参考にしている
  // https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
  types: [
    { value: "✨feat", name: "✨feat\t機能追加、更新、削除" },
    { value: "🐛fix", name: "🐛fix\t\tバグ修正" },
    {
      value: "📝docs",
      name: "📝docs\tドキュメントやコメントの追加、更新、削除",
    },
    {
      value: "💄style",
      name: "💄style\tプログラムの動きに影響のない変更、フォーマッターの適用",
    },
    { value: "🔨refactor", name: "🔨refactor\tリファクタリング" },
    { value: "✅test", name: "✅test\tテストの追加、更新、削除" },
    { value: "⚡perf", name: "⚡perf\t性能改善" },
    { value: "⚙️ build", name: "⚙️ build\tビルド設定の変更" },
    { value: "📦ci", name: "📦ci\t\tCI設定の変更" },
    { value: "🚧wip", name: "🚧wip\t\t作業途中" },
    { value: "🔧chore", name: "🔧chore\t設定関連の変更" },
  ],

  scopes: [],

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  // ticketNumberPrefix: "TICKET-",
  // ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "今回の修正の種類を選んでください: ",
    subject: "変更内容を簡潔に記述してください (例: hogeを追加): ",
    body: "補足説明がある場合は記述してください (例: - fooをbarに変更) (Press Enter to skip): ",
    footer:
      "関連するチケット番号を追記してください (例: #12345, #23456) (Press Enter to skip): ",
    confirmCommit: "上記の内容でコミットしますか？",
  },

  allowCustomScopes: false,
  // allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["scope", "breaking"],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: "|", // It is supported for fields body and footer.
  footerPrefix: "🎫refs:",
  // askForBreakingChangeFirst : true, // default is false
};

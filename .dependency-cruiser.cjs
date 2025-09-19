// @ts-check
/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    /* Which modules not to follow further when encountered */
    doNotFollow: {
      /* path: an array of regular expressions in strings to match against */
      path: ["node_modules"],
    },

    // packages 配下だけ対象にする
    includeOnly: "^packages",

        // dot（Graphviz）レポーター向けのオプションはここに入れる
    reporterOptions: {
      dot: {
        // パッケージ直下で畳む（例: packages/foo/... を packages/foo にまとめる）
        collapsePattern: '^packages/[^/]+/',

        // さらに出力をパッケージ配下に限定したければ filters を使う
        filters: {
          includeOnly: {
            path: '^packages'
          }
        },
      }
    },
  },
};

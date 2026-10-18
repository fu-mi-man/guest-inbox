export default {
  input: ".build/main.js", // 変換済みのJavaScriptをまとめる
  output: {
    file: "dist/main.js", // 生成先
    format: "iife", // import・exportを残さずまとめる形式
    name: "GuestInbox", // 外から呼び出すための名前
    sourcemap: true, // 結合前のJavaScriptとの対応情報を生成
  },
};

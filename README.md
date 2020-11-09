<h1 align="center">タスク管理アプリ（TODO-app）</h1>

## :globe_with_meridians: タスク管理アプリ（TODO-app）とは
- railsのscaffold試用アプリケーションです。
- 実施したいことを登録することで、登録したタスクをリスト管理できます。

## :globe_with_meridians: 使用した技術、言語、ツールなど
<a><img src="https://user-images.githubusercontent.com/39142850/71774533-1ddf1780-2fb4-11ea-8560-753bed352838.png" width="70px;" /></a> <!-- rubyのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774548-731b2900-2fb4-11ea-99ba-565546c5acb4.png" height="60px;" /></a> <!-- RubyOnRailsのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774618-b32edb80-2fb5-11ea-9050-d5929a49e9a5.png" height="60px;" /></a> <!-- Hamlのロゴ -->
<a><<img src="https://user-images.githubusercontent.com/39142850/71774644-115bbe80-2fb6-11ea-822c-568eabde5228.png" height="60px" /></a> <!-- Scssのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774768-d064a980-2fb7-11ea-88ad-4562c59470ae.png" height="65px;" /></a> <!-- jQueryのロゴ -->

- 言語
    - サーバーサイド: Ruby
    - フロント: SASS, HTML (HAML), JavaScript (jQuery)
- アプリケーションフレームワーク: Ruby on Rails
- データベース: PostgreSQL
- ソースコード管理: Github
- コードレビューツール: Sider　Rubocop
- デプロイ: heroku 
    - https://fierce-mountain-70409.herokuapp.com/

## :globe_with_meridians: データベース設計
### tasksテーブル
|Column|Type|Options|
|------|----|-------|
|title|string||

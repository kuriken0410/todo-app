<h1 align="center">タスク管理アプリケーション（Todo-app）</h1>

## :globe_with_meridians: Todo-appとは
- タスク管理アプリケーションです。
- 実施したいことを登録することで、登録したタスクをリスト管理できます。

![キャプチャ動画](https://i.gyazo.com/714267011c1b4daf70c54d854b720c31.gif)

## :globe_with_meridians: 機能一覧
- 実施したいタスクの登録機能。
- 登録したタスクの詳細表示機能。
- 登録したタスクの編集（内容の変更）機能。
- 登録したタスクの削除機能。

## :globe_with_meridians: 使用した技術、言語、ツールなど
<a><img src="https://user-images.githubusercontent.com/39142850/71774533-1ddf1780-2fb4-11ea-8560-753bed352838.png" width="70px;" /></a> <!-- rubyのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774548-731b2900-2fb4-11ea-99ba-565546c5acb4.png" height="60px;" /></a> <!-- RubyOnRailsのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774618-b32edb80-2fb5-11ea-9050-d5929a49e9a5.png" height="60px;" /></a> <!-- Hamlのロゴ -->
<a><<img src="https://user-images.githubusercontent.com/39142850/71774644-115bbe80-2fb6-11ea-822c-568eabde5228.png" height="60px" /></a> <!-- Scssのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774768-d064a980-2fb7-11ea-88ad-4562c59470ae.png" height="65px;" /></a> <!-- jQueryのロゴ -->
### ■ 言語

#### バックエンド
* Ruby 2.6.5

#### フロントエンド
* Haml 5.1.2
* Sass 2.4.0
* jquery-rails 4.4.0

### ■ フレームワーク
* Ruby on Rails 6.0.3.4

### ■ データベース
* PostgreSQL 1.2.3

### ■ デプロイ
* heroku
* https://fierce-mountain-70409.herokuapp.com

### ■ コードレビューツール
* Sider
* Rubocop 0.92.0

## :globe_with_meridians: インストール方法
1.このリポジトリを複製<br>
`$ git clone https://github.com/kuriken0410/todo-app`

2.インストールしたリポジトリに移動<br>
`$ cd todo-app`

3.gemをアプリケーションに適用<br>
`$ bundle install`<br>

4.データベースの作成&反映<br>
`$ rails db:create`<br>
`$ rails db:migrate`<br>

5.アプリケーションの起動<br>
`$ rails s`<br>
:point_right:`http://localhost:3000`

## :page_facing_up: データベース設計
### tasksテーブル
|Column|Type|Options|
|------|----|-------|
|title|string||

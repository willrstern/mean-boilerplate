### Requirements

- Node/NPM
- [Bundler](http://bundler.io/)


### Installation

```shell
$ sudo bundle install
$ npm install
```


### Usage

```
$ grunt
```

`NODE_ENV` testing:

```
$ NODE_ENV=staging grunt server
```


### Provisioning

```shell
$ user=[USER] password=[PASSWORD] bundle exec cap [staging|production] provision
```


### Deployment

#### `master`

```shell
$ bundle exec cap [staging|production] deploy
```

#### Specific Branch

```shell
branch=[BRANCH] bundle exec cap staging deploy
```

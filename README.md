[EDUDirect Admin][0]

> Powered by [Genesis Skeleton](https://github.com/ericclemmons/genesis-skeleton)

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
$ grunt server
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


[0]: http://edudirect.cmn.com/
[1]: http://genesis-skeleton.com/

---
id: cli
title: aim CLI
sidebar_label: CLI
---
aim CLI is a git-like tool that allows to push, pull the results of experiments.

## aim init
Initializes the aim repository.
```sh
# cd to the repo for the model training code
aim init
```
Creates `.aim` folder in the folder where all the tracking info is saved.

## aim remote
Adds remote to the aim repo to push the training info to.
```sh
aim remote add -n origin -u <origin url>
```
List the remotes addes to the repo
```sh
aim remote ls
```
Remove remote from the list of remotes
```sh
aim remote rm -n origin
```

Other options
- `-n` or `--name` name of the remote (such as `origin`)
- `-u` or `--url` url of the remote ()

## aim push
Push the Training Info to the remote
```sh
aim push -r <remote_name>
```
Other options
- `-r` or `--remote` the name of the remote to push to

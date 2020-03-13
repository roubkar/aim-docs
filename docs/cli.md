---
id: cli
title: aim CLI
sidebar_label: command line interface
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

## aim commit
Commit the run to remote.
```sh
aim commit -m "<Commit Message>"
```
**Note**: work can only be pushed after it's committed

## aim push
Push the Training Info to the remote
```sh
aim push -r <remote_name>
```
Other options
- `-r` or `--remote` the name of the remote to push to

## aim branch
Create different experiment branches for your project.
```sh
aim branch add -n <branch_name>
```
Checkout to an existing branch
```sh
aim branch checkout -n <branch_name>
```
List all the branches
```sh
aim branch ls
```
Delete branch
```sh
aim branch rm -n <branch_name>
```

## aim auth
Aim auth allows the users to seamlessly auth in their remote servers
```sh
aim auth -a <remote_address>
```
Will produce the key that need to be copy-pasted in the settings of the user


## aim board
Follow your training live with aim board.
Aim Board is the stripped down version of the Hub that lets users to follow live training
Run aim board in project folder
```shell
aim board up
```
Turn off the board in project folder
```shell
aim board down
```

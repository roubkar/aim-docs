---
id: quick_start
title: Qucik Start
---
The following guide will show you how to quickly get up and running with aim experimnents.

## Install

```sh
pip install aim-cli   # downloads the aim cli and sdk at once
```

## Project Setup


- Go to [aimhub](https://aimhub.io)
- Go to your profile
- Open new Project
- Fill in the name <train-mnist>


```sh
mkdir /path/to/project/train-mnist
cd /path/to/project/train-mnist
aim init
aim remote add -n origin -u http://aimhub.io/<username>/<train-mnist>
```

## Train Model
```sh
# download train file and requirements file
wget https://raw.githubusercontent.com/aimhubio/examples/master/pytorch/train_mnist.py
wget https://raw.githubusercontent.com/aimhubio/examples/master/pytorch/requirements.txt
# install the required dependencies
pip install -r requirements.txt
# train the mnist model
python -e 5 train_mnist.py
```

## Push Training Info
```sh
aim push
```

## Pull Training Info / Collaborate
```sh
aim pull
```

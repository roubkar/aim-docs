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

## Authentication

Authentication at aimhub remote requires creating a key and setting it up in the user settings ui.
Here is how to accomplish that:
### Step 1
Run the following command
```sh
  aim auth -a <your aimhub remote domain url> # https://aimhub.io
```
Produces a key which need to be copy pasted in the key section in user settings
Here is how the output of that command looks like:

<img src="https://docs.aimhub.io/img/aimhub-key-generate.png" width="650">

### Step 2
Go to aimhub remote user settings by clicking at the profile image at the top right, selecting `Settings`:

<img src="https://docs.aimhub.io/img/aimhub-settings-page.png" width="650">

### Step 3
Insert the key into the settings page.
Press create to insert the key.

<img src="https://docs.aimhub.io/img/aimhub-key-create.png" width="650">

3. Insert the key and press creaate

<img src="https://docs.aimhub.io/img/aimhub-key-inserted.png" width="650">

The expected outcome - key installed successfully:
<img src="https://docs.aimhub.io/img/aimhub-key-saved.png" width="650">

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

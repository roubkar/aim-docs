---
id: quick-start
title: Quick Start
metaTitle: "Quick Start | AIM Docs"
metaDescription: ""
---

The following guide will show you how to quickly get up and running with aim experiments.

## Install

```shell
pip install aim-cli   # downloads the aim cli and sdk at once
```

## Project Setup


- Go to [aimhub](https://aimhub.io)
- Go to your profile
- Open new Project
- Fill in the name <span><</span>train-mnist<span>></span>


```shell
mkdir /path/to/project/train-mnist
cd /path/to/project/train-mnist
aim init
aim remote add -n origin -u http://aimhub.io/<username>/<train-mnist>
```

## Authentication

Authentication at aimhub remote requires creating a key and setting it up in the user settings UI.
Here is how to accomplish that:

### Step 1
Retrieve your authentication key by running the following commands:


<Tabs defaultTab="one">
    <TabList>
        <Tab tabFor="one">Tab 1</Tab>
        <Tab tabFor="two">Tab 2</Tab>
        <Tab tabFor="three">Tab 3</Tab>
    </TabList>
<TabPanel tabId="one">

```sh
aim auth -a <your aimhub remote domain url> | pbcopy
# Copies the key to your clipboard
```

</TabPanel>
<TabPanel tabId="two">

```sh
sudo apt-get install xclip
# Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)
aim auth -a <your aimhub remote domain url> | xclip -o -sel clip
# Copies the key to your clipboard
```

</TabPanel>
<TabPanel tabId="three">

```sh
aim auth -a <your aimhub remote domain url> | clip
# Copies the key to your clipboard
```

</TabPanel>
</Tabs>

The command produces a key which need to be pasted in the key section in user settings; follow steps to know how.

### Step 2
Go to aimhub remote user settings by clicking at the profile image at the top right, selecting `Settings`:

<img src="/img/aimhub-settings-page.png" width="650" />

### Step 3
Insert the key into the settings page.
Press create to insert the key.

<img src="/img/aimhub-key-create.png" width="650" />

3. Paste the key and press create

<img src="/img/aimhub-key-inserted.png" width="650" />

The expected outcome - key installed successfully:
<img src="/img/aimhub-key-saved.png" width="650" />

## Train Model
```sh
# download train file and requirements file
wget https://raw.githubusercontent.com/aimhubio/aim/develop/examples/pytorch_track_all.py
wget https://raw.githubusercontent.com/aimhubio/aim/develop/examples/requirements.txt
# install the required dependencies
pip install -r requirements.txt
# train the mnist model
python pytorch_track_all.py
```

## Commit and Push Training Info
```sh
aim commit -m "<commit message>"
aim push
```
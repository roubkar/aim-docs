---
id: sdk
title: aim SDK
sidebar_label: python client
---
aim SDK is a very simple and easy to learn tool that saves the info about the

```py
import aim
from aim import track
```

## Track

Tracking allows the user to save the intermediate values of tensors, scalars and other debugging metrics. It looks like this:
```py
aim.track('name-of-the-component', params)
```

### Loss
Loss is tracked in the following way:
```py
track(aim.loss, 'name of the loss', '0.2') # 0.2 is the loss
```

### Metric
aim SDK allows to track any metrics. Loss is a specific case of `metric`
Here is an example:

```py
track(aim.metric, 'name of the metric', 0.5) # 0.5 is the value that needs to be passed
```
Metrics are automatically translated into line charts on the aim hub ui.

### Misclassification
Misclassifications allow to track the correct lable, image and what actually was classified. It looks like this:

First, save the image:
```py
img = track(aim.image, image_tensor)
```
Track the misclassification:
```py
track(aim.misclassifiction, 'name of the component', img, <label>, <NN output>)
```

### Checkpoint & Meta Info
Tracking checkpoints allows to save checkpoints at different epochs to be able to pick the best.
Aim SDK allows to save arbitrary type of data along with checkpoints. Here is how it works:
```py
track(aim.checkpoint, 'saved checkpoint name', 'epoch_name',
      model, epoch, lr_rate=learning_rate,
      meta={
        'any data': 'any value'
      })
```

### Weights, Biases & Gradients
Track weights, biases and Gradients with one line on any iteration:
```py
track(aim.weights, model)
track(aim.gradients, model)
# Where model is the PyTorch model object
```

### Visualize code changes
In order to visualize the code changes, make sure to run
```shell
git add -A
```
so `aim` starts to track the individual code changes for each new run.

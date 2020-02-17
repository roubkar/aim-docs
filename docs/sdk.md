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

## Init

Initialize Aim Version Control from the code (substitutes CLI `aim init`)

```py
# Add the following code to the beginning of your training code
# Initializes the aim repo immediately with the first run
# The aim repo will initialize only once unless overwrite is set to True
aim.init(overwrite=False)
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


### Profiler
Add Resource profiling for nodes, layers and other parts of the ML code.

Here are examples:
<div>
<!--DOCUSAURUS_CODE_TABS-->
<!--PyTorch-->

```py
# Label blocks of code in PyTorch and profile their execution
from aim import Profiler

Profiler.label('sleep_1')
time.sleep(0.3)
Profiler.loop('sleep_1')
```
<!--Tensorflow-->

```py
# Profile parts of tf graph by wrapping them with training layers
from aim import Profiler

layer_2 = Profiler.tf.label('layer2', inp=layer_1)
layer_2 = tf.add(tf.matmul(layer_2, weights['h2']), biases['b2'])
layer_2 = Profiler.tf.loop('layer2', inp=layer_2)
```

<!--Keras-->

```py
# Label and profiel an entire layer in Keras
from aim import Profiler

model = Sequential()

model.add(Profiler.keras.label('conv'))
model.add(Conv2D(32, kernel_size=(3, 3),
                 activation='relu',
                 input_shape=input_shape))
model.add(Conv2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))
model.add(Profiler.keras.loop('conv'))
```

<!--END_DOCUSAURUS_CODE_TABS-->
</div>

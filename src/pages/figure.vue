<template>
  <div id="app">
    <canvas id="testCanvas" width="960" height="400"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted: function () {
    var canvas, stage;
    // var mouseTarget // the display object currently under the mouse, or being dragged
    // var dragStarted; // indicates whether we are currently in a drag operation
    // var offset;
    var update = true;
    examples.showDistractor();
    // create stage and point it to the canvas:
    canvas = document.getElementById('testCanvas');
    stage = new createjs.Stage(canvas);
    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stage);
    // enabled mouse over / out events
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
    // load the source image:
    var image = new Image();
    image.src = '../_assets/art/daisy.png';
    image.onload = handleImageLoad;
    // function stop() {
    //   createjs.Ticker.removeEventListener('tick', tick);
    // }
    function handleImageLoad(event) {
      var image = event.target;
      var bitmap;
      var container = new createjs.Container();
      stage.addChild(container);
      // create and populate the screen with random daisies:
      for (var i = 0; i < 100; i++) {
        bitmap = new createjs.Bitmap(image);
        container.addChild(bitmap);
        bitmap.x = canvas.width * Math.random() | 0;
        bitmap.y = canvas.height * Math.random() | 0;
        bitmap.rotation = 360 * Math.random() | 0;
        bitmap.regX = bitmap.image.width / 2 | 0;
        bitmap.regY = bitmap.image.height / 2 | 0;
        bitmap.scaleX = bitmap.scaleY = bitmap.scale = Math.random() * 0.4 + 0.6;
        bitmap.name = 'bmp_' + i;
        bitmap.cursor = 'pointer';
        // using "on" binds the listener to the scope of the currentTarget by default
        // in this case that means it executes in the scope of the button.
        bitmap.on('mousedown', function (evt) {
          this.parent.addChild(this);
          this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
        });
        // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
        bitmap.on('pressmove', function (evt) {
          this.x = evt.stageX + this.offset.x;
          this.y = evt.stageY + this.offset.y;
          // indicate that the stage should be updated on the next tick:
          update = true;
        });
        bitmap.on('rollover', function (evt) {
          this.scaleX = this.scaleY = this.scale * 1.2;
          update = true;
        });
        bitmap.on('rollout', function (evt) {
          this.scaleX = this.scaleY = this.scale;
          update = true;
        });
      }
      examples.hideDistractor();
      createjs.Ticker.addEventListener('tick', tick);
    }
    function tick(event) {
      // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
      if (update) {
        update = false; // only update once
        stage.update(event);
      }
    }
  },
  methods: {
  }
}
</script>

<style>
svg {
  display: block;
}

polygon {
  fill: #41B883;
}

circle {
  fill: transparent;
  stroke: #35495E;
}

input[type='range'] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>

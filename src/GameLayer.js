var GameLayer = cc.LayerColor.extend({
  init: function() {
    this._super( new cc.Color( 0, 0, 0, 255 ) );
    this.setPosition( new cc.Point( 0, 0 ) );

    this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
    this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
    this.addChild( this.scoreLabel );
    this.scheduleUpdate();

    this.addKeyboardHandlers();
    this.dot = new Dot();
    this.dot.setPosition( new cc.Point( 400, 300 ) );
    this.addChild( this.dot );
    this.dot.scheduleUpdate();

    // this.whitedot = new Whitedot();
    // this.dot.setPosition( new cc.Point( 400, 300 ) );
    // this.addChild( this.whitedot );
    // this.whitedot.scheduleUpdate();

    // this.test();

    // this.gold = new Gold();
    // this.addChild( this.gold );
    // // this.gold.setPosition(new cc.Point(400, 400));
    // this.gold.randomPosition();
    // this.scheduleUpdate();

    return true;
  },
  onKeyDown: function( keyCode, event ) {
    if ( keyCode == cc.KEY.right ) {
      this.dot.rightDirection();
    }
    else if ( keyCode == cc.KEY.up ) {
      this.dot.upDirection();
    }
    else if ( keyCode == cc.KEY.left ) {
      this.dot.leftDirection();
    }
    else if ( keyCode == cc.KEY.down ) {
      this.dot.downDirection();
    }
  },
  onKeyUp: function( keyCode, event ) {
    console.log( 'Up: ' + keyCode.toString() );
  },
  addKeyboardHandlers: function() {
    var self = this;
    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,
      onKeyPressed : function( keyCode, event ) {
        self.onKeyDown( keyCode, event );
      },
      onKeyReleased: function( keyCode, event ) {
        self.onKeyUp( keyCode, event );
      }
    }, this);
  },
  // update : function (){
  //   var n = 3;
  //   var dotpos = new Array(2);
  //   var v = 1;
  //
  //   for(var i=0;i<n;i++){
  //     dotpos[i] = new Array(n);
  //   }
  //
  //   for(var i=0;i<n;i++){
  //     dotpos[0][i] = 400;
  //     dotpos[1][i] = 300;
  //   }
  //
  //   for(var i=0;i<2;i++){
  //     for(var j=0;j<n;j++){
  //       console.log(dotpos[i][j]);
  //     }
  //   }
  //   var x = 100;
  //   while(x>0){
  //     for(var i=0;i<n;i++){
  //       if(Math.abs(dotpos[0][i] + v) > 600) v = v*(-1);
  //       if(Math.abs(dotpos[1][i] + v) > 600) v = v*(-1);
  //
  //     }
  //
  //     for(var i=0;i<n;i++){
  //       dotpos[0][i] = dotpos[0][i] + v;
  //       dotpos[1][i] = dotpos[1][i] + v;
  //       console.log(dotpos[0][i]);
  //     }
  //
  //     for(var i=0;i<n;i++){
  //       this.whitedot.setPosition( new cc.Point( dotpos[0][i] , dotpos[1][i] ) );
  //     }
  //     x--;
  //   }
  // },
  // update: function() {
  //
  //   if ( this.gold.closeTo( this.ship ) ) {
  //     var score = 0;
  //     this.scoreLabel.setString( score+1 );
  //     this.gold.randomPosition();
  //   }
  // },
});

var StartScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    var layer = new GameLayer();
    layer.init();
    this.addChild( layer );
  }
});
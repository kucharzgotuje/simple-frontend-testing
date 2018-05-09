var testing = {
  i: 0,
  o: 0,
  time: 100,
  amountOfCycles: 10,
  totalTime: function () {
    return ( this.time * 1999 ) + (2 * this.time)
  },
  stopInterval: function(int, when, interval){
    if (int >= when) {
      clearInterval(interval)
    }
  },
  insideLoopInterval: null,
  outsideLoopInterval: null,
  insideLoop: function () {
    var time = this.time
    insideLoopFunction = this.insideLoopFunction.bind(this)
    this.insideLoopInterval = setInterval(insideLoopFunction, time)
  },
  outsideLoop: function () {
    var totalTime = this.totalTime()
    outsideLoopFunction = this.outsideLoopFunction.bind(this)
    this.outsideLoopInterval = setInterval(outsideLoopFunction, totalTime)
  },
  insideLoopFunction: function () {
    this.testTaskInside();
    this.stopInterval(this.o, 1999, this.insideLoopInterval)
    this.o++
  },
  outsideLoopFunction: function () {
    this.testTaskOutside();
    this.o = 0
    this.insideLoop()
    this.stopInterval(this.i, this.amountOfCycles, this.outsideLoopInterval)
    this.i++
  },
  testTaskInside: function () {
    console.log(' o:', this.o)
    /** Here goes first loop task */
  },
  testTaskOutside: function () {
    console.log('i:', this.i)
    /** Here goes second loop task */
  }
}

testing.outsideLoop()
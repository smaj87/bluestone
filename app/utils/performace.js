export class Performance {
  constructor(useResponseTime = false) {
    this.startTime =
      useResponseTime && window.performance
        ? window.performance.timing.responseStart
        : new Date().getTime();
  }

  setStartTime(startTime = null) {
    this.startTime = startTime || new Date().getTime();
  }

  measure(params = {}) {
    if (window.$onet) {
      window.$onet.time.TMLT = new Date().getTime() - this.startTime;
      window.$onet.time.TFR = params.isPremium ? 0 : 1;
      window.$onet.time.TVERS = 'ReactApp';
    }
  }
}

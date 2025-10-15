/**
 * Wrappert na setimeout z mozliwoscia pause i resume
 *
 * Example:
 *
 * let timer = new Timer(function() {
 *   alert("Done!");
 * }, 1000);
 *
 * timer.pause();
 * timet.resume();
 */
class Timer {
  constructor(delay, callbacks) {
    this._private_timerId = null;
    this._private_progressId = null;
    this._private_start = null;
    this._private_delay = delay;
    this._private_remaining = delay;
    this._private_progressRemaining = delay;
    this._private_callbacks = callbacks;
    this._private_isFinish = false;
    this._private_progressDelay = 15;

    this.resume();
  }

  pause = () => {
    this.clear();
    this._private_remaining -= new Date() - this._private_start;
    this._private_progressRemaining = this._private_remaining;

    if (this._private_remaining <= 0) {
      this._private_isFinish = true;
      this._private_callbacks.onFinish();
      this._private_callbacks.onProgress(0);
    }
  };

  resume = () => {
    this.clear();

    if (!this._private_isFinish) {
      this._private_start = new Date();

      this._private_timerId = setTimeout(() => {
        this.clear();
        this._private_isFinish = true;
        this._private_callbacks.onFinish();
      }, this._private_remaining);

      this._private_progressId = setInterval(() => {
        this._private_progressRemaining -= this._private_progressDelay;
        const percent =
          (this._private_progressRemaining * 100) / this._private_delay;

        this._private_callbacks.onProgress(percent > 0 ? percent : 0);
      }, this._private_progressDelay);
    }
  };

  clear = () => {
    if (this._private_timerId) {
      clearTimeout(this._private_timerId);
      this._private_timerId = null;
    }

    if (this._private_progressId) {
      clearInterval(this._private_progressId);
      this._private_progressId = null;
    }
  };
}

export default Timer;

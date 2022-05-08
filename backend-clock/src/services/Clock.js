export default class Clock {
  expectedTime = 0;
  timeout;
  callback;
  interval;
  /**
   *
   * @param {*} callback callback yang dipanggil
   * @param {*} interval interval
   */
  constructor(callback, interval) {
    this.callback = callback;
    this.interval = interval;
  }

  start = () => {
    let date = new Date();
    const mili = date.getMilliseconds();
    let diff;
    if (mili < this.interval) {
      diff = this.interval - mili;
    } else {
      diff = 2 * this.interval - mili;
    }
    this.expectedTime = date.getTime() + diff;
    this.timeout = setTimeout(this.round, this.interval);
  };

  round = () => {
    const drift = Date.now() - this.expectedTime;
    this.callback(this.expectedTime);
    this.expectedTime += this.interval;
    this.timeout = setTimeout(this.round, this.interval - drift);
  };

  static second(endTime, startTime) {
    return Math.floor((endTime - startTime) / 1000);
  }
}

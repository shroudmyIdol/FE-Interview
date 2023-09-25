class EventBus {
  constructor() {
    this.event = {};
  }

  // 订阅事件
  subscribe(eventName, callback) {
    this.event[eventName] = this.event[eventName] || {};
    this.event[eventName].push(callback);
  }

  //发布事件
  publish(eventName, data) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((callback) => callback(data));
    }
  }

  //取消订阅
  unsubscribe(eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName] = this.event[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }
}

class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(eventName, callback) {
    this.event[eventName] = this.event[eventName] || {};
    this.event[eventName].push(callback);
  }

  emit(eventName, data) {
    if (this.event[eventName]) {
      this.event[eventName].forEach((cb) => cb(data));
    }
  }

  off(eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName] = this.event[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }

  once(eventName, callback) {
    const onceCallback = (data) => {
      callback(data);
      this.off(eventName, onceCallback);
    };
    this.on(eventName, onceCallback);
  }
}

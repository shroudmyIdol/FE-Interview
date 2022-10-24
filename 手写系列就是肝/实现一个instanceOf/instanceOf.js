function instanceOf(obj, fn) {
    let proto = obj._proto_;
    if (proto) {
        if (proto === fn.prototype) {
            return true;
        } else {
            return instanceOf(proto, fn);
        }
    } else {
        return false;
    }
}
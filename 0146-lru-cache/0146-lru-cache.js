class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    if (!this.map.has(key)) return -1
    const value = this.map.get(key)
    this.map.delete(key)        // remove old position
    this.map.set(key, value)    // insert at end → most recent
    return value
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key)      // remove old position
    }
    this.map.set(key, value)    // insert at end → most recent

    // Remove least recently used
    if (this.map.size > this.capacity) {
      const firstKey = this.map.keys().next().value
      this.map.delete(firstKey)
    }
  }
}

const annoyer = {
  phrases: ['literally', 'cray-cray', 'totes', 'fo real', 'Yolo'],
  pickPhrase() {
    const { phrases } = this;
    const indx = Math.floor(Math.random() * phrases.length);
    return phrases[indx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
  }
};

// setInterval(func, 3000);

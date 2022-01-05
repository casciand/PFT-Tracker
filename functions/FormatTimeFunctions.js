export default {
  formatTimeMinutes: (csecs) => {
    const centisecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);
    const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);

    return `${minutes}:${seconds}.${centisecs}`;
  },

  formatTimeSeconds: (csecs) => {
    let format;

    const centisecs = `0${csecs % 100}`.slice(-2);
    const seconds = `0${Math.floor(csecs / 100) % 60}`.slice(-2);

    if (csecs / 100 >= 60) {
      const minutes = `0${Math.floor(csecs / 100 / 60)}`.slice(-2);
      format = `${minutes}:${seconds}.${centisecs}`;
    } else {
      format = `${seconds}.${centisecs}`;
    }

    return format;
  },

  formatDate: () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    return `${month}/${day}/${year}`;
  },
};


  const formatTimeMinutes = (secs) => {
    const centisecs = `0${secs * 100 % 100}`.slice(-2);
    const seconds = `0${Math.floor(secs) % 60}`.slice(-2);
    const minutes = `0${Math.floor(secs / 60)}`.slice(-2);

    return `${minutes}:${seconds}.${centisecs}`;
  };

  const formatTimeSeconds = (secs) => {
    if (secs >= 60) {
      return formatTimeMinutes(secs);
    }

    const centisecs = `0${secs * 100 % 100}`.slice(-2);
    const seconds = `0${Math.floor(secs) % 60}`.slice(-2);

    return `${seconds}.${centisecs}`;
  };

  const formatDate = () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    return `${month}/${day}/${year}`;
  };

  export default { formatTimeMinutes, formatTimeSeconds, formatDate };

export const parseCommand = (str) => {
    const [command, ...rest] = str.split(' ');
    const sources = [];
    let temp = '';
  
    for (let part of rest) {
      const hasQuote = part.match(/'|"/);
      if (hasQuote) {
        if (temp === '') {
          temp = part.slice(1);
        } else {
          temp += ' ' + part.slice(0, -1);
          sources.push(temp);
          temp = '';
        }
      } else if (temp !== '') {
        temp += ' ' + part;
      } else {
        sources.push(part);
      }
    }
  
    const source = sources.shift();
    const destination = sources.shift();
  
    return {
      command,
      source,
      destination,
    };
  };
export const displayNumbers = (num: number|undefined) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
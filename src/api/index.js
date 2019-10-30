
export default function createTransaction(value, description) {
  const hash = 0;
  return {
    value,
    description,
    hash,
    date: new Date(Date.now()).toUTCString(),
  };
}

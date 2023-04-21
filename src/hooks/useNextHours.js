export default function useNextHours() {
  const getNextHoursArr = (data) => {
    let arr = [];
    const x = new Date().getHours();
    for (let i = x; i < x + 8; i++) {
      arr.push(data[i]);
    }
    return arr;
  };
  return getNextHoursArr;
}

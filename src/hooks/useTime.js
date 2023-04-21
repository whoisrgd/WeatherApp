export default function useTime() {
  const Time = (time) => {
    return new Date(time * 1000).toLocaleTimeString("en-IN", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return Time;
}

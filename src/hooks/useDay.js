export default function useDay() {
  const Day = (time) => {
    return new Date(time * 1000).toLocaleDateString("en-IN", {
      weekday: "short",
    });
  };
  return Day;
}

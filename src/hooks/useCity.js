export default function useCity() {
  const getCity = (timezone) => {
    return timezone.split("/")[1];
  };
  return getCity;
}

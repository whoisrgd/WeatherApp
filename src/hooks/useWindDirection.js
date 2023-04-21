export default function useWindDirection() {
  function getWindDirection(WindDirection) {
    switch (true) {
      case 0 <= WindDirection && WindDirection <= 23:
        return "North";
      case 24 <= WindDirection && WindDirection <= 68:
        return "N E";
      case 69 <= WindDirection && WindDirection <= 113:
        return "East";
      case 114 <= WindDirection && WindDirection <= 158:
        return "S E";
      case 159 <= WindDirection && WindDirection <= 203:
        return "South";
      case 204 <= WindDirection && WindDirection <= 248:
        return "S W";
      case 249 <= WindDirection && WindDirection <= 293:
        return "West";
      case 294 <= WindDirection && WindDirection <= 338:
        return "N W";
      case 339 <= WindDirection && WindDirection <= 360:
        return "North";
      default:
        return WindDirection;
    }
  }
  return getWindDirection;
}

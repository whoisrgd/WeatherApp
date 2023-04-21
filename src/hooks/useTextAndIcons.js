export default function useTextAndIcons() {
  const TextAndIcons = new Map();

  setTextAndIcon([0], {
    text: "Clear Sky",
    icon: "ClearSky",
  });

  setTextAndIcon([1, 2, 3], {
    text: "Mainly Clear",
    icon: "MainlyClear",
  });

  setTextAndIcon([45, 48], {
    text: "Foggy",
    icon: "Foggy",
  });

  setTextAndIcon([51, 53, 55, 56, 57], {
    text: "Drizzle",
    icon: "Drizzle",
  });

  setTextAndIcon([61, 63, 65], {
    text: "Rain",
    icon: "Rain",
  });

  setTextAndIcon([66, 67], {
    text: "Freezing Rain",
    icon: "FreezingRain",
  });

  setTextAndIcon([71, 73, 75, 77], {
    text: "Snow Fall",
    icon: "SnowFall",
  });

  setTextAndIcon([80, 81, 82], {
    text: "Rain Showers",
    icon: "RainShowers",
  });

  setTextAndIcon([85, 86], {
    text: "Snow Showers",
    icon: "SnowShowers",
  });

  setTextAndIcon([95, 96, 99], {
    text: "Thunderstorm",
    icon: "Thunderstorm",
  });

  function setTextAndIcon(weatherCodes, textAndIcon) {
    weatherCodes.forEach((weatherCode) => {
      TextAndIcons.set(weatherCode, textAndIcon);
    });
  }

  const getWeatherIcon = (weatherCode) => {
    return TextAndIcons.get(weatherCode).icon;
  };

  const getWeatherText = (weatherCode) => {
    return TextAndIcons.get(weatherCode).text;
  };

  return { getWeatherIcon, getWeatherText };
}

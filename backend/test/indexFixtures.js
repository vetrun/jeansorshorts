'use strict';
let dataJeans = {"latitude":-37.8136,"longitude":144.9631,"timezone":"Australia/Melbourne","daily":{"summary":"Light rain tomorrow and next Thursday, with high temperatures rising to 72°F on Tuesday.","icon":"rain","data":[{"time":1556114400,"summary":"Partly cloudy until afternoon.","icon":"partly-cloudy-day","sunriseTime":1556139384,"sunsetTime":1556178136,"moonPhase":0.69,"precipIntensity":0.0001,"precipIntensityMax":0.0004,"precipIntensityMaxTime":1556157600,"precipProbability":0.03,"precipType":"rain","temperatureHigh":70.97,"temperatureHighTime":1556168400,"temperatureLow":55.02,"temperatureLowTime":1556229600,"apparentTemperatureHigh":70.97,"apparentTemperatureHighTime":1556168400,"apparentTemperatureLow":55.02,"apparentTemperatureLowTime":1556229600,"dewPoint":48.68,"humidity":0.7,"pressure":1020.03,"windSpeed":6.66,"windGust":22.48,"windGustTime":1556197200,"windBearing":302,"cloudCover":0.33,"uvIndex":4,"uvIndexTime":1556157600,"visibility":7.67,"ozone":264.43,"temperatureMin":48.16,"temperatureMinTime":1556139600,"temperatureMax":70.97,"temperatureMaxTime":1556168400,"apparentTemperatureMin":44.75,"apparentTemperatureMinTime":1556139600,"apparentTemperatureMax":70.97,"apparentTemperatureMaxTime":1556168400},{"time":1556200800,"summary":"Mostly cloudy throughout the day and breezy until evening.","icon":"wind","sunriseTime":1556225839,"sunsetTime":1556264462,"moonPhase":0.72,"precipIntensity":0.0021,"precipIntensityMax":0.0131,"precipIntensityMaxTime":1556229600,"precipProbability":0.4,"precipType":"rain","temperatureHigh":59.52,"temperatureHighTime":1556251200,"temperatureLow":47.63,"temperatureLowTime":1556308800,"apparentTemperatureHigh":59.52,"apparentTemperatureHighTime":1556251200,"apparentTemperatureLow":43.44,"apparentTemperatureLowTime":1556308800,"dewPoint":41.92,"humidity":0.61,"pressure":1018.27,"windSpeed":12.47,"windGust":28.37,"windGustTime":1556236800,"windBearing":257,"cloudCover":0.66,"uvIndex":3,"uvIndexTime":1556240400,"visibility":10,"ozone":278.6,"temperatureMin":50.83,"temperatureMinTime":1556283600,"temperatureMax":59.52,"temperatureMaxTime":1556251200,"apparentTemperatureMin":50.83,"apparentTemperatureMinTime":1556283600,"apparentTemperatureMax":59.52,"apparentTemperatureMaxTime":1556251200},{"time":1556287200,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1556312294,"sunsetTime":1556350789,"moonPhase":0.75,"precipIntensity":0.0002,"precipIntensityMax":0.001,"precipIntensityMaxTime":1556330400,"precipProbability":0.06,"precipType":"rain","temperatureHigh":61.95,"temperatureHighTime":1556337600,"temperatureLow":52.13,"temperatureLowTime":1556395200,"apparentTemperatureHigh":61.95,"apparentTemperatureHighTime":1556337600,"apparentTemperatureLow":52.13,"apparentTemperatureLowTime":1556395200,"dewPoint":40.92,"humidity":0.61,"pressure":1025.16,"windSpeed":8.66,"windGust":20.74,"windGustTime":1556366400,"windBearing":268,"cloudCover":0.67,"uvIndex":3,"uvIndexTime":1556326800,"visibility":10,"ozone":276.32,"temperatureMin":47.63,"temperatureMinTime":1556308800,"temperatureMax":61.95,"temperatureMaxTime":1556337600,"apparentTemperatureMin":43.44,"apparentTemperatureMinTime":1556308800,"apparentTemperatureMax":61.95,"apparentTemperatureMaxTime":1556337600},{"time":1556373600,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1556398749,"sunsetTime":1556437117,"moonPhase":0.78,"precipIntensity":0.0007,"precipIntensityMax":0.0023,"precipIntensityMaxTime":1556452800,"precipProbability":0.09,"precipType":"rain","temperatureHigh":64.26,"temperatureHighTime":1556427600,"temperatureLow":46.96,"temperatureLowTime":1556481600,"apparentTemperatureHigh":64.26,"apparentTemperatureHighTime":1556427600,"apparentTemperatureLow":44.87,"apparentTemperatureLowTime":1556481600,"dewPoint":46.29,"humidity":0.67,"pressure":1024.13,"windSpeed":8.44,"windGust":20.05,"windGustTime":1556373600,"windBearing":276,"cloudCover":0.86,"uvIndex":3,"uvIndexTime":1556413200,"visibility":10,"ozone":259.24,"temperatureMin":52.13,"temperatureMinTime":1556395200,"temperatureMax":64.26,"temperatureMaxTime":1556427600,"apparentTemperatureMin":52.13,"apparentTemperatureMinTime":1556395200,"apparentTemperatureMax":64.26,"apparentTemperatureMaxTime":1556427600},{"time":1556460000,"summary":"Mostly cloudy starting in the evening.","icon":"partly-cloudy-night","sunriseTime":1556485204,"sunsetTime":1556523446,"moonPhase":0.81,"precipIntensity":0.0001,"precipIntensityMax":0.0005,"precipIntensityMaxTime":1556460000,"precipProbability":0.03,"precipType":"rain","temperatureHigh":69.05,"temperatureHighTime":1556514000,"temperatureLow":53.62,"temperatureLowTime":1556568000,"apparentTemperatureHigh":69.05,"apparentTemperatureHighTime":1556514000,"apparentTemperatureLow":53.62,"apparentTemperatureLowTime":1556568000,"dewPoint":46.93,"humidity":0.71,"pressure":1023.71,"windSpeed":1.89,"windGust":14.25,"windGustTime":1556460000,"windBearing":315,"cloudCover":0.29,"uvIndex":4,"uvIndexTime":1556499600,"visibility":10,"ozone":256.51,"temperatureMin":46.96,"temperatureMinTime":1556481600,"temperatureMax":69.05,"temperatureMaxTime":1556514000,"apparentTemperatureMin":44.87,"apparentTemperatureMinTime":1556481600,"apparentTemperatureMax":69.05,"apparentTemperatureMaxTime":1556514000},{"time":1556546400,"summary":"Overcast throughout the day.","icon":"cloudy","sunriseTime":1556571659,"sunsetTime":1556609777,"moonPhase":0.84,"precipIntensity":0.0001,"precipIntensityMax":0.002,"precipIntensityMaxTime":1556629200,"precipProbability":0.05,"precipType":"rain","temperatureHigh":71.76,"temperatureHighTime":1556600400,"temperatureLow":53.88,"temperatureLowTime":1556658000,"apparentTemperatureHigh":71.76,"apparentTemperatureHighTime":1556600400,"apparentTemperatureLow":53.88,"apparentTemperatureLowTime":1556658000,"dewPoint":44.47,"humidity":0.54,"pressure":1016,"windSpeed":10.62,"windGust":26.05,"windGustTime":1556575200,"windBearing":347,"cloudCover":0.98,"uvIndex":3,"uvIndexTime":1556586000,"visibility":10,"ozone":263.99,"temperatureMin":53.62,"temperatureMinTime":1556568000,"temperatureMax":71.76,"temperatureMaxTime":1556600400,"apparentTemperatureMin":53.62,"apparentTemperatureMinTime":1556568000,"apparentTemperatureMax":71.76,"apparentTemperatureMaxTime":1556600400},{"time":1556632800,"summary":"Foggy in the afternoon.","icon":"fog","sunriseTime":1556658114,"sunsetTime":1556696108,"moonPhase":0.87,"precipIntensity":0.0053,"precipIntensityMax":0.0126,"precipIntensityMaxTime":1556636400,"precipProbability":0.52,"precipType":"rain","temperatureHigh":62.06,"temperatureHighTime":1556683200,"temperatureLow":51.97,"temperatureLowTime":1556740800,"apparentTemperatureHigh":62.06,"apparentTemperatureHighTime":1556683200,"apparentTemperatureLow":51.97,"apparentTemperatureLowTime":1556740800,"dewPoint":45.57,"humidity":0.65,"pressure":1018.89,"windSpeed":2.41,"windGust":20.88,"windGustTime":1556715600,"windBearing":236,"cloudCover":0.69,"uvIndex":2,"uvIndexTime":1556668800,"visibility":7.69,"ozone":312,"temperatureMin":53.58,"temperatureMinTime":1556715600,"temperatureMax":62.06,"temperatureMaxTime":1556683200,"apparentTemperatureMin":53.58,"apparentTemperatureMinTime":1556715600,"apparentTemperatureMax":62.06,"apparentTemperatureMaxTime":1556683200},{"time":1556719200,"summary":"Rain starting in the evening.","icon":"rain","sunriseTime":1556744568,"sunsetTime":1556782441,"moonPhase":0.9,"precipIntensity":0.0166,"precipIntensityMax":0.0629,"precipIntensityMaxTime":1556791200,"precipProbability":0.53,"precipType":"rain","temperatureHigh":65.13,"temperatureHighTime":1556773200,"temperatureLow":51.8,"temperatureLowTime":1556823600,"apparentTemperatureHigh":65.13,"apparentTemperatureHighTime":1556773200,"apparentTemperatureLow":51.8,"apparentTemperatureLowTime":1556823600,"dewPoint":47.55,"humidity":0.69,"pressure":1025.02,"windSpeed":8.94,"windGust":24.3,"windGustTime":1556748000,"windBearing":121,"cloudCover":0.21,"uvIndex":3,"uvIndexTime":1556758800,"visibility":10,"ozone":307.11,"temperatureMin":51.97,"temperatureMinTime":1556740800,"temperatureMax":65.13,"temperatureMaxTime":1556773200,"apparentTemperatureMin":51.97,"apparentTemperatureMinTime":1556740800,"apparentTemperatureMax":65.13,"apparentTemperatureMaxTime":1556773200}]},"offset":10};
let dataShorts = {"latitude":-37.8136,"longitude":144.9631,"timezone":"Australia/Melbourne","daily":{"summary":"Light rain tomorrow and next Thursday, with high temperatures rising to 72°F on Tuesday.","icon":"rain","data":[{"time":1556114400,"summary":"Partly cloudy until afternoon.","icon":"partly-cloudy-day","sunriseTime":1556139384,"sunsetTime":1556178136,"moonPhase":0.69,"precipIntensity":0.0001,"precipIntensityMax":0.0004,"precipIntensityMaxTime":1556157600,"precipProbability":0.03,"precipType":"rain","temperatureHigh":72.00,"temperatureHighTime":1556168400,"temperatureLow":55.02,"temperatureLowTime":1556229600,"apparentTemperatureHigh":70.97,"apparentTemperatureHighTime":1556168400,"apparentTemperatureLow":55.02,"apparentTemperatureLowTime":1556229600,"dewPoint":48.68,"humidity":0.7,"pressure":1020.03,"windSpeed":6.66,"windGust":22.48,"windGustTime":1556197200,"windBearing":302,"cloudCover":0.33,"uvIndex":4,"uvIndexTime":1556157600,"visibility":7.67,"ozone":264.43,"temperatureMin":48.16,"temperatureMinTime":1556139600,"temperatureMax":70.97,"temperatureMaxTime":1556168400,"apparentTemperatureMin":44.75,"apparentTemperatureMinTime":1556139600,"apparentTemperatureMax":70.97,"apparentTemperatureMaxTime":1556168400},{"time":1556200800,"summary":"Mostly cloudy throughout the day and breezy until evening.","icon":"wind","sunriseTime":1556225839,"sunsetTime":1556264462,"moonPhase":0.72,"precipIntensity":0.0021,"precipIntensityMax":0.0131,"precipIntensityMaxTime":1556229600,"precipProbability":0.4,"precipType":"rain","temperatureHigh":59.52,"temperatureHighTime":1556251200,"temperatureLow":47.63,"temperatureLowTime":1556308800,"apparentTemperatureHigh":59.52,"apparentTemperatureHighTime":1556251200,"apparentTemperatureLow":43.44,"apparentTemperatureLowTime":1556308800,"dewPoint":41.92,"humidity":0.61,"pressure":1018.27,"windSpeed":12.47,"windGust":28.37,"windGustTime":1556236800,"windBearing":257,"cloudCover":0.66,"uvIndex":3,"uvIndexTime":1556240400,"visibility":10,"ozone":278.6,"temperatureMin":50.83,"temperatureMinTime":1556283600,"temperatureMax":59.52,"temperatureMaxTime":1556251200,"apparentTemperatureMin":50.83,"apparentTemperatureMinTime":1556283600,"apparentTemperatureMax":59.52,"apparentTemperatureMaxTime":1556251200},{"time":1556287200,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1556312294,"sunsetTime":1556350789,"moonPhase":0.75,"precipIntensity":0.0002,"precipIntensityMax":0.001,"precipIntensityMaxTime":1556330400,"precipProbability":0.06,"precipType":"rain","temperatureHigh":61.95,"temperatureHighTime":1556337600,"temperatureLow":52.13,"temperatureLowTime":1556395200,"apparentTemperatureHigh":61.95,"apparentTemperatureHighTime":1556337600,"apparentTemperatureLow":52.13,"apparentTemperatureLowTime":1556395200,"dewPoint":40.92,"humidity":0.61,"pressure":1025.16,"windSpeed":8.66,"windGust":20.74,"windGustTime":1556366400,"windBearing":268,"cloudCover":0.67,"uvIndex":3,"uvIndexTime":1556326800,"visibility":10,"ozone":276.32,"temperatureMin":47.63,"temperatureMinTime":1556308800,"temperatureMax":61.95,"temperatureMaxTime":1556337600,"apparentTemperatureMin":43.44,"apparentTemperatureMinTime":1556308800,"apparentTemperatureMax":61.95,"apparentTemperatureMaxTime":1556337600},{"time":1556373600,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1556398749,"sunsetTime":1556437117,"moonPhase":0.78,"precipIntensity":0.0007,"precipIntensityMax":0.0023,"precipIntensityMaxTime":1556452800,"precipProbability":0.09,"precipType":"rain","temperatureHigh":64.26,"temperatureHighTime":1556427600,"temperatureLow":46.96,"temperatureLowTime":1556481600,"apparentTemperatureHigh":64.26,"apparentTemperatureHighTime":1556427600,"apparentTemperatureLow":44.87,"apparentTemperatureLowTime":1556481600,"dewPoint":46.29,"humidity":0.67,"pressure":1024.13,"windSpeed":8.44,"windGust":20.05,"windGustTime":1556373600,"windBearing":276,"cloudCover":0.86,"uvIndex":3,"uvIndexTime":1556413200,"visibility":10,"ozone":259.24,"temperatureMin":52.13,"temperatureMinTime":1556395200,"temperatureMax":64.26,"temperatureMaxTime":1556427600,"apparentTemperatureMin":52.13,"apparentTemperatureMinTime":1556395200,"apparentTemperatureMax":64.26,"apparentTemperatureMaxTime":1556427600},{"time":1556460000,"summary":"Mostly cloudy starting in the evening.","icon":"partly-cloudy-night","sunriseTime":1556485204,"sunsetTime":1556523446,"moonPhase":0.81,"precipIntensity":0.0001,"precipIntensityMax":0.0005,"precipIntensityMaxTime":1556460000,"precipProbability":0.03,"precipType":"rain","temperatureHigh":69.05,"temperatureHighTime":1556514000,"temperatureLow":53.62,"temperatureLowTime":1556568000,"apparentTemperatureHigh":69.05,"apparentTemperatureHighTime":1556514000,"apparentTemperatureLow":53.62,"apparentTemperatureLowTime":1556568000,"dewPoint":46.93,"humidity":0.71,"pressure":1023.71,"windSpeed":1.89,"windGust":14.25,"windGustTime":1556460000,"windBearing":315,"cloudCover":0.29,"uvIndex":4,"uvIndexTime":1556499600,"visibility":10,"ozone":256.51,"temperatureMin":46.96,"temperatureMinTime":1556481600,"temperatureMax":69.05,"temperatureMaxTime":1556514000,"apparentTemperatureMin":44.87,"apparentTemperatureMinTime":1556481600,"apparentTemperatureMax":69.05,"apparentTemperatureMaxTime":1556514000},{"time":1556546400,"summary":"Overcast throughout the day.","icon":"cloudy","sunriseTime":1556571659,"sunsetTime":1556609777,"moonPhase":0.84,"precipIntensity":0.0001,"precipIntensityMax":0.002,"precipIntensityMaxTime":1556629200,"precipProbability":0.05,"precipType":"rain","temperatureHigh":71.76,"temperatureHighTime":1556600400,"temperatureLow":53.88,"temperatureLowTime":1556658000,"apparentTemperatureHigh":71.76,"apparentTemperatureHighTime":1556600400,"apparentTemperatureLow":53.88,"apparentTemperatureLowTime":1556658000,"dewPoint":44.47,"humidity":0.54,"pressure":1016,"windSpeed":10.62,"windGust":26.05,"windGustTime":1556575200,"windBearing":347,"cloudCover":0.98,"uvIndex":3,"uvIndexTime":1556586000,"visibility":10,"ozone":263.99,"temperatureMin":53.62,"temperatureMinTime":1556568000,"temperatureMax":71.76,"temperatureMaxTime":1556600400,"apparentTemperatureMin":53.62,"apparentTemperatureMinTime":1556568000,"apparentTemperatureMax":71.76,"apparentTemperatureMaxTime":1556600400},{"time":1556632800,"summary":"Foggy in the afternoon.","icon":"fog","sunriseTime":1556658114,"sunsetTime":1556696108,"moonPhase":0.87,"precipIntensity":0.0053,"precipIntensityMax":0.0126,"precipIntensityMaxTime":1556636400,"precipProbability":0.52,"precipType":"rain","temperatureHigh":62.06,"temperatureHighTime":1556683200,"temperatureLow":51.97,"temperatureLowTime":1556740800,"apparentTemperatureHigh":62.06,"apparentTemperatureHighTime":1556683200,"apparentTemperatureLow":51.97,"apparentTemperatureLowTime":1556740800,"dewPoint":45.57,"humidity":0.65,"pressure":1018.89,"windSpeed":2.41,"windGust":20.88,"windGustTime":1556715600,"windBearing":236,"cloudCover":0.69,"uvIndex":2,"uvIndexTime":1556668800,"visibility":7.69,"ozone":312,"temperatureMin":53.58,"temperatureMinTime":1556715600,"temperatureMax":62.06,"temperatureMaxTime":1556683200,"apparentTemperatureMin":53.58,"apparentTemperatureMinTime":1556715600,"apparentTemperatureMax":62.06,"apparentTemperatureMaxTime":1556683200},{"time":1556719200,"summary":"Rain starting in the evening.","icon":"rain","sunriseTime":1556744568,"sunsetTime":1556782441,"moonPhase":0.9,"precipIntensity":0.0166,"precipIntensityMax":0.0629,"precipIntensityMaxTime":1556791200,"precipProbability":0.53,"precipType":"rain","temperatureHigh":65.13,"temperatureHighTime":1556773200,"temperatureLow":51.8,"temperatureLowTime":1556823600,"apparentTemperatureHigh":65.13,"apparentTemperatureHighTime":1556773200,"apparentTemperatureLow":51.8,"apparentTemperatureLowTime":1556823600,"dewPoint":47.55,"humidity":0.69,"pressure":1025.02,"windSpeed":8.94,"windGust":24.3,"windGustTime":1556748000,"windBearing":121,"cloudCover":0.21,"uvIndex":3,"uvIndexTime":1556758800,"visibility":10,"ozone":307.11,"temperatureMin":51.97,"temperatureMinTime":1556740800,"temperatureMax":65.13,"temperatureMaxTime":1556773200,"apparentTemperatureMin":51.97,"apparentTemperatureMinTime":1556740800,"apparentTemperatureMax":65.13,"apparentTemperatureMaxTime":1556773200}]},"offset":10};

module.exports = {
  dataJeans,
  dataShorts
}
(function () {

    var shared = {};

    shared.currentData = {};
    shared.results = [];
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&units=imperial&APPID=13fa457415e5ccc9bff93cda52612fcc'

    shared.data =
    {
      "xScale": "linear",
      "yScale": "linear",
      "main": [
        {
          "className": ".avgTemp",
          "data": []
        },
        {
          "className": ".lowTemp",
          "data": []
        },
        {
          "className": ".highTemp",
          "data": []
        }
      ]
    };

    var chartOptions =
    {
        tickHintX: 3,
        tickFormatX: function(x) {
            console.dir(x);
            return x;
        }
    };


    shared.myChart = new xChart('line', shared.data, '#myChart', chartOptions);


    $.ajax({
        type: 'GET',
        url: url,
        async: true,
        dataType: 'json',
        success: function(json) {

            var fiveDays = {
                avgTemp: [],
                lowTemp: [],
                highTemp: []
            };

            for (var i = 0; i < json.list.length; i++) {

                var thisDay = {};

                thisDay.avgTemp = {

                    "x": json.list[i].dt,
                    "y": json.list[i].main.temp
                };

                thisDay.lowTemp = {

                    "x": json.list[i].dt,
                    "y": json.list[i].main.temp_min
                };

                thisDay.highTemp = {

                    "x": json.list[i].dt,
                    "y": json.list[i].main.temp_max
                };

                fiveDays.avgTemp.push(thisDay.avgTemp);
                fiveDays.lowTemp.push(thisDay.lowTemp);
                fiveDays.highTemp.push(thisDay.highTemp);
            }

            shared.data.main[0].data = fiveDays.avgTemp;

            shared.data.main[1].data = fiveDays.lowTemp;

            shared.data.main[2].data = fiveDays.highTemp;

            shared.myChart.setData(shared.data);

            console.dir([json, shared.myChart, fiveDays, shared.data]);
        },
        error: function(e) {
            console.log(e.message);
        }
    });

})();

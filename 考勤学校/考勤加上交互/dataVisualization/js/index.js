window.onload=function(){
  $.get("/jeecg-boot/attendance/selectClassAttendance", { room:"233"},function(data,status){
    showData(data);
  });
};
function showData(data) {
  //定义用于拼接的字符串
  var strs = "";
  var numbers = "";
  var themes = "";
  var classnames = "";
  $("#tabs").empty();
  $("#number").empty();
  $("#theme").empty();
  $("#classname").empty();
  $("#classnames").empty();
  for (var i = 0; i < data.attendanceList.length; i++) {
    strs = "<ul><li>" + data.attendanceList[i].studentnum + "</li><li>" + data.attendanceList[i].studentname + "</li><li>"+data.attendanceList[i].signin+"</li><li>"+data.attendanceList[i].signintime+"</li></ul>";
    $("#tabs").append(strs);
  }
  numbers = "<li>"+data.num+"</li><li>"+data.actualnum+"</li><li>"+data.leavenum+"</li><li style='color: #ed3f35;'>"+data.absencenum+"</li>";
  $("#number").append(numbers);
  themes =" <h1>"+data.classroom+"教室-学生出勤详情-讲师-"+data.teachername+"</h1>";
  $("#theme").append(themes);
  classnames ="<h2>"+data.course+""+data.classname+"学生-签到情况</h2>";
  $("#classname").append(classnames);
  $("#classnames").append(classnames);
  var noSignIn = data.leavenum+data.absencenum;



// 柱状图1模块1
  (function() {
    // 实例化对象.line1 .chart.bar .chart
    var myChart = echarts.init(document.querySelector(".line1 .chart"));
    // 指定配置和数据
    var option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true,
      },

      xAxis: [
        {
          type: "category",
          data: [
            "第一节",
            "第二节",
            "第三节",
            "第四节",
            "第五节",
            "第六节",
            "第七节",
          ],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              // width: 1,
              // type: "solid"
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "签到人数",
          type: "bar",
          barWidth: "35%",
          data:data.calllist,
          itemStyle: {
            barBorderRadius: 5,
          },
        },
      ],
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });

    // 数据变化
    var dataAll = [
      { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
      { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] },
    ];

    $(".bar h2 ").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
  })();

// 折线图定制2
  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));

    // (1)准备数据
    /* var data = {
       year: [

         [36, 35, 36, 35, 36, 35, 36, 34, 36, 35, 35, 36],
       ],
     };*/

    // 2. 指定配置和数据
    var option = {
      /*color: ["#ed3f35", "#00f2f1"], */
      color: ["#ed3f35", "#00f2f1"],
      tooltip: {
        // 通过坐标轴来触发
        trigger: "axis",
      },
      legend: {
        // 距离容器10%
        right: "10%",
        // 修饰图例文字的颜色
        textStyle: {
          color: "#4c9bfd",
        },
        // 如果series 里面设置了name，此时图例组件的data可以省略
        // data: ["邮件营销", "联盟广告"]
      },

      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true,
        borderColor: "#012f4a",
        containLabel: true,
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "第1节",
          "2节",
          "3节",
          "4节",
          "5节",
          "6节",
          "7节",
          "8节",
          "9节",
          "10节",
          "11节",
        ],
        // 去除刻度
        axisTick: {
          show: false,
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: "rgba(255,255,255,.7)",
        },
        // 去除x坐标轴的颜色
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        // 去除刻度
        axisTick: {
          show: false,
        },
        // 修饰刻度标签的颜色
        axisLabel: {
          color: "rgba(255,255,255,.7)",
        },
        // 修改y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "#012f4a",
          },
        },
      },
      series: [
        {
          name: "本班未签到学生人数",
          type: "line",
          stack: "总量",
          // 是否让线条圆滑显示
          smooth: true,
          data: data.historinocalllist,
        },
        {
          name: "本班签到学生人数",
          type: "line",
          stack: "总量s",
          smooth: true,
          data: data.historicallist,
        },
      ],
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

// 饼形图定制

  (function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function(p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      /**/
      legend: {
        top: "90%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["签到", "未签到"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "签到详情",
          type: "pie",
          center: ["50%", "42%"],
          radius: ["40%", "60%"],
          color: ["#065aab", "#ed3f35"],
          label: { show: false },
          labelLine: { show: false },


          data: [
            { value: data.actualnum, name: "签到" },
            { value: noSignIn, name: "未签到" },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  /*show函数结束*/
}

(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));

  var sin = Math.sin;
  var cos = Math.cos;
  var pow = Math.pow;
  var sqrt = Math.sqrt;
  var cosh = Math.cosh;
  var sinh = Math.sinh;
  var exp = Math.exp;
  var PI = Math.PI;
  var square = function(x) {
    return x * x;
  };
  var mod2 = function(a, b) {
    var c = a % b;
    return c > 0 ? c : c + b;
  };

  var theta1 = -(20 / 9) * PI;
  var theta2 = 15 * PI;
  function getParametricEquation() {
    return {
      u: {
        min: 0,
        max: 1,
        step: 1 / 24,
      },
      v: {
        min: theta1,
        max: theta2,
        step: (theta2 - theta1) / 575,
      },
      x: function(x1, theta) {
        var phi = (PI / 2) * exp(-theta / (8 * PI));
        var y1 =
            1.9565284531299512 *
            square(x1) *
            square(1.2768869870150188 * x1 - 1) *
            sin(phi);
        var X =
            1 -
            square(1.25 * square(1 - mod2(3.6 * theta, 2 * PI) / PI) - 0.25) / 2;
        var r = X * (x1 * sin(phi) + y1 * cos(phi));
        return r * sin(theta);
      },
      y: function(x1, theta) {
        var phi = (PI / 2) * exp(-theta / (8 * PI));
        var y1 =
            1.9565284531299512 *
            square(x1) *
            square(1.2768869870150188 * x1 - 1) *
            sin(phi);
        var X =
            1 -
            square(1.25 * square(1 - mod2(3.6 * theta, 2 * PI) / PI) - 0.25) / 2;
        var r = X * (x1 * sin(phi) + y1 * cos(phi));
        return r * cos(theta);
      },
      z: function(x1, theta) {
        var phi = (PI / 2) * exp(-theta / (8 * PI));
        var y1 =
            1.9565284531299512 *
            square(x1) *
            square(1.2768869870150188 * x1 - 1) *
            sin(phi);
        var X =
            1 -
            square(1.25 * square(1 - mod2(3.6 * theta, 2 * PI) / PI) - 0.25) / 2;
        var r = X * (x1 * sin(phi) + y1 * cos(phi));
        return X * (x1 * cos(phi) - y1 * sin(phi));
      },
    };
  }

  option = {
    toolbox: {
      feature: {
        saveAsImage: {
          backgroundColor: "#111",
        },
      },
      iconStyle: {
        normal: {
          borderColor: "#fff",
        },
      },
      left: 0,
    },
    xAxis3D: {
      type: "value",
    },
    yAxis3D: {
      type: "value",
    },
    zAxis3D: {
      type: "value",
    },
    grid3D: {
      show: false,

      axisPointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
      postEffect: {
        enable: true,
        SSAO: {
          enable: true,
          radius: 10,
          intensity: 2,
        },
        edge: {
          enable: true,
        },
      },
      temporalSuperSampling: {
        enable: true,
      },
      light: {
        main: {
          intensity: 3,
          shadow: true,
        },
        ambient: {
          intensity: 0,
        },
        ambientCubemap: {
          texture: ROOT_PATH + "/data-gl/asset/canyon.hdr",
          exposure: 0,
          diffuseIntensity: 1,
          specularIntensity: 0.5,
        },
      },
      viewControl: {
        // projection: 'orthographic'
      },
    },
    series: [
      {
        type: "surface",
        parametric: true,
        shading: "realistic",
        silent: true,
        wireframe: {
          show: false,
        },
        realisticMaterial: {
          baseTexture:
              ROOT_PATH + "/asset/get/s/data-1494250104909-SkZtfeAyZ.jpg",
          roughness: 0.7,
          metalness: 0,
          textureTiling: [200, 20],
        },
        itemStyle: {
          color: "#fff",
        },
        parametricEquation: getParametricEquation(),
      },
    ],
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

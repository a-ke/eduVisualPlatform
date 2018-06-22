import Mock from 'mockjs'
// 录播教室
Mock.mock("/visual/cast/getCastStatisticsInfo", function (options) {
  console.log(options);
  return {
    "status": 0,
    "message": "成功",
    "obj": {
      "roomCount": 55,
      "recordCourseCount": 100,
      "recordDuration": 100,
      "teacherCount": 90,
      "studentCount": 1000,
    }
  }
});

Mock.mock("/visual/cast/getCastRoomStaticsInfo", function (options) {
  console.log(options);
  var list = [];
  for (var i = 0; i < 55; i++) {
    list.push({
      "deviceStatus": 0,
      "roomName": "录播教室1",
      "storageTotal": 931,
      "storageRemaining": 835,
      "networkStatus": 0
    });
  }
  return {
    "status": 0,
    "message": "成功",
    "obj": {
      "currentPage": 1,
      "numPerPage": 10,
      "totalCount": 26,
      "totalPages": 3,
      "list": list
    }
  }
})

// 资源评估
Mock.mock("/visual/resource/hotWorksList", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": [{
      "studyId": 1,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 1000
    }, {
      "studyId": 2,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 900
    }, {
      "studyId": 3,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 800
    }, {
      "studyId": 4,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 700
    }, {
      "studyId": 5,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 600
    }, {
      "studyId": 6,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 500
    }, {
      "studyId": 7,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 400
    }, {
      "studyId": 8,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 300
    }, {
      "studyId": 9,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 200
    }, {
      "studyId": 10,
      "type": 2,
      "worksName": "勾股定理",
      "studyCount": 100
    }]
  }
})

Mock.mock("/visual/resource/worksMonthStatistics", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": [{
        "date": "2018-01",
        "worksCount": 23
      },
      {
        "date": "2018-02",
        "worksCount": 30
      }, {
        "date": "2018-03",
        "worksCount": 23
      },
      {
        "date": "2018-04",
        "worksCount": 30
      },
      {
        "date": "2018-05",
        "worksCount": 30
      }, {
        "date": "2018-06",
        "worksCount": 23
      },
      {
        "date": "2018-07",
        "worksCount": 30
      },
      {
        "date": "2018-08",
        "worksCount": 30
      }, {
        "date": "2018-09",
        "worksCount": 23
      },
      {
        "date": "2018-10",
        "worksCount": 30
      },
      {
        "date": "2018-11",
        "worksCount": 30
      }, {
        "date": "2018-12",
        "worksCount": 23
      }
    ]
  }
})
Mock.mock("/visual/resource/worksMajorStatistics", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": {
      "totalWorks": 90,
      "list": [{
          "majorName": "计算机1",
          "worksCount": 90
        },
        {
          "majorName": "计算机2",
          "worksCount": 60
        },
        {
          "majorName": "计算机3",
          "worksCount": 20
        },
        {
          "majorName": "计算机4",
          "worksCount": 110
        },
        {
          "majorName": "计算机5",
          "worksCount": 300
        },
        {
          "majorName": "计算机6",
          "worksCount": 80
        },
        {
          "majorName": "计算机7",
          "worksCount": 50
        },
        {
          "majorName": "计算机8",
          "worksCount": 75
        },
        {
          "majorName": "计算机9",
          "worksCount": 45
        },
        {
          "majorName": "计算机10",
          "worksCount": 20
        }
      ]
    }
  }
})

Mock.mock("/visual/resource/studyDateStatistics", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": [{
        "date": "6-01",
        "studyCount": 23
      },
      {
        "date": "6-02",
        "studyCount": 30
      }, {
        "date": "6-03",
        "studyCount": 23
      },
      {
        "date": "6-04",
        "studyCount": 30
      }, {
        "date": "6-05",
        "studyCount": 23
      },
      {
        "date": "6-06",
        "studyCount": 30
      }, {
        "date": "6-07",
        "studyCount": 23
      },
      {
        "date": "6-08",
        "studyCount": 30
      }, {
        "date": "6-09",
        "studyCount": 23
      },
      {
        "date": "6-10",
        "studyCount": 30
      }, {
        "date": "6-11",
        "studyCount": 23
      },
      {
        "date": "6-12",
        "studyCount": 30
      }, {
        "date": "6-13",
        "studyCount": 23
      },
      {
        "date": "6-14",
        "studyCount": 30
      }, {
        "date": "6-15",
        "studyCount": 23
      },
      {
        "date": "6-16",
        "studyCount": 30
      }, {
        "date": "6-17",
        "studyCount": 23
      },
      {
        "date": "6-18",
        "studyCount": 30
      }, {
        "date": "6-19",
        "studyCount": 23
      },
      {
        "date": "6-20",
        "studyCount": 30
      },
      {
        "date": "6-21",
        "studyCount": 30
      }, {
        "date": "6-22",
        "studyCount": 23
      },
      {
        "date": "6-23",
        "studyCount": 30
      }, {
        "date": "6-24",
        "studyCount": 23
      },
      {
        "date": "6-25",
        "studyCount": 30
      }, {
        "date": "6-26",
        "studyCount": 23
      },
      {
        "date": "6-27",
        "studyCount": 30
      }, {
        "date": "6-28",
        "studyCount": 23
      },
      {
        "date": "6-29",
        "studyCount": 30
      }, {
        "date": "6-30",
        "studyCount": 23
      }
    ]
  }
})

Mock.mock("/visual/resource/worksStudyStatistics", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": {
      "totalWorks": 90,
      "list": [{
          "majorName": "计算机1",
          "worksCount": 90
        },
        {
          "majorName": "计算机2",
          "worksCount": 60
        },
        {
          "majorName": "计算机3",
          "worksCount": 20
        },
        {
          "majorName": "计算机4",
          "worksCount": 110
        },
        {
          "majorName": "计算机5",
          "worksCount": 300
        },
        {
          "majorName": "计算机6",
          "worksCount": 80
        },
        {
          "majorName": "计算机7",
          "worksCount": 50
        },
        {
          "majorName": "计算机8",
          "worksCount": 75
        },
        {
          "majorName": "计算机9",
          "worksCount": 45
        },
        {
          "majorName": "计算机10",
          "worksCount": 20
        }
      ]
    }
  }
})

Mock.mock("/visual/resource/hotLiveWorksList", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": [{
        "id": 1,
        "activityName": "勾股定理",
        "studyCount": 190
      },
      {
        "id": 1,
        "activityName": "勾股定理",
        "studyCount": 90
      },
      {
        "id": 1,
        "activityName": "勾股定理",
        "studyCount": 80
      }
    ]
  }
})
Mock.mock("/visual/resource/liveWorksMajorStatistics", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": {
      "totalWorks": 90,
      "list": [{
          "majorName": "计算机1",
          "worksCount": 200
        },
        {
          "majorName": "计算机2",
          "worksCount": 20
        },
        {
          "majorName": "计算机3",
          "worksCount": 120
        },
        {
          "majorName": "计算机4",
          "worksCount": 80
        }
      ]
    }
  }
})

Mock.mock("/visual/resource/appointedLiveActivityList", function (options) {
  return {
    "status": 0,
    "message": "成功",
    "obj": [{
        "id": 1,
        "activityName": "直播活动名称直播活动名称",
        "plannedStartTime": 1503309580000
      },
      {
        "id": 2,
        "activityName": "直播活动名称",
        "plannedStartTime": 1503309580000
      },
      {
        "id": 3,
        "activityName": "直播活动名称",
        "plannedStartTime": 1503309580000
      },
      {
        "id": 4,
        "activityName": "直播活动名称",
        "plannedStartTime": 1503309580000
      }, {
        "id": 5,
        "activityName": "直播活动名称",
        "plannedStartTime": 1503309580000
      }, {
        "id": 6,
        "activityName": "直播活动名称",
        "plannedStartTime": 1503309580000
      }
    ]
  }
})

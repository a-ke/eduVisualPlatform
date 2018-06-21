import Mock from 'mockjs'

Mock.mock("/visual/cast/getCastStatisticsInfo", function(options) {
  console.log(options);
  return {
    "status": 0,
    "message":"成功",
    "obj": {
      "roomCount": 55,
      "recordCourseCount": 100,
      "recordDuration": 100 ,
      "teacherCount": 90,
      "studentCount": 1000,
    }
  }
});

Mock.mock("/visual/cast/getCastRoomStaticsInfo", function(options) {
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
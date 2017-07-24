app.controller("hightendsuers", function ($scope) {

    $scope.heads = [
        {
            name: "第一列",
            id: 0,
            status: false
        }, {
            name: "第二列",
            id: 1,
            status: false

        }, {
            name: "第三列",
            id: 2,
            status: false

        }, {
            name: "第四列",
            id: 3,
            status: false

        }, {
            name: "第五列",
            id: 4,
            status: false

        }, {
            name: "第六列",
            id: 5,
            status: false

        }, {
            name: "第七列",
            id: 6,
            status: false

        }, {
            name: "第八列",
            id: 7,
            status: false

        }
    ];
    $scope.contents = [
            [1, "张三", 22, "job1", "男", "吸烟", "不爱学习", "联想"],
            [1, "张三", 22, "job1", "男", "吸烟", "不爱学习", "联想" ],    
            [1, "张三", 22, "job1", "男", "吸烟", "不爱学习", "联想" ],
            [1, "张三", 22, "job1", "男", "吸烟", "不爱学习", "联想" ],
            [1, "张三", 22, "job1", "男", "吸烟", "不爱学习", "联想" ],
            [1, "张三", 22, "job1", "男", "吸烟", "不爱学习", "联想" ]


    ];
    $scope.arr = [];
    $scope.fn = function () {
        //如果已经选中，则直接隐藏
        $scope.isSelected = function (n) {
            return $scope.arr.indexOf(n) > -1;
        }
        $scope.id = this.item.id;
        //把所有选中的选项放在一个数组中
        if ($scope.arr.indexOf($scope.id) == -1) {
            $scope.arr.push($scope.id);
        } else {
            var n = $scope.arr.indexOf($scope.id)
            $scope.arr.splice(n, 1);
        }
        console.log($scope.arr);

        var len = $scope.heads.length
        var lenC = $scope.contents;
        for (var i = 0; i < len; i++) {
            if ($scope.id == $scope.heads[i].id) {
                $scope.heads[i].status = !$scope.heads[i].status;
            }
        };
        for (var j = 0; j < $scope.contents.length; j++) {
            for (var k = 0; k < $scope.contents[j].length; k++) {
                if ($scope.id == k) {
                    $scope.isSelected(k);
                  
                }
            }
        }
      

    };
  
});



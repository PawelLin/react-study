export default {
    tree: {
        key: 0,
        title: '全国',
        children: [
            {
                key: 1,
                title: '北方区域',
                children: [
                    {
                        key: 11,
                        title: '黑龙江省',
                        children: [
                            {
                                key: 111,
                                title: '哈尔滨'
                            }
                        ]
                    },
                    {
                        key: 12,
                        title: '北京'
                    }
                ]
            }, {
                key: 2,
                title: '南方区域',
                children: [
                    {
                        key: 21,
                        title: '广东省',
                        children: [
                            {
                                key: 211,
                                title: '珠海市'
                            }
                        ]
                    },
                    {
                        key: 22,
                        title: '澳门'
                    }
                ]
            }
        ]
    },
    columns: [
        {
            title: '姓名',
            key: 'name'
        },
        {
            title: '年龄',
            key: 'age'
        },
        {
            title: '城市',
            key: 'city'
        }
    ],
    list: [
        {
            name: '小明',
            age: '13',
            city: '哈尔滨'
        },
        {
            name: '小红',
            age: '18',
            city: '北京'
        },
        {
            name: '小虎',
            age: '16',
            city: '珠海市'
        },
        {
            name: '小新',
            age: '6',
            city: '澳门'
        }
    ]
}
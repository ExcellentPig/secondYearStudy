<template>
    <div>
        <label for="txtsearch">请输入文本搜索关键字</label><input type="text" id="txtsearch" v-model="searchText">

        <ul>
            <li v-for="(book, index) in filterBooks" :key="index">
                序号 : {{index}}, 书名 ; {{book.name}}, 价格 : {{book.price}}
            </li>
        </ul>
        <div>
            <button @click="setOrderType(2)">价格升序</button>
            <button @click="setOrderType(1)">价格降序</button>
            <button @click="setOrderType(0)">原始顺序</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "demo1",
        data() {
            return {
                searchText: '',
                orderType: 0, // 0:默认顺序, 1:价格降序, 2:价格升序
                books: [
                    {name: 'Vue.js', price:50},
                    {name: 'Javascript', price:30},
                    {name: 'Css', price:40},
                    {name: 'Html', price:60}
                ]
            }
        },
        // 计算属性
        computed: {
            filterBooks () {
                const {searchText, books, orderType} = this
                let filterArr = new Array();

                // 过滤数组
                filterArr = books.filter(p => p.name.indexOf(searchText) !== -1)

                // 排序
                if(orderType) {
                    filterArr.sort(function (p1, p2) {
                        if(orderType === 1) { // 降序
                            return p2.price - p1.price;
                        } else { // 升序
                            return p1.price - p2.price;
                        }
                    })
                }

                return filterArr;
            }
        },
        methods: {
            setOrderType (orderType) {
                this.orderType = orderType
            }
        }
    }
    /*
    data中books数组为原始数据
input中通过v-model="searchText"使输入框value值和data中searchText形成绑定关系
view中并没有直接渲染books数组中的数据,而是使用了计算属性filterBooks返回的新数组
通过filterBooks返回过滤后的新数组并对其进行页面渲染,完成过滤功能

基于计算属性的缓存原理,当计算属性所依赖的数据发生变化时,它才会重新执行
所以,当页面输入导致searchText变化时,触发计算属性filterBooks会重新执行
对books数据进行重新过滤并刷新页面显示,实现动态过滤数据功能
在对数组进行过滤的计算方法中,对过滤后的数组使用sort方法进行排序
并通过按钮设置的orderType值决定升序,降序和不排序

由于orderType的加入,使得计算方法filterBooks 依赖于orderType
当点击按钮致使orderType发生变化时,计算方法filterBooks 重新执行,并更新页面显示
---------------------
作者：BraveWangDev
来源：CSDN
原文：https://blog.csdn.net/abap_brave/article/details/81750679
版权声明：本文为博主原创文章，转载请附上博文链接！
     */
</script>

<style scoped>

</style>

// 定义商品类
export function Product(name, brand, price) {
    this.name = name;  // 名称
    this.brand = brand;   // 品牌
    this.price = price;  // 价格
}

// 商品筛选器
export const ProductFilters = {
    /**
     * 区间类型筛选
     * @param {array<Product>} products
     * @param {array<{type: String, low: number, high: number}>} ranges
     */
    rangesFilter: function (products, ranges) {
        if (ranges.length === 0) {
            return products;
        } else {
            /**
             * 循环多个区间条件，
             * 每种区间类型应该只有一个，
             * 比如价格区间不会有1000-2000和4000-6000同时需要的情况
             */
            for (let range of ranges) {
                // 多个不同类型区间是与逻辑，可以直接赋值给自身
                products = products.filter(function (item) {
                    return item[range.type] >= range.low && item[range.type] <= range.high;
                });
            }
            return products;
        }
    },


    /**
     * 选择类型筛选
     * @param {array<Product>} products
     * @param {array<{type: String, value: String}>} chooses
     */
    choosesFilter:function (products, chooses) {
        let tmpProducts = [];
        if (chooses.length === 0) {
            tmpProducts = products;
        } else {
            /**
             * 选择类型条件是或逻辑，使用数组连接concat
             */
            for (let choice of chooses) {
                tmpProducts = tmpProducts.concat(products.filter(function (item) {
                    return item[choice.type].indexOf(choice.value) !== -1;
                }));
            }
        }
        return tmpProducts;
    }

}


export function doFilter(products, conditions) {
    // 根据条件循环调用筛选器里的方法
    for (key in conditions) {
        // 判断是否有需要的过滤方法
        if (ProductFilters.hasOwnProperty(key + 'Filter') && typeof ProductFilters[key + 'Filter'] === 'function') {
            products = ProductFilters[key + 'Filter'](products, conditions[key]);
        }
    }
    return products;
}

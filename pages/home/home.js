// 首页逻辑文件
Page({
  data: {
    products: [
      {
        id: 1,
        name: "新鲜土鸡蛋",
        price: "28.8",
        image: "/images/egg-sample.jpg",
        category: "egg"
      },
      {
        id: 2, 
        name: "散养土鸡",
        price: "98",
        image: "/images/chicken-sample.jpg",
        category: "chicken"
      },
      {
        id: 3,
        name: "有机西红柿",
        price: "12.5", 
        image: "/images/tomato-sample.jpg",
        category: "vegetable"
      }
    ]
  },

  // 分类导航点击事件
  onCategoryTap: function(event) {
    const category = event.currentTarget.dataset.category;
    console.log('切换到分类:', category);
    // 这里后续可以添加分类筛选逻辑
  },

  // 商品点击事件
  onProductTap: function(event) {
    const product = event.currentTarget.dataset.product;
    console.log('查看商品详情:', product.name);
    
    // 跳转到商品详情页
    wx.navigateTo({
      url: `/pages/product/product?id=${product.id}`
    })
  },

  onLoad: function() {
    console.log('🐔 咕咕庄园首页加载完成');
  }
})


Component({
    data: {
      value: "index",
      list: [
        { value: "index", label: '首页', url: '/pages/index/index'},
        { value: "chat", label: '聊天', url: '/pages/chat/index', },
        { value: "setting", label: '设置', url: '/pages/setting/setting', }
      ],
    },
    lifetimes: {
        ready() {
          const pages = getCurrentPages();
          const curPage = pages[pages.length - 1];
    
          if (curPage) {
            const nameRe = /pages\/(\w+)\/(\w+)/.exec(curPage.route);
    
            if (nameRe[1]) {
              this.setData({
                value: nameRe[1]
              })
            }
          }
        }
      },
    methods: {
      onChange(event) {
            console.log('点击', event)
            const index = this.data.list.findIndex(e => e.value == event.detail.value)
            if (index < 0) {
                return
            }
            const item = this.data.list[index]
            wx.switchTab({
                url: item.url.startsWith('/')
                ? item.url
                : `/${item.url}`,
            })
            .then(res=>{
                //this.setData({ value: event.detail.value });
            });
      },
    },
  });
  
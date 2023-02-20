import initCalendar,{ jump }  from '../../component/calendar/main.js';

const conf = {
  data: {


  },
  onShow: function() {
    initCalendar({ disablePastDay: true}); //  自定义配置 initCalendar({ multi: true, ... })
    // jump(2018, 6, 6) 1;
  }
};
Page(conf);
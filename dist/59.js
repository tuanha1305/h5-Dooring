(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    ds45: function(a, e, t) {
      'use strict';
      t.r(e);
      var n = {
        editData: [
          { key: 'text', name: '文字', type: 'TextArea' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'fontSize', name: '字体大小', type: 'Number' },
          { key: 'indent', name: '首行缩进', type: 'Number', range: [0, 100] },
          {
            key: 'textAlign',
            name: '对齐方式',
            type: 'Select',
            range: [
              { key: 'left', text: '左对齐' },
              { key: 'center', text: '居中对齐' },
              { key: 'right', text: '右对齐' },
            ],
          },
          { key: 'lineHeight', name: '行高', type: 'Number', step: 0.1 },
          { key: 'bgColor', name: '背景颜色', type: 'Color' },
          { key: 'padding', name: '填充间距', type: 'Number' },
          { key: 'radius', name: '背景圆角', type: 'Number' },
        ],
        config: {
          text: '我是长文本有一段故事，dooring可视化编辑器无限可能，赶快来体验吧，骚年们，奥利给~',
          color: 'rgba(60,60,60,1)',
          fontSize: 14,
          indent: 20,
          lineHeight: 1.8,
          textAlign: 'left',
          bgColor: 'rgba(255,255,255,0)',
          padding: 0,
          radius: 0,
        },
      };
      e.default = n;
    },
  },
]);

//# sourceMappingURL=59.js.map

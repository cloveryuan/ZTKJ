const path = require('path');
const paths = require('react-scripts-ts-antd/config/paths');

module.exports = {
    appTitle: "紫图科技-网络化监控产品的专业网络设备开发和制造的高科技企业",
    appPages: path.resolve(paths.appSrc, "pages"),
    // htmlTemplate: paths.appHtml,
    htmlTemplate: path.resolve(paths.appSrc, "common/mywebtemplate.html"),
};

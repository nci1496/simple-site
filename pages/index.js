export default function Home() {
  return (
    <div style={{
      fontFamily: "sans-serif",
      padding: "40px",
      maxWidth: "800px",
      margin: "0 auto"
    }}>

      <h1>南开大学犀牛鸟创新俱乐部</h1>
      <h2>RhinoBird Innovation Club · NKU</h2>

      <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
        欢迎来到俱乐部官网 Demo！<br/>
        本站用于测试部署流程，暂不包含 AI 功能。<br/>
        你现在看到的界面，是一个可以直接部署到 Vercel 的纯静态网站。
      </p>

      <h3 style={{ marginTop: "40px" }}>当前功能（暂不含 AI）</h3>
      <ul>
        <li>社团简介展示</li>
        <li>活动预告模块（静态）</li>
        <li>比赛公告模块（静态）</li>
        <li>页面结构可扩展、可随时换成正式官网</li>
        <li>可随时添加：报名表单 / 文档中心 / 比赛指南</li>
      </ul>

      <h3 style={{ marginTop: "40px" }}>示例活动内容</h3>
      <div style={{ padding: "20px", background: "#f7f7f7", borderRadius: "10px" }}>
        <strong>🚀 校级 AI 智能体创新挑战赛（即将上线）</strong>
        <p>我们正在规划一场全校 AI 创新比赛，届时将在本页面公布正式细则。</p>
      </div>

      <h3 style={{ marginTop: "40px" }}>联系我们</h3>
      <p>
        微信交流群：<br/>
        负责人邮箱：xxx@nankai.edu.cn
      </p>

      <footer style={{ marginTop: "80px", color: "#888" }}>
        Powered by Vercel · 本页面为测试版 Demo
      </footer>
    </div>
  );
}

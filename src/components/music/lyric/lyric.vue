<template>
  <div class='ly_wrap' @click='hidelyric'>
    <div class='lyric_div'>
      <ul ref='lrcul'>
        <li ref="lrcli" v-for="item in lrcobj.ms" :key="item.ms">
          {{item.c}}
        </li>
      </ul>
    </div>
    <textarea ref="gnzw" id="gnzw" v-model="gnzwlrc" style="display:none;">
      [ti:光年之外 (《太空旅客（Passengers）》电影中国区主题曲)]
      [ar:G.E.M. 邓紫棋]
      [al:光年之外]
      [by:]
      [offset:0]
      [00:00.76]光年之外 (《太空旅客（Passengers）》电影中国区主题曲) - G.E.M. 邓紫棋
      [00:03.24]词：G.E.M. 邓紫棋
      [00:03.46]曲：G.E.M. 邓紫棋
      [00:04.52]编曲：Lupo Groinig
      [00:05.34]监制：Lupo Groinig
      [00:06.45]
      [00:12.77]感受停在我发端的指尖
      [00:16.68]如何瞬间冻结时间
      [00:21.80]
      [00:23.58]记住望着我坚定的双眼
      [00:27.62]也许已经没有明天
      [00:32.66]
      [00:34.24]面对浩瀚的星海
      [00:36.19]
      [00:36.71]我们微小得像尘埃
      [00:39.27]漂浮在一片无奈
      [00:43.49]
      [00:45.13]缘分让我们相遇乱世以外
      [00:49.40]
      [00:50.50]命运却要我们危难中相爱
      [00:54.72]
      [00:55.92]也许未来遥远在光年之外
      [01:00.36]
      [01:01.48]我愿守候未知里为你等待
      [01:05.58]我没想到为了你我能疯狂到
      [01:09.69]
      [01:10.87]山崩海啸没有你根本不想逃
      [01:15.38]
      [01:16.36]我的大脑为了你已经疯狂到
      [01:20.68]
      [01:21.76]脉搏心跳没有你根本不重要
      [01:26.27]
      [01:29.07]一双围在我胸口的臂弯
      [01:33.17]足够抵挡天旋地转
      [01:38.49]
      [01:40.02]一种执迷不放手的倔强
      [01:44.05]足以点燃所有希望
      [01:49.25]
      [01:50.59]宇宙磅礡而冷漠
      [01:53.09]我们的爱微小却闪烁
      [01:55.63]颠簸却如此忘我
      [02:00.02]
      [02:01.44]缘分让我们相遇乱世以外
      [02:06.36]
      [02:06.90]命运却要我们危难中相爱
      [02:11.28]
      [02:12.37]也许未来遥远在光年之外
      [02:17.11]
      [02:17.80]我愿守候未知里为你等待
      [02:21.80]我没想到为了你我能疯狂到
      [02:26.07]
      [02:27.27]山崩海啸没有你根本不想逃
      [02:31.63]
      [02:32.71]我的大脑为了你已经疯狂到
      [02:37.06]
      [02:38.17]脉搏心跳没有你根本不重要
      [02:42.46]
      [02:44.17]也许航道以外是醒不来的梦
      [02:53.78]
      [02:56.71]乱世以外是纯粹的相拥
      [03:05.27]
      [03:05.86]我没想到为了你我能疯狂到
      [03:09.84]
      [03:10.92]山崩海啸没有你根本不想逃
      [03:15.36]
      [03:16.39]我的大脑为了你已经疯狂到
      [03:20.65]
      [03:21.82]脉搏心跳没有你根本不重要
      [03:26.12]
      [03:27.70]相遇乱世以外危难中相爱
      [03:37.72]
      [03:38.66]相遇乱世以外危难中相爱
      [03:48.53]
      [03:49.07]我没想到
    </textarea>
    <textarea ref="yq" id="yq" cols="30" rows="10" style="display:none;">
      [ti:夜曲]
      [ar:周杰伦]
      [al:十一月的萧邦]
      [by:http://www.9ku.com]
      [03:42.16][01:52.36][00:00.99]
      [02:00.71][00:07.95]http://www.9ku.com欢迎您
      [00:16.10]music
      [00:11.92]词:方文山曲:周杰伦
      [00:24.07]一群嗜血的蚂蚁被腐肉所吸引
      [00:27.48]我面无表情看孤独的风景
      [00:30.40]失去你爱恨开始分明
      [00:32.89]失去你还有什麼事好关心
      [00:35.83]当鸽子不再象徵和平
      [00:37.74]我终于被提醒
      [00:39.20]广场上喂食的是秃鹰
      [00:41.35]我用漂亮的押韵
      [00:42.64]形容被掠夺一空的爱情
      [00:45.87]啊乌云开始遮蔽夜色不干净
      [00:49.27]公园里葬礼的回音在漫天飞行
      [00:51.92]送你的白色玫瑰
      [00:53.43]在纯黑的环境凋零
      [00:55.03]乌鸦在树枝上诡异的很安静
      [00:57.55]静静听我黑色的大衣
      [00:59.81]想温暖你日渐冰冷的回忆
      [01:01.86]走过的走过的生命
      [01:03.25]啊四周弥漫雾气
      [01:04.60]我在空旷的墓地
      [01:05.97]老去后还爱你
      [01:08.20]为你弹奏萧邦的夜曲
      [01:11.14]纪念我死去的爱情
      [01:13.99]跟夜风一样的声音
      [01:16.76]心碎的很好听
      [01:19.65]手在键盘敲很轻
      [01:22.28]我给的思念很小心
      [01:25.13]你埋葬的地方叫幽冥
      [01:29.14]为你弹奏萧邦的夜曲
      [01:33.37]纪念我死去的爱情
      [01:36.14]而我为你隐姓埋名
      [01:39.12]在月光下弹琴
      [01:41.62]对你心跳的感应
      [01:44.33]还是如此温热亲近
      [01:46.93]怀念你那鲜红的唇印
      [02:13.89]那些断翅的蜻蜓散落在这森林
      [02:17.46]而我的眼睛没有丝毫同情
      [02:20.35]失去你泪水混浊不清
      [02:22.90]失去你我连笑容都有阴影
      [02:25.80]风在长满青苔的屋顶
      [02:27.74]嘲笑我的伤心
      [02:29.36]像一口没有水的枯井
      [02:31.34]我用凄美的字型
      [02:32.74]描绘后悔莫及的那爱情
      [02:36.17]为你弹奏萧邦的夜曲
      [02:39.45]纪念我死去的爱情
      [02:42.11]跟夜风一样的声音
      [02:44.89]心碎的很好听
      [02:47.72]手在键盘敲很轻
      [02:50.72]我给的思念很小心
      [02:53.18]你埋葬的地方叫幽冥
      [02:57.07]为你弹奏萧邦的夜曲
      [03:01.41]纪念我死去的爱情
      [03:04.22]而我为你隐姓埋名在月光下弹琴
      [03:09.76]对你心跳的感应还是如此温热亲近
      [03:15.14]怀念你那鲜红的唇印
      [03:16.14]
      [03:20.18]一群嗜血的蚂蚁被腐肉所吸引
      [03:23.63]我面无表情看孤独的风景
      [03:26.57]失去你爱恨开始分明
      [03:29.26]失去你还有什麼事好关心
      [03:32.04]当鸽子不再象徵和平
      [03:34.26]我终于被提醒
      [03:35.41]广场上喂食的是秃鹰
      [03:37.60]我用漂亮的押韵
      [03:38.91]形容被掠夺一空的爱情
    </textarea>
  </div>
</template>
<script src='./lyric.js'></script>
<style src='./lyric.css'></style>

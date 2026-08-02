const vocabularyData = [
    { word: "老实", pinyin: "lǎo shi", defZh: "诚实、本分、不狡猾。", defEn: "Honest / Well-behaved", defBm: "Jujur / Taat", example: "他是一个老实人，从不说谎骗人。" },
    { word: "无忧无虑", pinyin: "wú yōu wú lǜ", defZh: "没有任何忧虑和烦恼。", defEn: "Carefree / Without worries", defBm: "Tanpa bimbang / Riang", example: "童年是最无忧无虑的时光，每天都很开心。" },
    { word: "任凭", pinyin: "rèn píng", defZh: "听凭、任由（别人或情况）。", defEn: "Allow / Let (someone do)", defBm: "Biarkan / Serahkan", example: "他已经长大了，父母不再任凭他胡闹。" },
    { word: "尽职", pinyin: "jìn zhí", defZh: "尽力做好自己分内的工作和职责。", defEn: "Fulfill one's duty / Dedicated", defBm: "Menjalankan tugas dengan baik", example: "他工作勤恳，是个尽职尽责的好员工。" },
    { word: "闭息凝视", pinyin: "bì xī níng shì", defZh: "屏住呼吸，集中精神仔细地看。", defEn: "Hold breath and stare intently", defBm: "Menahan nafas dan merenung", example: "他闭息凝视着远处，仿佛在等待什么出现。" },
    { word: "不拉倒", pinyin: "bù lā dǎo", defZh: "不行就算了，不再勉强。", defEn: "Let it be / Forget it", defBm: "Biarlah / Tidak jadi", example: "你如果不想去就不拉倒，我自己去也行。" },
    { word: "变化多端", pinyin: "biàn huà duō duān", defZh: "变化很多、花样繁杂。", defEn: "Ever-changing / Varied", defBm: "Berubah-ubah / Pelbagai", example: "夏天的天气变化多端，刚才还晴天，现在就下雨了。" },
    { word: "倔强", pinyin: "jué jiàng", defZh: "固执、不肯低头的性格。", defEn: "Stubborn / Obstinate", defBm: "Keras kepala / Degil", example: "他性格倔强，决定了的事情就一定要做完。" },
    { word: "善待", pinyin: "shàn dài", defZh: "友好地对待、好好照顾。", defEn: "Treat kindly", defBm: "Melayan dengan baik", example: "我们应该善待小动物，不要伤害它们。" },
    { word: "勇猛", pinyin: "yǒng měng", defZh: "勇敢而威猛，形容气势很强。", defEn: "Brave / Valiant", defBm: "Berani / Gagah", example: "他勇猛善战，在战场上屡立战功。" },
    { word: "兜兜风", pinyin: "dōu dōu fēng", defZh: "出门坐车或开车到处转一转。", defEn: "Go for a ride / Take a drive", defBm: "Bersiar-siar / Jalan-jalan", example: "周末天气很好，我们开车出去兜兜风吧。" },
    { word: "横七竖八", pinyin: "héng qī shù bā", defZh: "形容杂乱无章、没有条理的样子。", defEn: "In disorder / Messy", defBm: "Bersepah / Tidak teratur", example: "他的书桌上横七竖八地堆满了书本和纸张。" },
    { word: "伤痕", pinyin: "shāng hén", defZh: "受伤后留下的痕迹。", defEn: "Scar / Wound mark", defBm: "Bekas luka", example: "他的手臂上还有一道深深的伤痕。" },
    { word: "昂首阔步", pinyin: "áng shǒu kuò bù", defZh: "抬起头大步向前走，形容精神饱满。", defEn: "Strut / Walk proudly", defBm: "Berjalan dengan bangga", example: "他昂首阔步地走进赛场，充满了信心。" },
    { word: "逐渐", pinyin: "zhú jiàn", defZh: "一步一步地、慢慢地。", defEn: "Gradually / Step by step", defBm: "Secara beransur-ansur", example: "天逐渐暗了下来，路上的行人也渐渐少了。" },
    { word: "遭了殃", pinyin: "zāo le yāng", defZh: "遭遇了灾祸或不幸的事情。", defEn: "Meet with disaster / Suffer", defBm: "Mendapat musibah", example: "他的店铺被大火烧毁了，这下可遭了殃。" },
    { word: "摔跤", pinyin: "shuāi jiāo", defZh: "跌倒在地上，也指一种体育运动。", defEn: "Fall down / Wrestling", defBm: "Terjatuh / Gusti", example: "他不小心踩到石头，摔了一跤。" },
    { word: "生气勃勃", pinyin: "shēng qì bó bó", defZh: "充满活力、生命力旺盛的样子。", defEn: "Full of life / Vigorous", defBm: "Bertenaga / Bersemangat", example: "春天的田野里，到处都是一片生气勃勃的景象。" },
    { word: "矛盾", pinyin: "máo dùn", defZh: "事物之间互相抵触或对立。", defEn: "Contradiction / Conflict", defBm: "Pertentangan / Konflik", example: "他的说法前后矛盾，让人难以相信。" },
    { word: "猖狂", pinyin: "chāng kuáng", defZh: "狂妄、放肆，不把别人放在眼里。", defEn: "Rampant / Unbridled", defBm: "Biadab / Gila-gila", example: "敌人虽然猖狂，但我们一定会战胜他们。" },
    { word: "威风", pinyin: "wēi fēng", defZh: "令人敬畏的气势和威严。", defEn: "Majesty / Awe-inspiring", defBm: "Kewibawaan / Keganasan", example: "将军骑着战马，威风凛凛地检阅部队。" },
    { word: "机械化", pinyin: "jī xiè huà", defZh: "用机械设备代替人工操作。", defEn: "Mechanize / Mechanization", defBm: "Mekanisasi", example: "随着农业机械化的发展，农民种田变得轻松多了。" }
];

// 将数据暴露为全局变量
var allIdioms = vocabularyData;

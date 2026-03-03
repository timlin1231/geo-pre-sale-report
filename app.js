(() => {
  const reportPrd = {
    documentType: "geoPreSaleReport",
    version: "1.0",
    goal:
      "本模板基于 Trip.com 携程场景构建，演示如何将可见度、提示词、平台差异、情绪与机会矩阵整合为一页可讲故事的 GEO 售前报告。",
    codingGuidelines: {
      templateSyntax: "{{variable}}",
      missingDataDisplay: "N/A",
      statusColors: {
        advantage: "#4CAF50",
        disadvantage: "#F44336",
        neutral: "#9E9E9E",
      },
      painStyle: {
        prefix: "【",
        suffix: "】",
        color: "#F44336",
      },
    },
    logicRules: {
      painTextDisplay: {
        gapThresholdPercent: 15,
        minVolumeThreshold: 100,
      },
      oneSentenceSummary: {
        selectFirstMatchedTemplate: true,
      },
      missingData: {
        hidePainTextWhenMissingCoreMetrics: true,
      },
    },
    sections: {
      brand_overview: {
        title: "Trip.com AI 品牌表现体检",
        description:
          "AI 有没有看到你？AI 相信谁在讲你？AI 喜不喜欢你？",
        metricGroups: [
          {
            key: "exposure",
            title: "曝光层：AI 有没有看到你？",
            metricKeys: ["visibility", "aiMentionRate", "shareOfVoice"],
          },
          {
            key: "authority",
            title: "权威层：AI 更信谁在讲你？",
            metricKeys: ["citationRate", "monthlyVisits"],
          },
          {
            key: "conversion",
            title: "转化层：AI 喜不喜欢你？会不会优先推荐？",
            metricKeys: ["avgRank", "sentimentScore"],
          },
        ],
        transitionText:
          "为什么线下流量领先，却在 AI 世界集体落后？接下来我们会从「主题场景」「Query 扩展」「不同大模型」三个维度拆解原因。",
        metricCards: [
          {
            metricKey: "visibility",
            title: "可见度",
            valueField: "visibility",
            benchmarkField: "competitorAvgVisibility",
            direction: "higher_is_better",
            leftDescription: "AI 回答中出现品牌的比例",
            hoverTemplate:
              "每月围绕主题产生约 {{totalQueries}} 次咨询行为，在约 {{brandMentions}} 次 AI 回答中，AI 会主动提及你的品牌。",
            explanations: {
              primary:
                "每月围绕核心主题产生约 {{totalQueries}} 次 AI 咨询，在约 {{brandMentions}} 次回答中，AI 会主动提及 Trip.com（每 100 次里出现约 {{per100}} 次）。",
              pain:
                "【曝光危机】每 100 次相关 AI 咨询里，只有 {{per100}} 次会提到 Trip.com，其余 {{missingPer100}} 次大多被 Booking、Expedia 等竞品占据。",
              advantage:
                "【曝光优势】Trip.com 在高意图问题中被稳定提及，已经进入 AI 的主流候选名单。",
            },
            compareLabel: "在竞品中属于优势还是劣势",
          },
          {
            metricKey: "aiMentionRate",
            title: "AI 提及率",
            valueField: "aiMentionRate",
            benchmarkField: "competitorAvgMentionRate",
            direction: "higher_is_better",
            leftDescription:
              "AI 在所有相关问题中，主动把你当作选项之一提出来的频率",
            hoverTemplate:
              "假设围绕「{{exampleQuery}}」等核心场景，一个月里我们共触发了 {{monthlyDialogs}} 条 AI 对话；其中 {{mentionDialogs}} 条回答中出现了你的品牌或常用别名。\nAI 提及率 = {{mentionDialogs}} / {{monthlyDialogs}} = {{aiMentionRate}}。\n口语化理解：每 100 个问 AI「用什么 App 订行程」的用户，大约有 {{per100Mention}} 个会在回答里听到你的名字。\n这个指标更多回答的是：“AI 平时会不会想起你？”，而不是“有没有把你排在第一推荐”。",
            explanations: {
              primary:
                "每 {{totalUsers}} 个问 AI「{{exampleQuery}}」的用户，只有 {{brandHeard}} 个会在回答里听到 Trip.com，这个指标回答的是：AI 平时会不会想起你。",
              pain:
                "【认知断层】AI 很少在第一时间想到 Trip.com，你尚未进入其默认推荐名单。",
              advantage:
                "【认知优势】Trip.com 已进入 AI 的主流推荐候选，品牌被主动想起的频率较高。",
            },
            compareLabel: "在竞品中属于优势还是劣势",
          },
          {
            metricKey: "citationRate",
            title: "引用率",
            valueField: "citationRate",
            benchmarkField: "competitorAvgCitationRate",
            direction: "higher_is_better",
            leftDescription:
              "AI 回答中，把你官网 / 自有域名当“资料来源”的比例",
            hoverTemplate:
              "对 GEO 而言，AI 的“引用”本质上是在回答后告诉用户：“我刚才说你，是基于这些页面上的信息。”\n每 {{totalAnswers}} 次 AI 回答和你业务相关的问题，大概有 {{citationLow}}～{{citationHigh}} 次，AI 会在回答下面给出链接到“讲你”的内容页面，这些页面可能是你的官网，也可能是媒体测评、社区帖子或应用商店等第三方外链。",
            explanations: {
              primary:
                "每 {{totalAnswers}} 条与 Trip.com 相关的 AI 回答中，仅有 {{citationCount}} 条会在 Sources 里给出链接到包含 Trip.com 的页面（包括官网、媒体评测、社区帖子、应用商店等）。",
              pain:
                "【权威缺失】只有 {{citationRate}}% 的回答会引用到 Trip.com 相关页面，其余 {{nonCitationRate}}% 都在引用别人说你的内容，AI 更信第三方而不是你自己。",
              advantage:
                "【权威优势】AI 对 Trip.com 的回答更愿引用官方与可控来源，品牌话语权更强。",
            },
            compareLabel: "在竞品中属于优势还是劣势",
          },
          {
            metricKey: "shareOfVoice",
            title: "声量份额",
            valueField: "shareOfVoice",
            benchmarkField: "competitorAvgSov",
            direction: "higher_is_better",
            leftDescription: "在所有被追踪品牌中，你占“被提到次数”的比例",
            hoverTemplate:
              "我们同时监测了你和 {{competitorCount}} 个主要竞品（共 {{brandCount}} 个品牌），在「{{scenarioName}}」场景中，一个月 AI 一共提到品牌 {{totalBrandMentions}} 次（包含你和竞品）。\n其中你的品牌被提到 {{yourMentions}} 次，其他竞品合计被提到 {{competitorMentions}} 次。\n声量份额 = {{yourMentions}} / {{totalBrandMentions}} = {{shareOfVoice}}%。\n换算成“AI 舞台”：每 10 声讨论中，你占 {{sharePer10}} 声，竞品占 {{competitorSharePer10}} 声。",
            explanations: {
              primary:
                "在「{{scenarioName}}」这类对话中，每 10 次提到品牌，Trip.com 只占 {{sharePer10}} 次，其它竞品合计占 {{competitorSharePer10}} 次。",
              pain:
                "【声量断层】在 AI 舞台上，你的声音被竞品淹没，用户更多在听对手的名字。",
              advantage:
                "【声量优势】Trip.com 已成为 AI 对话中的高频品牌，具备较强心智存在感。",
            },
            compareLabel: "在竞品中属于优势还是劣势",
          },
          {
            metricKey: "monthlyVisits",
            title: "月访问量",
            valueField: "monthlyVisits",
            benchmarkField: "competitorAvgMonthlyVisits",
            direction: "higher_is_better",
            leftDescription: "品牌站点月度访问规模（用于衡量站内承接潜力）",
            hoverTemplate:
              "月访问量代表站内承接能力。你当前约 {{monthlyVisits}}，竞品基准约 {{competitorAvgMonthlyVisits}}；这意味着当 AI 端可见度提升后，你已经具备更大的站内流量池来承接并转化需求。",
            explanations: {
              primary:
                "当前 Trip.com 月访问量约 {{monthVisits}}，处于行业前列。",
              pain:
                "【流量错配】线下流量规模已领先，但 AI 端可见度与引用率偏弱，增量需求仍被竞品承接。",
              advantage:
                "【反差提醒】线下流量已是头部，但在 AI 世界里的可见度与权威性仍有明显增长空间。",
            },
            compareLabel: "在竞品中属于优势还是劣势",
          },
          {
            metricKey: "avgRank",
            title: "平均排名",
            valueField: "avgRank",
            benchmarkField: "competitorAvgRank",
            direction: "lower_is_better",
            leftDescription: "当 AI 推荐多个品牌时，你通常排在第几位",
            hoverTemplate:
              "当 AI 推荐多个品牌时，你通常排在第 {{avgRank}} 位。如果平均排名靠后，真实用户需要多滑一下屏幕或多看几行文字才会注意到你；而排在前两位的品牌更容易被理解为“默认首选”。",
            explanations: {
              primary:
                "在包含多品牌推荐的场景中，Trip.com 的平均推荐位置为第 {{avgRank}} 名。",
              pain:
                "【位置劣势】用户通常在看到 Trip.com 之前，就已经被前 {{frontSlots}} 个品牌说服，错过“第一屏推荐位”的黄金流量。",
              advantage:
                "【位置优势】Trip.com 在多数场景稳定进入前列推荐，更容易吃到第一屏流量红利。",
            },
            compareLabel: "在竞品中属于优势还是劣势",
          },
          {
            metricKey: "sentimentScore",
            title: "情感倾向得分",
            valueField: "sentimentScore",
            benchmarkField: "industryAvgSentimentScore",
            direction: "higher_is_better",
            leftDescription: "AI 在提到你时，是“更常夸你”，还是“更常吐槽你”",
            hoverTemplate:
              "例如一个月里 AI 一共 {{totalBrandMentions}} 条回答明确提到你的品牌：其中约 {{positiveCount}} 条是正面评价（如“价格友好”“体验流畅”），{{neutralCount}} 条是中性说明（如“支持{{featureExample}}功能”的客观描述），{{negativeCount}} 条是负面评价（如“偶尔会卡顿”“售后响应慢”等）。",
            explanations: {
              primary:
                "在所有提到 Trip.com 的回答中，约 {{positivePct}}% 为正面评价、{{neutralPct}}% 为中性描述、{{negativePct}}% 为负面反馈。综合情感得分为 {{sentimentScore}} 分。",
              pain:
                "【口碑风险】负面反馈集中在「{{topNegativeKeywords}}」，将在转化关键节点劝退一部分本来有意向的用户。",
              advantage:
                "【口碑优势】用户最常用「{{topPositiveKeywords}}」来评价 Trip.com，说明体验层面具备优势，可以放大到更多 AI 场景中。",
            },
            compareLabel: "在竞品中属于优势还是劣势",
          },
        ],
        oneSentenceSummary: {
          templates: [
            {
              name: "A_可见度高_引用率低",
              condition: "visibility > industryAvg && citationRate < competitorAvg",
              text: "你在主流大模型中的可见度处于中上水平，但官方信息引用率明显低于头部竞品，AI 目前“知道你”，但还不够信你。",
            },
            {
              name: "B_可见度低_情感高",
              condition: "visibility < competitorAvg && sentimentScore > 70",
              text: "当 AI 提到你时评价并不差，但提到次数偏少，当前最大瓶颈是曝光不足：有口碑、没流量。",
            },
            {
              name: "C_曝光有_排名靠后",
              condition: "visibility > industryAvg && avgRank > 3",
              text: "AI 在不少场景中会提到你，但通常把你排在第 {{avgRank}} 位，注意力在前 2-3 个竞品处被提前消耗。",
            },
            {
              name: "D_声量有_权威弱",
              condition: "shareOfVoice > competitorAvg && citationRate < 30",
              text: "你的对话声量不低，但官网与自有内容被引用占比偏弱，更像“被讨论对象”，不是“被信任权威”。",
            },
          ],
        },
      },
      brand_competition: {
        title: "品牌竞争位置——你在同类中排第几？",
        insightText: {
          advantageTemplate:
            "在整体可见度和声量上，你已进入第一梯队，当前相对突出的维度包括：{{strongDimensions}}。",
          disadvantageTemplate:
            "但在 {{weakDimensions}} 等关键维度上，你仍落后于 {{mainCompetitors}}，这些短板会影响 AI 是否优先推荐你。",
        },
      },
      topic_intents: {
        title: "意图与主题场景——在哪些“买单场景”里你掉线了？",
        introText:
          "这一页告诉你：在不同的问题场景下，哪些是真正“准备付钱”的买单意图，以及在这些关键场景里，Trip.com 出现的频率有多低。",
        highValueGapTitle: "高价值缺口 TOP 3：高意图 × 大流量 × 低可见度",
        transitionText:
          "这些高意图场景里，AI 真的只问了这些问题吗？下一页，我们会通过「Query 扩展」拆解出 AI 在背后多问了哪些，你完全没布局到的问法。",
      },
      query_expansion: {
        title: "提示词查询扩展——AI 在背后多问了哪些你没准备的问题？",
        introText:
          "用户只问了一个看似简单的问题，比如「app for booking flights and stays」。但在后台，AI 实际会自动展开出一整串相关子问题。如果你只在主 Query 上做优化，而在这些高意图延伸 Query 里集体缺席，绝大部分真实决策场景都会被 Booking.com / Expedia 等竞品抢走。",
        top5Title: "高意图扩展 Query 缺口 Top 5",
        transitionText:
          "这些“隐藏问法”解释了为什么你在某些高意图场景里总是被动。下一步，我们会从不同大模型平台的视角，看看在哪些平台上，这种缺位问题更加严重。",
      },
      platform_diff: {
        title: "平台差异——在不同大模型里，你是“隐身”还是“C位”？",
        description:
          "同一品牌在不同大模型里的表现并不一致：有的平台你能被看见，有的平台几乎“隐身”。这一页用于识别该优先投入的平台战场。",
        insightTitle: "平台表现结论与优先级建议",
        insightTemplates: {
          overall:
            "【整体格局】在 {{strongPlatforms}} 这些主流平台上，Trip.com 的可见度、引用率与内容质量整体处于中上水平，热力图中蓝色块更多，说明在核心用户聚集的平台上，AI 至少“看得到你”。",
          shortfall:
            "【短板平台】但在 {{weakPlatforms}} 上，你在「{{weakMetrics}}」等核心指标上的得分多处于 30 分以下，热力图呈现出大面积橙黄色，这意味着在这些平台用户眼中，你仍接近“隐身”状态。",
          action:
            "【行动优先级】结合用户覆盖占比与差距强度，建议优先针对 {{priorityPlatforms}} 做 GEO 优化：先补齐高意图场景的可引用内容与权威信号，再扩展到长尾平台，避免主战场未打透就分散资源。",
        },
      },
      sentiment_analysis: {
        title: "品牌情绪与口碑——AI 在怎么评价你？",
        description:
          "除了能否被提及，AI 对你的表达语气同样决定转化效率：它在夸你什么、又在吐槽什么，往往直接影响最后下单选择。",
        distributionTemplate:
          "整体评价偏正面：正面 {{positive}}%，中性 {{neutral}}%，负面 {{negative}}%。",
        gaugeTemplate:
          "综合得分 {{sentimentScore}}（{{sentimentConclusion}}）。优先处理「{{topNegativeKeywords}}」，预计可提升 5–10 分。",
        insightTemplates: {
          structure:
            "【口碑结构】正面词集中在「{{topPositiveKeywords}}」，中性占 {{neutral}}%。",
          risk:
            "【风险点】负面占 {{negative}}%，主要集中在「{{negativeHotTopicsNames}}」等高意图场景。",
          action:
            "【优化建议】先补 FAQ、退款规则和比价说明，并同步到官网与高权威站点。",
        },
        transitionText:
          "平台的表现差异 + 情绪结构的偏差，最终都会体现在「你在哪些场景被优先推荐」上。下一步，我们会把这些发现压缩成「机会优先级矩阵」，帮你判断先做哪几块能最快带来 AI 流量与转化提升。",
      },
      opportunities_summary: {
        title: "大总结：问题与机会——下一步应该做什么？",
        description:
          "将前面章节的场景、Query、平台与口碑信号压缩为一张行动地图，优先找出“高影响 × 低难度”的 GEO 增长机会。",
        matrixTitle: "机会优先级矩阵",
        matrixAxisHint:
          "X 轴：影响力（越靠右，对可见度 / 转化提升越大）｜Y 轴：实施难度（越靠上，投入资源越多）。右下象限 = 高影响 × 低难度 = 当前最优先机会。",
        cardsTitle: "机会卡片 Top 5",
        supportTitle: "执行支撑层",
      },
      subscription_cta: {
        title: "Pro——付费订阅价值",
        description:
          "把监测、执行、归因、汇报连成一个自动化闭环，让 GEO 与 SEO 从“看数据”进入“持续增长”。",
      },
    },
  };

  const reportData = {
    reportMeta: {
      brandName: "Trip.com 携程",
      productName: "Trip.com",
      industry: "在线旅游 OTA / AI 搜索优化",
      reportDate: "2026-03-03",
      period: "2026-02-23 至 2026-03-02（最近7天）",
      trackedPlatforms: 7,
      trackedBrands: 6,
      supportedModels: [
        "ChatGPT",
        "Perplexity",
        "Claude",
        "Grok (grok)",
        "Gemini",
        "Google AI Mode",
        "Google AI Overview",
      ],
      monitoredLocales: [
        { region: "美国", language: "英语" },
        { region: "英国", language: "英语" },
        { region: "加拿大", language: "英语" },
        { region: "德国", language: "德语" },
        { region: "法国", language: "法语" },
        { region: "日本", language: "日语" },
        { region: "韩国", language: "韩语" },
        { region: "西班牙", language: "西班牙语" },
        { region: "巴西", language: "葡萄牙语" },
      ],
      promptMonitorCount: 20843,
      modelCount: 7,
      chatSampleCount: 168420,
      estimatedLostRecommendations: 5200,
    },
    metrics: {
      visibility: 4.9,
      competitorAvgVisibility: 21.9,
      aiMentionRate: 4.6,
      competitorAvgMentionRate: 20.2,
      citationRate: 0.5,
      competitorAvgCitationRate: 2.3,
      shareOfVoice: 3.1,
      competitorAvgSov: 19.4,
      monthlyVisits: 138.26,
      competitorAvgMonthlyVisits: 96.8,
      avgRank: 5.2,
      competitorAvgRank: 4.7,
      sentimentScore: 66.5,
      industryAvgSentimentScore: 71.4,
      industryAvg: 10.8,
      competitorAvg: 19.4,
    },
    webAnalytics: {
      monthlyVisits: "138.26M",
      avgSessionDuration: "00:03:24",
      pagesPerVisit: "3.27",
      bounceRate: "52.8%",
      visibilityTrend: "+1.1%",
      mentionTrend: "+1.0%",
      citationTrend: "+0.3%",
      sentimentTrend: "-1.0",
    },
    sampleVolume: {
      visibility: 15873,
      aiMentionRate: 15210,
      citationRate: 20843,
      shareOfVoice: 17642,
      monthlyVisits: 20843,
      avgRank: 14960,
      sentimentScore: 504,
    },
    metricNarrativeContext: {
      visibility: {
        totalQueries: 15873,
        brandMentions: 778,
        per100: 5,
        missingPer100: 95,
        gapUsers: 2,
        estimatedLoss: 2698,
      },
      aiMentionRate: {
        totalUsers: 100,
        exampleQuery: "best app for booking flights and stays",
        brandHeard: 4.6,
        advantageCount: 1,
        monthlyDialogs: 10000,
        mentionDialogs: 460,
        per100Mention: 5,
      },
      citationRate: {
        totalAnswers: 20843,
        citationCount: 104,
        topCitationDomain: "reddit.com",
        citationLow: 90,
        citationHigh: 120,
      },
      shareOfVoice: {
        competitorCount: 5,
        brandCount: 6,
        scenarioName: "移动端旅行预订",
        totalBrandMentions: 62400,
        yourMentions: 1934,
        competitorMentions: 60466,
      },
      monthlyVisits: {
        monthVisits: "138.26M",
        monthlyVisits: 138.26,
        competitorAvgMonthlyVisits: 96.8,
      },
      avgRank: {
        topN: 2,
        frontSlots: 2,
      },
      sentimentScore: {
        totalBrandMentions: 504,
        positiveCount: 318,
        neutralCount: 136,
        negativeCount: 50,
        positivePct: 63,
        neutralPct: 27,
        negativePct: 10,
        featureExample: "多城市行程整合",
        topNegativeKeywords: "价格不透明、比价链路冗长、多城市行程复杂",
        topPositiveKeywords: "一站式预订、国际航线覆盖、移动端体验",
      },
    },
    brandCompetition: {
      dimensions: [
        "visibility",
        "recommendationScore",
        "sentimentScore",
        "citationRate",
        "shareOfVoice",
      ],
      labels: {
        visibility: "可见度",
        recommendationScore: "推荐位占比",
        sentimentScore: "情感得分",
        citationRate: "引用率",
        shareOfVoice: "声量份额",
      },
      series: [
        {
          name: "Trip.com 携程",
          values: {
            visibility: 10,
            shareOfVoice: 6,
            citationRate: 7,
            sentimentScore: 66,
            recommendationScore: 38,
          },
        },
        {
          name: "Booking.com",
          values: {
            visibility: 98,
            shareOfVoice: 100,
            citationRate: 47,
            sentimentScore: 76,
            recommendationScore: 86,
          },
        },
        {
          name: "Expedia",
          values: {
            visibility: 89,
            shareOfVoice: 67,
            citationRate: 100,
            sentimentScore: 72,
            recommendationScore: 82,
          },
        },
        {
          name: "Airbnb",
          values: {
            visibility: 18,
            shareOfVoice: 12,
            citationRate: 0,
            sentimentScore: 77,
            recommendationScore: 53,
          },
        },
        {
          name: "行业平均",
          values: {
            visibility: 37,
            shareOfVoice: 31,
            citationRate: 34,
            sentimentScore: 71,
            recommendationScore: 66,
          },
        },
      ],
      mainCompetitors: ["Booking.com", "Expedia"],
    },
    topicIntents: {
      topics: [
        {
          topicName: "Mobile Travel Tools",
          commercialValueScore: 9,
          visibilityRate: 31,
          chatVolume: 4200,
          competitorAvgVisibility: 63,
          sentimentScore: 67.3,
          topCompetitors: "Booking.com、Expedia",
          estimatedLoss: 1344,
        },
        {
          topicName: "Top Rated Travel Apps",
          commercialValueScore: 8,
          visibilityRate: 33,
          chatVolume: 3800,
          competitorAvgVisibility: 61,
          sentimentScore: 67.3,
          topCompetitors: "Booking.com、Expedia",
          estimatedLoss: 1064,
        },
        {
          topicName: "Travel Planning Guides",
          commercialValueScore: 7,
          visibilityRate: 26,
          chatVolume: 2900,
          competitorAvgVisibility: 49,
          sentimentScore: 63.7,
          topCompetitors: "Booking.com、Airbnb",
          estimatedLoss: 667,
        },
        {
          topicName: "Platform Comparison Guide",
          commercialValueScore: 8,
          visibilityRate: 24,
          chatVolume: 2500,
          competitorAvgVisibility: 52,
          sentimentScore: 66.2,
          topCompetitors: "Expedia、Booking.com",
          estimatedLoss: 700,
        },
        {
          topicName: "app for booking flights and stays",
          commercialValueScore: 10,
          visibilityRate: 30,
          chatVolume: 5200,
          competitorAvgVisibility: 69,
          sentimentScore: 69.3,
          topCompetitors: "Booking.com、Expedia",
          estimatedLoss: 2028,
        },
        {
          topicName: "app for business trip booking",
          commercialValueScore: 9,
          visibilityRate: 22,
          chatVolume: 2100,
          competitorAvgVisibility: 58,
          sentimentScore: 64.8,
          topCompetitors: "Booking.com、Egencia",
          estimatedLoss: 756,
        },
        {
          topicName: "app to track travel prices",
          commercialValueScore: 6,
          visibilityRate: 47,
          chatVolume: 1800,
          competitorAvgVisibility: 54,
          sentimentScore: 68.4,
          topCompetitors: "Skyscanner、Google Flights",
          estimatedLoss: 126,
        },
        {
          topicName: "hotel reservation management for small hotels",
          commercialValueScore: 7,
          visibilityRate: 19,
          chatVolume: 1600,
          competitorAvgVisibility: 45,
          sentimentScore: 61.3,
          topCompetitors: "Booking.com、Expedia",
          estimatedLoss: 416,
        },
        {
          topicName: "last minute travel deals",
          commercialValueScore: 5,
          visibilityRate: 56,
          chatVolume: 1700,
          competitorAvgVisibility: 47,
          sentimentScore: 70.1,
          topCompetitors: "Booking.com",
          estimatedLoss: 0,
        },
        {
          topicName: "family vacation package planning",
          commercialValueScore: 4,
          visibilityRate: 52,
          chatVolume: 1300,
          competitorAvgVisibility: 43,
          sentimentScore: 69.4,
          topCompetitors: "Expedia",
          estimatedLoss: 0,
        },
      ],
    },
    queryExpansion: {
      seedPrompt: "app for booking flights and stays",
      clusters: [
        {
          clusterName: "酒店管理与预订效率",
          queries: [
            {
              queryText: "app to manage hotel reservations",
              frequency: 70,
              mentionStatus: "无",
              citationStatus: "无",
              topicName: "Hotel Reservation Ops",
              mainRecommendedBrands: "Booking.com、Expedia",
            },
            {
              queryText: "best apps to manage hotel reservations",
              frequency: 62,
              mentionStatus: "无",
              citationStatus: "无",
              topicName: "Hotel Reservation Ops",
              mainRecommendedBrands: "Booking.com、Expedia",
            },
            {
              queryText: "best hotel reservation management apps for small hotels 2025",
              frequency: 51,
              mentionStatus: "无",
              citationStatus: "无",
              topicName: "Hotel Reservation Ops",
              mainRecommendedBrands: "Cloudbeds、Booking.com",
            },
            {
              queryText: "app to manage hotel reservations software",
              frequency: 45,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Hotel Reservation Ops",
              mainRecommendedBrands: "Booking.com、Expedia",
            },
          ],
        },
        {
          clusterName: "差旅与商务场景",
          queries: [
            {
              queryText: "app for business trip booking",
              frequency: 65,
              mentionStatus: "无",
              citationStatus: "无",
              topicName: "Business Travel",
              mainRecommendedBrands: "Booking.com、Egencia",
            },
            {
              queryText: "app for travel expense planning",
              frequency: 62,
              mentionStatus: "无",
              citationStatus: "无",
              topicName: "Business Travel",
              mainRecommendedBrands: "SAP Concur、Expedia",
            },
            {
              queryText: "app to manage multiple trips",
              frequency: 61,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Business Travel",
              mainRecommendedBrands: "Booking.com、TripIt",
            },
            {
              queryText: "app to manage travel details",
              frequency: 57,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Business Travel",
              mainRecommendedBrands: "TripIt、Google Travel",
            },
          ],
        },
        {
          clusterName: "价格监控与优惠",
          queries: [
            {
              queryText: "app to track travel prices",
              frequency: 60,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Price Monitoring",
              mainRecommendedBrands: "Skyscanner、Google Flights",
            },
            {
              queryText: "app for booking travel deals",
              frequency: 52,
              mentionStatus: "有",
              citationStatus: "有",
              topicName: "Price Monitoring",
              mainRecommendedBrands: "Booking.com、Expedia",
            },
            {
              queryText: "app for flight fare alerts",
              frequency: 50,
              mentionStatus: "无",
              citationStatus: "无",
              topicName: "Price Monitoring",
              mainRecommendedBrands: "Skyscanner、Hopper",
            },
            {
              queryText: "app to compare flight and hotel prices",
              frequency: 51,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Price Monitoring",
              mainRecommendedBrands: "Skyscanner、Expedia",
            },
          ],
        },
        {
          clusterName: "移动端直购高意图",
          queries: [
            {
              queryText: "app for booking flights and stays",
              frequency: 239,
              mentionStatus: "有",
              citationStatus: "有",
              topicName: "Mobile Direct Booking",
              mainRecommendedBrands: "Booking.com、Trip.com",
            },
            {
              queryText: "app for booking hotels worldwide",
              frequency: 146,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Mobile Direct Booking",
              mainRecommendedBrands: "Booking.com、Expedia",
            },
            {
              queryText: "app for booking travel online",
              frequency: 96,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Mobile Direct Booking",
              mainRecommendedBrands: "Booking.com、Trip.com",
            },
            {
              queryText: "app for booking travel in one place",
              frequency: 53,
              mentionStatus: "有",
              citationStatus: "无",
              topicName: "Mobile Direct Booking",
              mainRecommendedBrands: "Booking.com、Expedia",
            },
          ],
        },
      ],
    },
    platformDiff: {
      platforms: ["Local LLM", "Grok", "Gemini", "Perplexity", "ChatGPT"],
      metrics: [
        "visibility",
        "citationRate",
        "contentQuality",
        "avgRankScore",
        "sentimentScore",
      ],
      metricLabels: {
        visibility: "可见度",
        citationRate: "引用率",
        contentQuality: "内容质量",
        avgRankScore: "推荐位表现",
        sentimentScore: "情感得分",
      },
      scores: {
        "Local LLM": {
          visibility: 28,
          citationRate: 30,
          contentQuality: 35,
          avgRankScore: 25,
          sentimentScore: 60,
        },
        Grok: {
          visibility: 30,
          citationRate: 25,
          contentQuality: 32,
          avgRankScore: 22,
          sentimentScore: 62,
        },
        Gemini: {
          visibility: 68,
          citationRate: 70,
          contentQuality: 72,
          avgRankScore: 65,
          sentimentScore: 80,
        },
        Perplexity: {
          visibility: 72,
          citationRate: 80,
          contentQuality: 78,
          avgRankScore: 70,
          sentimentScore: 82,
        },
        ChatGPT: {
          visibility: 65,
          citationRate: 68,
          contentQuality: 70,
          avgRankScore: 68,
          sentimentScore: 78,
        },
      },
      userCoverage: {
        "Local LLM": 5,
        Grok: 10,
        Gemini: 20,
        Perplexity: 25,
        ChatGPT: 40,
      },
    },
    sentiment: {
      positive: 68,
      neutral: 24,
      negative: 8,
      sentimentScore: 66.5,
      sentimentConclusion: "中性偏正面",
      topPositiveKeywords: "一站式预订、国际航线覆盖、酒店库存丰富",
      topNegativeKeywords: "价格不透明、比价链路冗长、多城市行程复杂",
      negativeTopics: "价格比较、差旅审批、复杂行程管理",
      negativeHotTopics: [
        { topicName: "复杂行程预订", negativeShare: 35 },
        { topicName: "退款与售后", negativeShare: 28 },
        { topicName: "跨境价格比较", negativeShare: 22 },
      ],
      positiveKeywords: [
        { word: "一站式", weight: 0.9, share: 17, exampleScene: "多城市旅行方案整合" },
        { word: "国际航线", weight: 0.82, share: 15, exampleScene: "跨境航班预订比选" },
        { word: "库存丰富", weight: 0.78, share: 13, exampleScene: "热门城市酒店可订率" },
        { word: "移动端体验", weight: 0.72, share: 11, exampleScene: "移动端快速下单" },
        { word: "价格透明", weight: 0.66, share: 10, exampleScene: "费用拆分展示" },
        { word: "覆盖全面", weight: 0.58, share: 8, exampleScene: "机酒打包方案覆盖" },
      ],
      negativeKeywords: [
        { word: "比价复杂", weight: 0.86, share: 16, exampleScene: "跨平台价格一致性" },
        { word: "多城市行程", weight: 0.8, share: 14, exampleScene: "复杂行程组合下单" },
        { word: "取消规则不清晰", weight: 0.72, share: 12, exampleScene: "退改与售后解释" },
        { word: "促销规则", weight: 0.64, share: 10, exampleScene: "促销条款理解成本" },
        { word: "退改提醒", weight: 0.6, share: 9, exampleScene: "订单变更通知体验" },
        { word: "商务审批", weight: 0.56, share: 8, exampleScene: "差旅审批链路对接" },
      ],
    },
    opportunities: {
      matrix: {
        title: "机会优先级矩阵",
        axisX: {
          label: "影响力（对可见度 / 转化的潜在提升）",
          min: 1,
          max: 5,
        },
        axisY: {
          label: "实施难度（内容改造 / SEO / 合规等成本）",
          min: 1,
          max: 5,
        },
        items: [
          {
            id: "scene_1",
            scene: "app for booking flights and stays",
            impact: 4.5,
            effort: 2.0,
            estimatedLoss: 2280,
          },
          {
            id: "scene_2",
            scene: "app for business trip booking",
            impact: 4.2,
            effort: 2.5,
            estimatedLoss: 910,
          },
          {
            id: "scene_3",
            scene: "app to manage hotel reservations",
            impact: 3.8,
            effort: 3.2,
            estimatedLoss: 840,
          },
          {
            id: "scene_4",
            scene: "app to track travel prices",
            impact: 3.5,
            effort: 3.0,
            estimatedLoss: 620,
          },
          {
            id: "scene_5",
            scene: "app for booking vacation packages",
            impact: 3.2,
            effort: 3.5,
            estimatedLoss: 540,
          },
        ],
      },
      opportunityCards: [
        {
          id: "scene_1",
          scene: "app for booking flights and stays",
          yourVisibility: 30.4,
          competitorAVisibility: 45.1,
          competitorBVisibility: 39.9,
          estimatedLoss: 2280,
          mainReason:
            "AI 更常引用 reddit、wiki、expedia 等第三方，而非 Trip.com 官方页面。",
          actions: ["补齐官方对比内容", "布局高权威第三方", "打通 GA4 转化链路"],
        },
        {
          id: "scene_2",
          scene: "app for business trip booking",
          yourVisibility: 22.0,
          competitorAVisibility: 41.0,
          competitorBVisibility: 37.0,
          estimatedLoss: 910,
          mainReason:
            "差旅类问法里，AI 更偏好 Egencia / SAP Concur 等既有权威内容。",
          actions: ["补齐差旅场景FAQ", "强化商务案例外链", "上线审批链路说明"],
        },
        {
          id: "scene_3",
          scene: "app to manage hotel reservations",
          yourVisibility: 19.0,
          competitorAVisibility: 38.0,
          competitorBVisibility: 35.0,
          estimatedLoss: 840,
          mainReason:
            "酒店管理类 Query 缺少可被引用的官方产品力解释，导致竞品占位。",
          actions: ["补齐酒店管理页", "输出功能对比表", "同步媒体测评内容"],
        },
        {
          id: "scene_4",
          scene: "app to track travel prices",
          yourVisibility: 20.0,
          competitorAVisibility: 33.0,
          competitorBVisibility: 29.0,
          estimatedLoss: 620,
          mainReason:
            "价格追踪相关内容更多来自比价站点，Trip.com 自有信号不足。",
          actions: ["发布价格策略页", "补齐监控功能说明", "强化比价场景外链"],
        },
        {
          id: "scene_5",
          scene: "app for booking vacation packages",
          yourVisibility: 8.7,
          competitorAVisibility: 26.0,
          competitorBVisibility: 24.0,
          estimatedLoss: 540,
          mainReason:
            "套餐场景官方内容密度不足，AI 优先引用 OTA 聚合站与测评站。",
          actions: ["补齐套餐落地页", "增加真实评价证据", "做机酒套餐专题"],
        },
      ],
      generalSuggestions: [
        {
          title: "获取 AI 流量 & 评估转化",
          content:
            "接入 GA4 / 站内转化数据，把 AI 推荐到下单链路打通，建立可复盘 ROI。",
        },
        {
          title: "SEO 技术评估与内容底座",
          content:
            "持续巡检结构化数据、索引与加载性能，提升 AI 可抓取与可引用的稳定性。",
        },
      ],
    },
    premiumGuide: {
      title: "可选增值：AI 流量归因",
      body:
        "通过平台绑定 Cloudflare、Vercel、WordPress、Shopify 并对接 GA4，可补充看到 AI 流量从“被提及”到“站内转化”的链路表现。",
      features: [
        "支持域名级 AI 流量监控",
        "支持页面级会话归因与转化漏斗",
        "支持按模型/地区/语言拆分表现",
      ],
      blurredMetrics: [
        { label: "AI 访问量", value: "••••••", delta: "+••%" },
        { label: "AI 流量占比", value: "•••%", delta: "+••%" },
        { label: "AI 辅助转化率", value: "•••%", delta: "+••%" },
        { label: "AI 贡献收入", value: "$•••••", delta: "+••%" },
      ],
      indexRows: [
        { platform: "ChatGPT", count: "••••", trend: "+••" },
        { platform: "Claude", count: "•••", trend: "+•" },
        { platform: "Gemini", count: "•••", trend: "+•" },
      ],
    },
    subscriptionCta: {
      eyebrow: "Paid Subscription / Agent Skills",
      headline: "Agent Skills 打通 GEO + SEO 流量闭环",
      summary:
        "从洞察到执行再到汇报，Pro 订阅让营销团队用同一套数据驱动内容、分发和增长复盘。",
      integrations: ["Cloudflare", "Vercel", "WordPress", "Shopify", "GA4"],
      capabilityCards: [
        {
          title: "周报 / 月报自动输出",
          desc: "自动整理核心指标，一键生成可汇报版本。",
        },
        {
          title: "营销 Agent 自动化闭环",
          desc: "任务自动拆解、执行与回传，减少人工协同成本。",
        },
        {
          title: "内容生成 + 优化 + 发布",
          desc: "基于数据洞察自动生成与迭代高意图内容。",
        },
        {
          title: "社媒创作与分发",
          desc: "按平台模板自动改写并分发，统一追踪效果。",
        },
        {
          title: "外链与权威媒体挖掘",
          desc: "自动发现高相关域名与媒体机会，提升权威信号。",
        },
        {
          title: "On-page GEO 检测",
          desc: "对全部内容资产持续跟踪 GEO 表现与异常。",
        },
      ],
      blurredMetrics: [
        { label: "AI 会话数", value: "••••••", delta: "+••%" },
        { label: "辅助线索", value: "••••", delta: "+••%" },
        { label: "GEO 覆盖率", value: "•••%", delta: "+••%" },
        { label: "AI 贡献收入", value: "$•••••", delta: "+••%" },
      ],
      workflowRows: [
        { name: "内容 Agent", status: "Running", output: "•• 篇 / 周" },
        { name: "社媒 Agent", status: "Running", output: "•• 帖 / 周" },
        { name: "外链 Agent", status: "Running", output: "•• 域名 / 周" },
      ],
      ctaPrimary: "预约 Pro 演示",
      ctaSecondary: "查看订阅能力清单",
      footnote: "开通后可优先接入你当前项目的数据源与 Agent 工作流。",
    },
  };

  const chartInstances = [];

  const metricFormatMap = {
    visibility: "percent",
    aiMentionRate: "percent",
    citationRate: "percent",
    shareOfVoice: "percent",
    monthlyVisits: "trafficM",
    avgRank: "rank",
    sentimentScore: "score",
    recommendationScore: "score",
  };

  const platformColumns = (reportData.platformDiff.metrics || []).map((key) => ({
    key,
    label: reportData.platformDiff.metricLabels?.[key] || key,
  }));

  const sectionNavItems = [
    { key: "brandOverview", number: "01", label: "品牌数据概览" },
    { key: "brandCompetition", number: "02", label: "品牌竞争位置" },
    { key: "topicIntents", number: "03", label: "意图与主题场景" },
    { key: "queryExpansion", number: "04", label: "提示词扩展查询" },
    { key: "platformDiff", number: "05", label: "平台差异分析" },
    { key: "sentimentAnalysis", number: "06", label: "情绪与口碑" },
    { key: "opportunitiesSummary", number: "07", label: "机会优先级" },
    { key: "subscriptionCta", number: "08", label: "订阅价值 CTA" },
  ];

  const sectionMetaMap = Object.fromEntries(
    sectionNavItems.map((item) => [item.key, item])
  );

  const chartPalette = ["#2a72d5", "#e8573f", "#00a58f", "#c08c1f", "#5e58bf"];

  function applyGuidelineColors() {
    const { statusColors, painStyle } = reportPrd.codingGuidelines;
    const root = document.documentElement;
    root.style.setProperty("--advantage", statusColors.advantage);
    root.style.setProperty("--disadvantage", statusColors.disadvantage);
    root.style.setProperty("--neutral", statusColors.neutral);
    root.style.setProperty("--warning", "#efb231");
    root.style.setProperty("--pain-color", painStyle.color);
  }

  function applyChartBase(option) {
    const next = { ...option };
    next.color = option.color || chartPalette;
    next.textStyle = {
      fontFamily: "\"Noto Sans SC\", sans-serif",
      color: "#182433",
      ...(option.textStyle || {}),
    };

    if (option.legend) {
      next.legend = {
        textStyle: {
          color: "#2b3b4f",
          fontSize: 12,
          ...(option.legend.textStyle || {}),
        },
        ...option.legend,
      };
    }

    if (option.tooltip) {
      next.tooltip = {
        backgroundColor: "rgba(14, 27, 44, 0.92)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        textStyle: { color: "#f2f5fb", fontSize: 12 },
        ...option.tooltip,
      };
    }

    if (option.xAxis) {
      const xAxisArray = Array.isArray(option.xAxis) ? option.xAxis : [option.xAxis];
      next.xAxis = xAxisArray.map((axis) => ({
        axisLine: { lineStyle: { color: "#9cafc5" } },
        axisTick: { show: false },
        axisLabel: { color: "#2b3b4f" },
        ...axis,
      }));
      if (!Array.isArray(option.xAxis)) {
        next.xAxis = next.xAxis[0];
      }
    }

    if (option.yAxis) {
      const yAxisArray = Array.isArray(option.yAxis) ? option.yAxis : [option.yAxis];
      next.yAxis = yAxisArray.map((axis) => ({
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: "#2b3b4f" },
        splitLine: {
          show: true,
          lineStyle: { color: "rgba(42, 58, 79, 0.15)" },
        },
        ...axis,
      }));
      if (!Array.isArray(option.yAxis)) {
        next.yAxis = next.yAxis[0];
      }
    }

    return next;
  }

  function isMissing(value) {
    return value === null || value === undefined || Number.isNaN(value);
  }

  function number(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function getPath(obj, path) {
    return path.split(".").reduce((acc, part) => {
      if (acc && Object.prototype.hasOwnProperty.call(acc, part)) {
        return acc[part];
      }
      return undefined;
    }, obj);
  }

  function formatValue(value, format) {
    if (isMissing(value)) {
      return reportPrd.codingGuidelines.missingDataDisplay;
    }
    if (format === "percent") {
      return `${Math.round(Number(value))}%`;
    }
    if (format === "rank") {
      return Number(value).toFixed(1);
    }
    if (format === "score") {
      return `${Math.round(Number(value))}`;
    }
    if (format === "trafficM") {
      return `${Number(value).toFixed(2)}M`;
    }
    return String(value);
  }

  function formatMetric(metricKey, value) {
    return formatValue(value, metricFormatMap[metricKey]);
  }

  function formatMetricWithUnit(metricKey, value) {
    const formatted = formatMetric(metricKey, value);
    if (formatted === reportPrd.codingGuidelines.missingDataDisplay) {
      return formatted;
    }
    if (metricKey === "avgRank") {
      return `${formatted} 名`;
    }
    if (metricKey === "sentimentScore") {
      return `${formatted} 分`;
    }
    return formatted;
  }

  function interpolate(template, context) {
    if (!template) {
      return "";
    }
    return template.replace(/{{\s*([^}]+?)\s*}}/g, (_, key) => {
      const value = getPath(context, key.trim());
      if (value === undefined || value === null || value === "") {
        return reportPrd.codingGuidelines.missingDataDisplay;
      }
      return String(value);
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function applyPainStyle(text) {
    if (!text) {
      return "";
    }
    const { prefix, suffix } = reportPrd.codingGuidelines.painStyle;
    if (text.includes(prefix) && text.includes(suffix)) {
      return text;
    }
    return `${prefix}${text}${suffix}`;
  }

  function evaluateCondition(condition, context) {
    try {
      const keys = Object.keys(context);
      const values = keys.map((key) => context[key]);
      return Boolean(new Function(...keys, `return (${condition});`)(...values));
    } catch (error) {
      return false;
    }
  }

  function metricStatus(card) {
    const value = number(reportData.metrics[card.valueField]);
    const benchmark = number(reportData.metrics[card.benchmarkField]);

    if (isMissing(value) || isMissing(benchmark)) {
      return {
        status: "neutral",
        tier: "neutral",
        gap: 0,
        advantage: 0,
        behindPercent: 0,
        improvementPercent: 0,
      };
    }

    const higherIsBetter = card.direction === "higher_is_better";
    const improvementRatio = higherIsBetter
      ? (value - benchmark) / Math.abs(benchmark || 1)
      : (benchmark - value) / Math.abs(benchmark || 1);
    const improvementPercent = Math.round(improvementRatio * 100);
    const gap = Math.round(Math.abs(improvementPercent));

    let tier = "neutral";
    if (improvementRatio <= -0.4) {
      tier = "severeDisadvantage";
    } else if (improvementRatio <= -0.1) {
      tier = "obviousDisadvantage";
    } else if (improvementRatio < 0.1) {
      tier = "neutral";
    } else {
      tier = "strongAdvantage";
    }

    const status =
      tier === "strongAdvantage"
        ? "advantage"
        : tier === "neutral"
          ? "neutral"
          : "disadvantage";

    const advantage = improvementPercent > 0 ? improvementPercent : 0;
    const behindPercent = improvementPercent < 0 ? Math.abs(improvementPercent) : 0;

    return {
      status,
      tier,
      gap,
      advantage,
      behindPercent,
      improvementPercent,
    };
  }

  function shouldShowPain(card, statusInfo) {
    const { gapThresholdPercent, minVolumeThreshold } =
      reportPrd.logicRules.painTextDisplay;

    const value = number(reportData.metrics[card.valueField]);
    const benchmark = number(reportData.metrics[card.benchmarkField]);

    if (
      reportPrd.logicRules.missingData.hidePainTextWhenMissingCoreMetrics &&
      (isMissing(value) || isMissing(benchmark))
    ) {
      return false;
    }

    const volume = number(reportData.sampleVolume[card.metricKey]);
    if (isMissing(volume) || volume < minVolumeThreshold) {
      return false;
    }

    if (statusInfo.status !== "disadvantage") {
      return false;
    }

    return statusInfo.behindPercent >= gapThresholdPercent;
  }

  function sectionHeader(sectionKey, title, description) {
    const meta = sectionMetaMap[sectionKey];
    return `
      <div class="panel-head">
        <p class="panel-index">${meta ? meta.number : "--"}</p>
        <div>
          <h2 class="panel-title">${title}</h2>
          ${description ? `<p class="panel-desc">${description}</p>` : ""}
        </div>
      </div>
    `;
  }

  function compareLabel(status) {
    if (status === "severeDisadvantage") {
      return "严重劣势";
    }
    if (status === "obviousDisadvantage") {
      return "明显落后";
    }
    if (status === "strongAdvantage") {
      return "显著领先";
    }
    return "基本持平";
  }

  function renderHeader() {
    const title = `${reportData.reportMeta.brandName} GEO 售前诊断报告`;
    const subtitle = `${reportData.reportMeta.period} | 覆盖 ${reportData.reportMeta.trackedPlatforms} 个大模型平台 | 追踪 ${reportData.reportMeta.trackedBrands} 个品牌`;
    const visibility = Number(reportData.metrics.visibility).toFixed(1);
    const citationRate = Number(reportData.metrics.citationRate).toFixed(1);
    const nonCitationRate = Math.max(100 - Number(reportData.metrics.citationRate), 0).toFixed(1);
    const lossCount = Number(reportData.reportMeta.estimatedLostRecommendations || 5000).toLocaleString(
      "en-US"
    );
    const heroSignalText = `
      结论基于 <strong>${reportData.reportMeta.modelCount} 个海外大模型</strong>、
      <strong>${reportData.reportMeta.chatSampleCount.toLocaleString("en-US")} 次真实对话</strong>：
      当前 Trip.com 在 AI 对话中的可见度仅 <span class="hero-key-negative">${visibility}%</span>（远低于同行头部区间），
      引用率只有 <span class="hero-key-negative">${citationRate}%</span>，意味着约
      <span class="hero-key-negative">${nonCitationRate}%</span> 的场景在引用第三方而非官方内容。
      按当前对话量估算，每月将保守流失约 <span class="hero-key-loss">${lossCount}+</span> 次潜在推荐机会，
      核心短板集中在高意图场景缺少可被 AI 引用的官方内容。
    `;

    const heroQuestions = document.getElementById("heroQuestions");
    if (heroQuestions) {
      heroQuestions.innerHTML = `
        <span class="hero-question-pill is-red">AI 有没有看到你？</span>
        <span class="hero-question-pill is-yellow">AI 相信谁在讲你？</span>
        <span class="hero-question-pill is-green">AI 喜不喜欢你？</span>
      `;
    }

    document.getElementById("reportTitle").textContent = title;
    document.getElementById("reportSubtitle").textContent = subtitle;
    if (document.getElementById("heroSignal")) {
      document.getElementById("heroSignal").innerHTML = heroSignalText;
    }
    const heroSignalLabel = document.querySelector(".hero-signal-label");
    if (heroSignalLabel) {
      heroSignalLabel.textContent = "业务核心结论";
    }

    document.getElementById("reportMeta").innerHTML = `
      <span class="meta-chip">产品：${reportData.reportMeta.productName}</span>
      <span class="meta-chip">行业：${reportData.reportMeta.industry}</span>
      <span class="meta-chip">报告日期：${reportData.reportMeta.reportDate}</span>
      <span class="meta-chip">Prompt 监控：${reportData.reportMeta.promptMonitorCount.toLocaleString(
        "en-US"
      )}</span>
      <span class="meta-chip">版本：${reportPrd.version}</span>
    `;

    const heroCoverage = document.getElementById("heroCoverage");
    if (heroCoverage) {
      heroCoverage.innerHTML = `
        <p class="hero-coverage-label">模型覆盖 / CAPABILITY</p>
        <p class="hero-coverage-title">DAGENO AI 覆盖模型</p>
        <div class="hero-model-list">
          ${reportData.reportMeta.supportedModels
            .map((model) => `<span class="hero-model-chip">${model}</span>`)
            .join("")}
        </div>
      `;
    }

    const heroLocales = document.getElementById("heroLocales");
    if (heroLocales) {
      heroLocales.innerHTML = `
        <p class="hero-locale-label">监控地区与语言（一一对应）</p>
        <div class="hero-locale-grid">
          ${reportData.reportMeta.monitoredLocales
            .map(
              (locale) => `
                <span class="hero-locale-chip">${locale.region} · ${locale.language}</span>
              `
            )
            .join("")}
        </div>
      `;
    }
  }

  function renderNav() {
    const nav = document.getElementById("reportNav");
    if (!nav) {
      return;
    }
    nav.innerHTML = `
      <p class="nav-caption">Report Flow</p>
      <p class="nav-title">报告导览</p>
      <div class="nav-links">
        ${sectionNavItems
          .map(
            (item, index) => `
            <a href="#${item.key}" class="nav-link ${index === 0 ? "active" : ""}" data-nav-key="${item.key}">
              <span class="nav-num">${item.number}</span>
              <span class="nav-text">${item.label}</span>
            </a>
          `
          )
          .join("")}
      </div>
    `;
  }

  function bindSectionNavigation() {
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const sections = sectionNavItems
      .map((item) => document.getElementById(item.key))
      .filter(Boolean);

    if (!links.length || !sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const activeId = visibleEntries[0].target.id;
        links.forEach((link) => {
          link.classList.toggle("active", link.dataset.navKey === activeId);
        });
      },
      { rootMargin: "-20% 0px -62% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function pickOneSentenceSummary() {
    const m = reportData.metrics;
    const visibilityGap = Math.max(
      Math.round(m.competitorAvgVisibility - m.visibility),
      0
    );
    const mentionGap = Math.max(
      Math.round(m.competitorAvgMentionRate - m.aiMentionRate),
      0
    );
    const citationGap = Math.max(
      Math.round((m.competitorAvgCitationRate - m.citationRate) * 10) / 10,
      0
    );
    const rankGap = Math.max(
      Math.round((m.avgRank - m.competitorAvgRank) * 10) / 10,
      0
    );
    const trafficLead = Math.round(
      ((m.monthlyVisits - m.competitorAvgMonthlyVisits) /
        Math.max(m.competitorAvgMonthlyVisits, 1)) *
        100
    );

    const sentimentText =
      m.sentimentScore >= m.industryAvgSentimentScore
        ? "情绪层面已接近行业优等生"
        : "情绪层面仍低于行业均值，需要继续压降中性与负面提及占比";

    return `从 GEO/SEO 的诊断结论看，Trip.com 当前最大瓶颈不在站内承接，而在 AI 入口曝光：可见度与竞品均值仍有约 ${visibilityGap}% 的差距，AI 提及率低 ${mentionGap}%，并且引用率仅 ${m.citationRate}%（较竞品低 ${citationGap}%），导致用户在高意图提问场景中更先看到对手。与此同时，你的月访问量达到 ${m.monthlyVisits.toFixed(
      2
    )}M，较竞品均值高约 ${trafficLead}%，说明站内转化基础是优势资产；一旦把“高价值 query 覆盖 + 可引用官方内容 + 排名前二推荐位”三件事做扎实，现有流量池会被更有效放大。当前平均排名落后 ${rankGap} 位且${sentimentText}，因此建议优先执行“高价值缺口 Query 补齐、权威来源重建、模型平台差异化投放”三步策略，先补曝光，再提权威，最后做转化闭环。`;
  }

  function buildMetricContext(metricKey, statusInfo) {
    const base = {
      ...reportData.metrics,
      gap: statusInfo.gap,
      advantage: Math.max(statusInfo.advantage, 0),
      behindPercent: Math.max(statusInfo.behindPercent, 0),
      avgRank: formatMetric("avgRank", reportData.metrics.avgRank),
      citationRate: Number(reportData.metrics.citationRate).toFixed(1),
      nonCitationRate: Math.max(100 - Number(reportData.metrics.citationRate), 0).toFixed(1),
    };

    const context = reportData.metricNarrativeContext[metricKey] || {};

    if (metricKey === "visibility") {
      return {
        ...base,
        ...context,
        per100: context.per100 ?? Math.round(reportData.metrics.visibility),
        missingPer100:
          context.missingPer100 ??
          Math.max(100 - Math.round(reportData.metrics.visibility), 0),
        gapUsers: Math.max(Math.round(statusInfo.gap / 10), 1),
      };
    }

    if (metricKey === "shareOfVoice") {
      const sharePer10 = (reportData.metrics.shareOfVoice / 10).toFixed(1);
      const competitorSharePer10 = (10 - Number(sharePer10)).toFixed(1);
      return {
        ...base,
        ...context,
        sharePer10,
        competitorSharePer10,
      };
    }

    if (metricKey === "aiMentionRate") {
      return {
        ...base,
        ...context,
        aiMentionRate: formatMetric("aiMentionRate", reportData.metrics.aiMentionRate),
        brandHeard: Number(context.brandHeard ?? reportData.metrics.aiMentionRate)
          .toFixed(1)
          .replace(/\.0$/, ""),
      };
    }

    if (metricKey === "citationRate") {
      return {
        ...base,
        ...context,
      };
    }

    if (metricKey === "monthlyVisits") {
      return {
        ...base,
        ...context,
        monthVisits:
          context.monthVisits ??
          `${Number(reportData.metrics.monthlyVisits).toFixed(2)}M`,
        monthlyVisits: `${Number(reportData.metrics.monthlyVisits).toFixed(2)}M`,
        competitorAvgMonthlyVisits: `${Number(
          reportData.metrics.competitorAvgMonthlyVisits
        ).toFixed(2)}M`,
      };
    }

    if (metricKey === "sentimentScore") {
      return {
        ...base,
        ...context,
        sentimentScore: formatMetric("sentimentScore", reportData.metrics.sentimentScore),
        positivePct:
          context.positivePct ??
          Math.round(
            (Number(context.positiveCount || 0) /
              Math.max(Number(context.totalBrandMentions || 1), 1)) *
              100
          ),
        neutralPct:
          context.neutralPct ??
          Math.round(
            (Number(context.neutralCount || 0) /
              Math.max(Number(context.totalBrandMentions || 1), 1)) *
              100
          ),
        negativePct:
          context.negativePct ??
          Math.round(
            (Number(context.negativeCount || 0) /
              Math.max(Number(context.totalBrandMentions || 1), 1)) *
              100
          ),
      };
    }

    return {
      ...base,
      ...context,
    };
  }

  function decorateCallout(text, tone) {
    if (!text) {
      return "";
    }
    const toneClass = tone || "neutral";
    return text.replace(
      /【[^】]+】/,
      (matched) => `<span class="metric-callout-tag ${toneClass}">${matched}</span>`
    );
  }

  function metricGapText(card, value, benchmark) {
    const valueNumber = number(value);
    const benchmarkNumber = number(benchmark);
    if (isMissing(valueNumber) || isMissing(benchmarkNumber)) {
      return reportPrd.codingGuidelines.missingDataDisplay;
    }

    const format = metricFormatMap[card.metricKey];
    const gapAbs = Math.abs(valueNumber - benchmarkNumber);

    if (format === "percent") {
      return `${Math.round(gapAbs)}%`;
    }
    if (format === "rank") {
      return `${gapAbs.toFixed(1)} 名`;
    }
    if (format === "score") {
      return `${Math.round(gapAbs)} 分`;
    }
    if (format === "trafficM") {
      const relativeGap =
        (gapAbs / Math.max(Math.abs(benchmarkNumber), 1)) * 100;
      return `${Math.round(relativeGap)}%`;
    }
    return String(Math.round(gapAbs));
  }

  function renderBrandOverview() {
    const section = reportPrd.sections.brand_overview;
    const container = document.getElementById("brandOverview");
    const cardsByKey = Object.fromEntries(
      section.metricCards.map((card) => [card.metricKey, card])
    );

    const renderMetricCard = (card) => {
        const value = reportData.metrics[card.valueField];
        const benchmark = reportData.metrics[card.benchmarkField];
        const statusInfo = metricStatus(card);
        const context = buildMetricContext(card.metricKey, statusInfo);
        const statusLabel = compareLabel(statusInfo.tier);
        const valueNumber = number(value);
        const benchmarkNumber = number(benchmark);
        const safeMax = Math.max(Math.abs(valueNumber || 0), Math.abs(benchmarkNumber || 0), 1);
        const yourBar = isMissing(valueNumber)
          ? 0
          : Math.max((Math.abs(valueNumber) / safeMax) * 100, 4);
        const benchmarkBar = isMissing(benchmarkNumber)
          ? 0
          : Math.max((Math.abs(benchmarkNumber) / safeMax) * 100, 4);
        const gapText = metricGapText(card, value, benchmark);
        const compareText =
          statusInfo.status === "advantage"
            ? `领先 ${gapText} | 竞品平均：${formatMetricWithUnit(card.metricKey, benchmark)}`
            : statusInfo.status === "disadvantage"
              ? `落后 ${gapText} | 竞品平均：${formatMetricWithUnit(card.metricKey, benchmark)}`
              : `基本持平 | 竞品平均：${formatMetricWithUnit(card.metricKey, benchmark)}`;
        const businessText = interpolate(card.explanations.primary, context);
        const neutralLine = "【状态观察】当前与竞品差距有限，建议继续围绕高价值场景提升优势。";
        const calloutRaw =
          statusInfo.status === "advantage"
            ? interpolate(card.explanations.advantage, context)
            : statusInfo.status === "disadvantage"
              ? interpolate(card.explanations.pain, context)
              : neutralLine;
        const calloutTone =
          statusInfo.status === "advantage"
            ? "success"
            : statusInfo.status === "disadvantage"
              ? "danger"
              : "neutral";
        const calloutText = decorateCallout(calloutRaw, calloutTone);
        const tierClassMap = {
          severeDisadvantage: "severe-disadvantage",
          obviousDisadvantage: "obvious-disadvantage",
          neutral: "neutral",
          strongAdvantage: "strong-advantage",
        };
        const tierClass = tierClassMap[statusInfo.tier] || "neutral";

        return `
          <article class="metric-card status-${statusInfo.status} tier-${tierClass}">
            <div class="metric-top-row">
              <h3 class="metric-title">${card.title}</h3>
              <span class="metric-status-pill ${tierClass}">${statusLabel}</span>
            </div>
            <p class="metric-value">${formatMetricWithUnit(card.metricKey, value)}</p>
            <p class="metric-compare-line ${statusInfo.status}">${compareText}</p>
            <div class="metric-benchmark-box">
              <p class="metric-benchmark-title">你 vs 竞品平均：${formatMetricWithUnit(
                card.metricKey,
                benchmark
              )}</p>
              <div class="metric-bar-row">
                <span class="metric-bar-label">你</span>
                <div class="metric-bar-track"><span class="metric-bar-you" style="width:${yourBar.toFixed(
                  1
                )}%"></span></div>
              </div>
              <div class="metric-bar-row">
                <span class="metric-bar-label">竞品</span>
                <div class="metric-bar-track"><span class="metric-bar-benchmark" style="width:${benchmarkBar.toFixed(
                  1
                )}%"></span></div>
              </div>
            </div>
            <p class="metric-desc"><strong>定义：</strong>${card.leftDescription}</p>
            <p class="metric-business-line">${businessText}</p>
            <p class="metric-callout-line ${calloutTone}">${calloutText}</p>
          </article>
        `;
    };

    const groupedMarkup = section.metricGroups
      .map((group) => {
        const groupCards = group.metricKeys
          .map((metricKey) => cardsByKey[metricKey])
          .filter(Boolean)
          .map((card) => renderMetricCard(card))
          .join("");

        return `
          <section class="metric-group-block">
            <div class="metric-group-head">
              <p class="metric-group-title">${group.title}</p>
              <span class="metric-group-divider"></span>
            </div>
            <div class="metric-grid">${groupCards}</div>
          </section>
        `;
      })
      .join("");

    const premiumGuide = reportData.premiumGuide;
    const overviewMeta = sectionMetaMap.brandOverview;

    container.innerHTML = `
      <div class="overview-header">
        <span class="overview-header-index">${overviewMeta ? overviewMeta.number : "01"}</span>
        <div>
          <h2 class="overview-header-title">${section.title}</h2>
          <p class="overview-header-subtitle">${section.description}</p>
        </div>
      </div>
      <div class="overview-groups">${groupedMarkup}</div>
      <aside class="upgrade-lite" role="note" aria-label="AI 流量归因付费能力引导">
        <div class="upgrade-lite-main">
          <p class="upgrade-lite-eyebrow">增值能力（可选）</p>
          <h3 class="upgrade-lite-title">${premiumGuide.title}</h3>
          <p class="upgrade-lite-body">${premiumGuide.body}</p>
          <div class="upgrade-lite-tags">
            ${premiumGuide.features
              .map((feature) => `<span class="upgrade-lite-tag">${feature}</span>`)
              .join("")}
          </div>
          <button class="upgrade-lite-button" type="button">查看付费版数据视图</button>
        </div>
        <div class="upgrade-lite-visual" aria-hidden="true">
          <p class="upgrade-lite-visual-title">可监控维度（虚化示意）</p>
          <div class="upgrade-lite-kpis">
            ${premiumGuide.blurredMetrics
              .map(
                (item) => `
                  <div class="upgrade-lite-kpi">
                    <p>${item.label}</p>
                    <strong>${item.value}</strong>
                    <span>${item.delta}</span>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="upgrade-lite-mini-table">
            <div class="upgrade-lite-mini-head">
              <span>Platform</span>
              <span>Count</span>
              <span>Change</span>
            </div>
            ${premiumGuide.indexRows
              .slice(0, 3)
              .map(
                (item) => `
                  <div class="upgrade-lite-mini-row">
                    <span>${item.platform}</span>
                    <span>${item.count}</span>
                    <span>${item.trend}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </aside>
      <div class="overview-transition-bar">${section.transitionText}</div>
    `;
  }

  function ensureChart(id, option) {
    const element = document.getElementById(id);
    if (!element) {
      return null;
    }
    if (!window.echarts) {
      element.innerHTML = `<p class="muted" style="padding:12px;">图表库加载失败，请检查网络后刷新页面。</p>`;
      return null;
    }
    const instance = window.echarts.init(element);
    instance.setOption(applyChartBase(option));
    chartInstances.push(instance);
    return instance;
  }

  function renderBrandCompetition() {
    const section = reportPrd.sections.brand_competition;
    const container = document.getElementById("brandCompetition");

    container.innerHTML = `
      ${sectionHeader("brandCompetition", section.title)}
      <div class="section-grid">
        <div class="chart-box">
          <h3 class="chart-title">品牌竞争雷达图（标准化 0-100）</h3>
          <div class="chart-canvas" id="brandCompetitionRadar"></div>
        </div>
        <div class="insight-box" id="brandCompetitionInsight"></div>
      </div>
    `;

    const dimensions = reportData.brandCompetition.dimensions;
    const labelMap = reportData.brandCompetition.labels;
    const seriesPool = reportData.brandCompetition.series;
    const yourSeries = seriesPool.find((item) => item.name === reportData.reportMeta.brandName);
    const industry = seriesPool.find((item) => item.name === "行业平均");
    const competitorPool = seriesPool.filter((item) =>
      reportData.brandCompetition.mainCompetitors.includes(item.name)
    );

    const dimensionStats = dimensions.map((key) => {
      const yourScore = number(yourSeries?.values?.[key]);
      const industryScore = number(industry?.values?.[key]);
      const topScore = Math.max(
        ...competitorPool.map((item) => number(item.values[key])),
        number(yourScore)
      );
      const gap = Math.max(Math.round(topScore - yourScore), 0);
      const deltaIndustry = Math.round(yourScore - industryScore);
      return {
        key,
        label: labelMap[key],
        yourScore: Math.round(yourScore),
        industryScore: Math.round(industryScore),
        topScore: Math.round(topScore),
        gap,
        deltaIndustry,
      };
    });

    const weakRows = [...dimensionStats]
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 3);
    const weakSet = new Set(weakRows.map((item) => item.key));

    const indicators = dimensions.map((key) => ({
      name: weakSet.has(key) ? `{warn|●} ${labelMap[key]}` : labelMap[key],
      max: 100,
    }));

    const seriesStyleMap = {
      [reportData.reportMeta.brandName]: {
        color: "#2a72d5",
        lineWidth: 3.5,
        lineType: "solid",
        opacity: 1,
        areaOpacity: 0.14,
        symbol: "circle",
      },
      "Booking.com": {
        color: "#ff7a3c",
        lineWidth: 1.6,
        lineType: "solid",
        opacity: 0.35,
        areaOpacity: 0.02,
        symbol: "none",
      },
      Expedia: {
        color: "#46b7a5",
        lineWidth: 1.6,
        lineType: "solid",
        opacity: 0.35,
        areaOpacity: 0.02,
        symbol: "none",
      },
      Airbnb: {
        color: "#f35f99",
        lineWidth: 1.6,
        lineType: "solid",
        opacity: 0.35,
        areaOpacity: 0.02,
        symbol: "none",
      },
      "行业平均": {
        color: "#8e98a7",
        lineWidth: 2,
        lineType: "dashed",
        opacity: 0.92,
        areaOpacity: 0,
        symbol: "none",
      },
    };

    const radarSeries = seriesPool.map((seriesItem) => {
      const style = seriesStyleMap[seriesItem.name] || {
        color: "#8aa2bf",
        lineWidth: 1.4,
        lineType: "solid",
        opacity: 0.35,
        areaOpacity: 0.02,
        symbol: "none",
      };
      return {
        name: seriesItem.name,
        value: dimensions.map((key) => seriesItem.values[key]),
        lineStyle: {
          width: style.lineWidth,
          type: style.lineType,
          color: style.color,
          opacity: style.opacity,
        },
        itemStyle: {
          color: style.color,
          opacity: style.opacity,
        },
        areaStyle: {
          color: style.color,
          opacity: style.areaOpacity,
        },
        symbol: style.symbol,
        symbolSize: style.symbol === "none" ? 0 : 5,
      };
    });

    ensureChart("brandCompetitionRadar", {
      tooltip: { trigger: "item" },
      legend: {
        bottom: 8,
      },
      radar: {
        indicator: indicators,
        splitNumber: 5,
        axisNameGap: 10,
        name: {
          rich: {
            warn: {
              color: "#f44336",
              fontSize: 12,
              fontWeight: 800,
              padding: [0, 2, 0, 0],
            },
          },
        },
      },
      series: [
        {
          type: "radar",
          data: radarSeries,
        },
      ],
    });

    const strong = [...dimensionStats].sort((a, b) => b.deltaIndustry - a.deltaIndustry)[0];
    const weak1 = weakRows[0];
    const weak2 = weakRows[1] || weakRows[0];
    const weak3 = weakRows[2] || weakRows[weakRows.length - 1] || weakRows[0];
    const relationWord = strong.deltaIndustry >= 2 ? "略高于行业平均" : "接近行业平均";
    const weakDimsJoined = [weak1, weak2, weak3]
      .filter(Boolean)
      .map((item) => `「${item.label}」`)
      .join("、");

    const weakLine = [weak1, weak2, weak3]
      .filter(Boolean)
      .map(
        (item) => `
          <li>
            <span class="metric-name">${item.label}</span>：
            Trip.com <strong class="num">${item.yourScore}</strong>，
            竞品头部约 <strong class="num">${item.topScore}</strong>
            （差距约 <strong class="num danger">${item.gap}</strong> 分）
          </li>
        `
      )
      .join("");

    document.getElementById("brandCompetitionInsight").innerHTML = `
      <div class="competition-insight">
        <section class="competition-insight-section">
          <p>
            <span class="competition-tag advantage">【优势聚焦】</span>
            在本次对比的 5 个关键维度中，Trip.com 在「${strong.label}」上相对表现更好，得分为
            <strong class="num">${strong.yourScore}</strong>，${relationWord}
            （<strong class="num">${strong.industryScore}</strong>）。
          </p>
        </section>
        <section class="competition-insight-section">
          <p>
            <span class="competition-tag danger">【短板集中】</span>
            但在 ${weakDimsJoined} 三项直接影响 AI 推荐的核心指标上，Trip.com 明显落后于 Booking.com / Expedia：
          </p>
          <ul class="competition-gap-list">
            ${weakLine}
          </ul>
          <p class="competition-footnote">这些短板会直接拉低你在 AI 中被“优先推荐”的概率。</p>
        </section>
      </div>
    `;
  }

  function topicQuadrant(topic) {
    const x = topic.commercialValueScore;
    const y = topic.visibilityRate;
    if (x >= 5 && y >= 50) return "core";
    if (x >= 5 && y < 50) return "gap";
    if (x < 5 && y >= 50) return "mindshare";
    return "low";
  }

  function quadrantColor(quadrant) {
    if (quadrant === "core") return "#4caf50";
    if (quadrant === "gap") return "#f44336";
    if (quadrant === "mindshare") return "#2f83df";
    return "#9e9e9e";
  }

  function commercialIntentMeta(score) {
    const value = number(score);
    if (isMissing(value)) {
      return {
        code: "N/A",
        label: "未知",
        range: "N/A",
        description: "暂无可用的意图分层数据",
      };
    }

    if (value <= 4) {
      return {
        code: "I",
        label: "信息型",
        range: "0-4",
        description: "用户正在寻求知识、问题答案或教育内容。",
      };
    }

    if (value <= 7) {
      return {
        code: "C",
        label: "商业型",
        range: "5-7",
        description: "用户正在调查产品、服务或品牌，为未来的购买决策提供信息。",
      };
    }

    return {
      code: "T",
      label: "交易型",
      range: "8-10",
      description: "用户准备采取购买、下载或使用工具等具体行动。",
    };
  }

  function renderTopicIntents() {
    const section = reportPrd.sections.topic_intents;
    const container = document.getElementById("topicIntents");

    container.innerHTML = `
      ${sectionHeader("topicIntents", section.title)}
      <p class="topic-intro-line">${section.introText}</p>
      <div class="topic-intents-chart-row">
        <div class="chart-box topic-intents-chart-box">
          <h3 class="chart-title">意图 × 可见度四象限（气泡大小 = 月对话量）</h3>
          <div class="chart-canvas" id="topicQuadrantChart"></div>
          <div class="topic-axis-note-row">
            <span>X轴：商业价值 / 转化意图（0–10，越往右越接近下单决策）</span>
            <span>Y轴：该 Topic 下你的可见度 / 声量份额（0–100%）</span>
          </div>
          <div class="topic-intent-band">
            <span class="intent-chip is-i"><strong>I</strong> 信息型（0-4）</span>
            <span class="intent-chip is-c"><strong>C</strong> 商业型（5-7）</span>
            <span class="intent-chip is-t"><strong>T</strong> 交易型（8-10）</span>
          </div>
          <div class="topic-quadrant-grid">
            <p><strong>核心优势战场：</strong>高意图 × 高可见度，已经是你的强势买单场景，应重点防守和放大。</p>
            <p><strong class="danger">【高价值缺口】</strong>高意图 × 低可见度，用户已经准备下单，但 AI 很少提到你，是当前 GEO 的第一优先级战场。</p>
            <p><strong>认知型优势：</strong>低意图 × 高可见度，适合作为品牌认知和口碑种草场景。</p>
            <p><strong>低优先级：</strong>低意图 × 低可见度，短期内业务价值有限，可暂缓投入。</p>
          </div>
        </div>
      </div>
      <div class="topic-gap-side topic-gap-inline">
        <h3 class="topic-gap-side-title">${section.highValueGapTitle}</h3>
        <div class="topic-gap-list topic-gap-grid" id="topicCards"></div>
      </div>
      <div class="topic-transition-bar">${section.transitionText}</div>
    `;

    const sentimentLabel = (score) => {
      if (score >= 70) {
        return "偏正面";
      }
      if (score >= 55) {
        return "中性";
      }
      return "偏负面";
    };

    const withOpportunityContext = (topic) => {
      const monthlyChatVolume = number(topic.monthlyChatVolume || topic.chatVolume);
      const yourVisibility = Math.round(number(topic.visibilityRate));
      const competitorAvgVisibility = Math.round(number(topic.competitorAvgVisibility));
      const topCompetitorVisibility = Math.round(
        number(topic.topCompetitorVisibility || topic.competitorAvgVisibility)
      );
      const targetVisibility = Math.max(
        60,
        Math.min(80, Math.round(Math.max(competitorAvgVisibility, yourVisibility + 20)))
      );
      const opportunityLossMentions =
        topic.opportunityLossMentions ??
        Math.max(
          Math.round(
            monthlyChatVolume *
              (Math.max(competitorAvgVisibility - yourVisibility, 0) / 100)
          ),
          number(topic.estimatedLoss || 0)
        );
      const potentialGainMentions =
        topic.potentialGainMentions ??
        Math.max(
          Math.round(monthlyChatVolume * (Math.max(targetVisibility - yourVisibility, 0) / 100)),
          0
        );

      return {
        ...topic,
        monthlyChatVolume,
        yourVisibility,
        competitorAvgVisibility,
        topCompetitorVisibility,
        targetVisibility,
        opportunityLossMentions,
        potentialGainMentions,
      };
    };

    const topics = reportData.topicIntents.topics.map(withOpportunityContext);
    const scatterData = topics.map((topic) => {
      const quadrant = topicQuadrant(topic);
      const isPriorityGap = quadrant === "gap" && topic.monthlyChatVolume >= 3000;
      return {
        name: topic.topicName,
        value: [
          topic.commercialValueScore,
          topic.yourVisibility,
          topic.monthlyChatVolume,
          topic.topCompetitorVisibility,
          topic.targetVisibility,
          topic.potentialGainMentions,
          topic.competitorAvgVisibility,
          topic.topCompetitors,
        ],
        label: {
          show: true,
          formatter: () => `${topic.topicName}\n${topic.yourVisibility}%`,
          color: "#2b3b50",
          fontSize: 11,
          lineHeight: 15,
        },
        itemStyle: {
          color: isPriorityGap ? "#f44336" : quadrantColor(quadrant),
          borderColor: isPriorityGap ? "#b71c1c" : "rgba(20,31,50,0.2)",
          borderWidth: isPriorityGap ? 3 : 1,
          shadowBlur: isPriorityGap ? 12 : 0,
          shadowColor: isPriorityGap ? "rgba(244,67,54,0.4)" : "transparent",
        },
      };
    });

    ensureChart("topicQuadrantChart", {
      tooltip: {
        formatter: (params) => {
          const [x, y, volume, topCompetitorVisibility, targetVisibility, extraMentions, competitorAvg, topCompetitors] =
            params.value;
          const intent = commercialIntentMeta(x);
          return [
            `主题：${params.name}`,
            `商业意图评分：${x} / 10`,
            `意图类型：${intent.code}（${intent.label}，${intent.range} 分）`,
            `类型说明：${intent.description}`,
            `你品牌可见度：${y}%`,
            `主要竞品可见度：${topCompetitorVisibility}%（${topCompetitors}）`,
            `月对话量：${Number(volume).toLocaleString("en-US")} 次`,
            `人话理解：每 10 次相关对话里，Trip.com 大约只出现 ${Math.max(
              Number(y / 10).toFixed(1),
              0
            )} 次`,
            "",
            `【机会提示】若可见度从 ${y}% 提升至 ${targetVisibility}%，`,
            `每月可多获得约 ${Number(extraMentions).toLocaleString("en-US")} 次推荐机会。`,
          ].join("<br/>");
        },
      },
      grid: { left: 56, right: 32, top: 44, bottom: 44 },
      xAxis: {
        min: 0,
        max: 10,
        name: "商业价值 / 转化意图",
        splitLine: { show: true },
      },
      yAxis: {
        min: 0,
        max: 100,
        name: "可见度 / 声量份额",
        splitLine: { show: true },
      },
      series: [
        {
          type: "scatter",
          data: scatterData,
          symbolSize: (value) => Math.max(14, Math.min(56, Math.sqrt(value[2]) * 0.72)),
          emphasis: {
            label: {
              show: true,
              formatter: (params) => `${params.name}\n${Math.round(params.value[1])}%`,
              position: "top",
            },
          },
          markLine: {
            symbol: "none",
            silent: true,
            lineStyle: { type: "dashed", color: "#8ca0b6" },
            data: [
              {
                xAxis: 5,
                label: {
                  show: true,
                  formatter: "商业意图分水岭",
                  position: "insideEndTop",
                  color: "#6a7b92",
                  fontSize: 11,
                  backgroundColor: "rgba(255,255,255,0.78)",
                  borderRadius: 6,
                  padding: [2, 6],
                },
              },
              {
                yAxis: 50,
                label: {
                  show: true,
                  formatter: "目标可见度基准线",
                  position: "insideEndRight",
                  color: "#6a7b92",
                  fontSize: 11,
                  backgroundColor: "rgba(255,255,255,0.78)",
                  borderRadius: 6,
                  padding: [2, 6],
                },
              },
            ],
          },
        },
      ],
    });

    const highValueGapTop3 = topics
      .filter(
        (topic) =>
          topic.commercialValueScore >= 7 &&
          topic.yourVisibility < topic.competitorAvgVisibility
      )
      .sort((a, b) => b.monthlyChatVolume - a.monthlyChatVolume)
      .slice(0, 3);

    document.getElementById("topicCards").innerHTML = highValueGapTop3
      .map((topic, index) => {
        const intent = commercialIntentMeta(topic.commercialValueScore);
        const context = {
          rank: index + 1,
          topicName: topic.topicName,
          yourVisibility: topic.yourVisibility,
          competitorAvgVisibility: topic.competitorAvgVisibility,
          sentimentScore: Math.round(topic.sentimentScore),
          sentimentLabel: sentimentLabel(number(topic.sentimentScore)),
          intentCode: intent.code,
          intentLabel: intent.label,
          intentScore: Number(topic.commercialValueScore).toFixed(1),
          topCompetitors: topic.topCompetitors,
          monthlyChatVolume: Number(topic.monthlyChatVolume).toLocaleString("en-US"),
          opportunityLossMentions: Number(topic.opportunityLossMentions).toLocaleString("en-US"),
          targetVisibility: topic.targetVisibility,
          potentialGainMentions: Number(topic.potentialGainMentions).toLocaleString("en-US"),
          per10Mentions: (topic.yourVisibility / 10).toFixed(1).replace(/\.0$/, ""),
        };

        return `
          <article class="topic-gap-card">
            <p class="topic-gap-rank">高价值缺口 TOP ${context.rank}</p>
            <h4 class="topic-gap-title">主题：${context.topicName}</h4>
            <p class="topic-gap-line">意图等级：<strong>${context.intentCode} · ${context.intentLabel}</strong>（${context.intentScore}/10）</p>
            <p class="topic-gap-line">你品牌可见度：<strong>${context.yourVisibility}%</strong></p>
            <p class="topic-gap-line">竞品平均可见度：<strong>${context.competitorAvgVisibility}%</strong>（${context.topCompetitors}）</p>
            <p class="topic-gap-line">情感得分：<strong>${context.sentimentScore}</strong>（${context.sentimentLabel}）</p>
            <p class="topic-gap-line">月对话量：<strong>${context.monthlyChatVolume}</strong> 次</p>
            <p class="topic-gap-loss">
              <span>【机会损失】</span>按当前对话量估算，每月约 ${context.opportunityLossMentions} 次推荐机会被主要竞品占据。
            </p>
            <p class="topic-gap-brief">
              一句话解释：这是用户直接准备下单的场景，但 AI 更常推荐 ${context.topCompetitors}，而不是你（每 10 次相关对话里你大约只出现 ${context.per10Mentions} 次）。若把可见度提升到 ${context.targetVisibility}%，预计每月可额外获得约 ${context.potentialGainMentions} 次被推荐机会。
            </p>
          </article>
        `;
      })
      .join("");
  }

  function normalizeQueryStatus(status, mentionStatus, citationStatus) {
    if (status === "mentioned_and_cited") {
      return "mentioned_and_cited";
    }
    if (status === "mentioned_but_not_cited") {
      return "mentioned_but_not_cited";
    }
    if (status === "not_mentioned") {
      return "not_mentioned";
    }

    const mention =
      mentionStatus === true ||
      mentionStatus === "有" ||
      mentionStatus === "yes" ||
      mentionStatus === "mentioned";
    const cited =
      citationStatus === true ||
      citationStatus === "有" ||
      citationStatus === "yes" ||
      citationStatus === "cited";

    if (mention && cited) {
      return "mentioned_and_cited";
    }
    if (mention) {
      return "mentioned_but_not_cited";
    }
    return "not_mentioned";
  }

  function queryStatusVisual(statusKey) {
    if (statusKey === "mentioned_and_cited") {
      return {
        fill: "#4CAF50",
        border: "#4CAF50",
        borderWidth: 2,
      };
    }
    if (statusKey === "mentioned_but_not_cited") {
      return {
        fill: "transparent",
        border: "#FFC107",
        borderWidth: 2.4,
      };
    }
    return {
      fill: "transparent",
      border: "#F44336",
      borderWidth: 3.2,
    };
  }

  function queryStatusText(statusKey) {
    if (statusKey === "mentioned_and_cited") {
      return "已被频繁提及，并引用你的相关页面";
    }
    if (statusKey === "mentioned_but_not_cited") {
      return "偶尔被提及，但很少引用你的官网或官方内容";
    }
    return "完全未被提及，在该问题下用户只会看到竞品";
  }

  function normalizeQueryExpansionData() {
    const source = reportData.queryExpansion || {};
    const rootPrompt =
      source.rootPrompt ||
      source.seedPrompt ||
      reportPrd.codingGuidelines.missingDataDisplay;

    const explicitTopics = Array.isArray(source.intermediateTopics)
      ? source.intermediateTopics
      : null;
    const hasExplicitShape =
      explicitTopics &&
      source.leafQueries &&
      source.statusPerLeaf &&
      typeof source.leafQueries === "object" &&
      typeof source.statusPerLeaf === "object";

    const normalized = {
      rootPrompt,
      intermediateTopics: [],
      leafQueries: {},
      statusPerLeaf: {},
      metricsPerLeaf: {},
      allLeaves: [],
    };

    if (hasExplicitShape) {
      normalized.intermediateTopics = explicitTopics;

      explicitTopics.forEach((topic) => {
        const leaves = Array.isArray(source.leafQueries[topic])
          ? source.leafQueries[topic]
          : [];
        normalized.leafQueries[topic] = leaves;

        leaves.forEach((leafQuery) => {
          const statusKey = normalizeQueryStatus(source.statusPerLeaf[leafQuery]);
          const metrics = source.metricsPerLeaf?.[leafQuery] || {};
          const frequency = Math.max(Math.round(number(metrics.frequency) || 0), 0);
          const mainCompetitors = Array.isArray(metrics.mainCompetitors)
            ? metrics.mainCompetitors.join("、")
            : metrics.mainCompetitors || reportPrd.codingGuidelines.missingDataDisplay;
          const topicName = metrics.topicName || topic;

          normalized.statusPerLeaf[leafQuery] = statusKey;
          normalized.metricsPerLeaf[leafQuery] = {
            frequency,
            mainCompetitors,
            topicName,
          };
          normalized.allLeaves.push({
            leafQuery,
            topicName,
            frequency,
            mainCompetitors,
            statusKey,
          });
        });
      });

      return normalized;
    }

    const clusters = Array.isArray(source.clusters) ? source.clusters : [];
    normalized.intermediateTopics = clusters.map((cluster) => cluster.clusterName);

    clusters.forEach((cluster) => {
      const topic = cluster.clusterName || "未命名主题";
      const queries = Array.isArray(cluster.queries) ? cluster.queries : [];
      normalized.leafQueries[topic] = queries.map((query) => query.queryText);

      queries.forEach((query) => {
        const leafQuery = query.queryText;
        const frequency = Math.max(Math.round(number(query.frequency) || 0), 0);
        const statusKey = normalizeQueryStatus(
          null,
          query.mentionStatus,
          query.citationStatus
        );
        const mainCompetitors =
          query.mainRecommendedBrands || reportPrd.codingGuidelines.missingDataDisplay;
        const topicName = query.topicName || topic;

        normalized.statusPerLeaf[leafQuery] = statusKey;
        normalized.metricsPerLeaf[leafQuery] = {
          frequency,
          mainCompetitors,
          topicName,
        };
        normalized.allLeaves.push({
          leafQuery,
          topicName,
          frequency,
          mainCompetitors,
          statusKey,
        });
      });
    });

    return normalized;
  }

  function buildQueryPainText(queryItem) {
    const frequency = Math.max(Math.round(number(queryItem.frequency) || 0), 0);
    if (frequency < 20) {
      return {
        level: "mild",
        text: interpolate(
          "【轻度缺口】样本量不大，但「{{leafQuery}}」与业务高度相关，建议提前布局内容。",
          {
            leafQuery: queryItem.leafQuery,
          }
        ),
      };
    }
    return {
      level: "severe",
      text: interpolate(
        "【高损失】在「{{leafQuery}}」这个延伸问题下，AI 主要推荐 {{mainCompetitors}}，你的品牌完全缺席；按当前频次估算，每月约流失 {{estimatedLoss}} 次相关推荐机会。",
        {
          leafQuery: queryItem.leafQuery,
          mainCompetitors: queryItem.mainCompetitors,
          estimatedLoss: frequency,
        }
      ),
    };
  }

  function renderQueryExpansion() {
    const section = reportPrd.sections.query_expansion;
    const container = document.getElementById("queryExpansion");
    const normalized = normalizeQueryExpansionData();
    const top5 = normalized.allLeaves
      .filter((item) => item.statusKey === "not_mentioned")
      .sort((a, b) => b.frequency - a.frequency)
      .slice(0, 5);

    container.innerHTML = `
      ${sectionHeader("queryExpansion", section.title)}
      <p class="query-intro-line">${section.introText}</p>
      <div class="query-expansion-layout">
        <div class="chart-box query-tree-box">
          <h3 class="chart-title query-chart-title">Prompt 扩展树（Tree / Fan-out）</h3>
          <div class="query-tree-meta">
            <div class="query-root-brief">
              <p class="query-root-label">用户原始问题（核心 Prompt）</p>
              <p class="query-root-value">${escapeHtml(normalized.rootPrompt)}</p>
            </div>
            <div class="query-status-legend">
              <span class="query-legend-item is-green"><i></i>出现且有引用</span>
              <span class="query-legend-item is-yellow"><i></i>仅提及，无引用</span>
              <span class="query-legend-item is-red"><i></i>完全未提及（内容缺口）</span>
            </div>
          </div>
          <div class="chart-canvas query-tree-canvas" id="queryTreeChart"></div>
        </div>

        <aside class="query-gap-side">
          <h3 class="query-gap-side-title">${section.top5Title}</h3>
          <div class="query-gap-table-wrap">
            <table class="query-gap-table">
              <thead>
                <tr>
                  <th>扩展 Query 文本</th>
                  <th>所属 Topic</th>
                  <th>频次</th>
                  <th>你品牌提及情况</th>
                  <th>当前主要被推荐的品牌</th>
                </tr>
              </thead>
              <tbody id="queryTableBody"></tbody>
            </table>
          </div>
          <div class="query-click-pain" id="queryClickPain"></div>
        </aside>
      </div>
      <div class="query-transition-bar">${section.transitionText}</div>
    `;

    const treeRoot = {
      name: normalized.rootPrompt,
      nodeType: "root",
      symbol: "circle",
      symbolSize: 14,
      itemStyle: {
        color: "#2a72d5",
        borderColor: "#7ec0ff",
        borderWidth: 2.4,
      },
      label: {
        color: "#eef5ff",
        fontWeight: 700,
      },
      children: normalized.intermediateTopics.map((topic) => ({
        name: topic,
        nodeType: "topic",
        symbol: "circle",
        symbolSize: 11,
        itemStyle: {
          color: "#1f3c67",
          borderColor: "#8fb8e8",
          borderWidth: 1.8,
        },
        label: {
          color: "#dbeaff",
          fontWeight: 600,
        },
        children: (normalized.leafQueries[topic] || []).map((leafQuery) => {
          const statusKey = normalized.statusPerLeaf[leafQuery];
          const visual = queryStatusVisual(statusKey);
          const metrics = normalized.metricsPerLeaf[leafQuery] || {};
          const isGap = statusKey === "not_mentioned";
          return {
            name: leafQuery,
            nodeType: "leaf",
            statusKey,
            topicName: topic,
            frequency: metrics.frequency,
            mainCompetitors: metrics.mainCompetitors,
            symbol: "circle",
            symbolSize: isGap ? 15 : 12,
            itemStyle: {
              color: visual.fill,
              borderColor: visual.border,
              borderWidth: visual.borderWidth,
              shadowBlur: isGap ? 10 : 0,
              shadowColor: isGap ? "rgba(244, 67, 54, 0.4)" : "transparent",
            },
            label: {
              color: isGap ? "#ffd6d6" : "#eaf3ff",
              fontWeight: isGap ? 700 : 500,
            },
          };
        }),
      })),
    };

    const treeChart = ensureChart("queryTreeChart", {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        formatter: (params) => {
          const data = params.data || {};
          if (data.nodeType !== "leaf") {
            if (data.nodeType === "root") {
              return [
                `核心 Prompt：${escapeHtml(data.name)}`,
                "层级：用户原始问题",
              ].join("<br/>");
            }
            return [`主题簇：${escapeHtml(data.name)}`].join("<br/>");
          }

          const frequency = Math.max(Math.round(number(data.frequency) || 0), 0);
          const frequencyText = frequency >= 1 ? `${frequency} 次` : "样本量较低";
          const statusText = queryStatusText(data.statusKey);

          return [
            `扩展 Query：${escapeHtml(data.name)}`,
            "",
            `所属主题：${escapeHtml(data.topicName || reportPrd.codingGuidelines.missingDataDisplay)}`,
            `月对话量：${frequencyText}`,
            `你品牌状态：${statusText}`,
            `当前主要被推荐的品牌：${escapeHtml(
              data.mainCompetitors || reportPrd.codingGuidelines.missingDataDisplay
            )}`,
          ].join("<br/>");
        },
      },
      series: [
        {
          type: "tree",
          data: [treeRoot],
          top: "8%",
          left: "6%",
          bottom: "8%",
          right: "24%",
          roam: true,
          expandAndCollapse: false,
          lineStyle: {
            width: 1.3,
            color: "rgba(178, 206, 241, 0.55)",
          },
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 12,
          },
          leaves: {
            label: {
              position: "right",
              align: "left",
              fontSize: 12,
              lineHeight: 16,
            },
          },
          animationDuration: 450,
          animationDurationUpdate: 650,
        },
      ],
    });

    const queryTableBody = document.getElementById("queryTableBody");
    if (queryTableBody) {
      queryTableBody.innerHTML = top5
        .map((queryItem) => {
          return `
            <tr class="query-gap-row">
              <td>
                <span class="query-text-main">${escapeHtml(queryItem.leafQuery)}</span>
              </td>
              <td>${escapeHtml(queryItem.topicName)}</td>
              <td>${queryItem.frequency}</td>
              <td><span class="query-mention-none"><i></i>无</span></td>
              <td>${escapeHtml(queryItem.mainCompetitors)}</td>
            </tr>
          `;
        })
        .join("");
    }

    const clickPain = document.getElementById("queryClickPain");
    const renderClickPain = (queryItem) => {
      if (!clickPain) {
        return;
      }

      if (!queryItem) {
        clickPain.innerHTML = `
          <p class="query-click-pain-hint">点击树图中的红色节点，可查看该 Query 的实时缺口说明。</p>
        `;
        return;
      }

      const pain = buildQueryPainText(queryItem);
      clickPain.innerHTML = `
        <p class="query-click-pain-title">节点缺口提示</p>
        <p class="query-click-pain-text ${pain.level}">${escapeHtml(pain.text)}</p>
      `;
    };

    renderClickPain(top5[0] || null);

    if (treeChart) {
      treeChart.off("click");
      treeChart.on("click", (params) => {
        const data = params.data || {};
        if (data.nodeType !== "leaf" || data.statusKey !== "not_mentioned") {
          return;
        }
        renderClickPain({
          leafQuery: data.name,
          mainCompetitors:
            data.mainCompetitors || reportPrd.codingGuidelines.missingDataDisplay,
          frequency: Math.max(Math.round(number(data.frequency) || 0), 0),
        });
      });
    }
  }

  function renderPlatformDiff() {
    const section = reportPrd.sections.platform_diff;
    const container = document.getElementById("platformDiff");
    const platforms = reportData.platformDiff.platforms || [];
    const coverageMap = reportData.platformDiff.userCoverage || {};

    container.innerHTML = `
      ${sectionHeader("platformDiff", section.title, section.description)}
      <div class="platform-diff-layout">
        <div class="chart-box platform-heatmap-box">
          <h3 class="chart-title">平台表现热力图（0–100）</h3>
          <div class="chart-canvas" id="platformHeatmapChart"></div>
        </div>
      </div>
      <aside class="platform-insight-card" id="platformInsight"></aside>
    `;

    const xLabels = platformColumns.map((column) => column.label);
    const yLabels = platforms;

    const topByMetric = Object.fromEntries(
      platformColumns.map((column) => {
        const ranking = platforms
          .map((platform) => ({
            platform,
            score: number(reportData.platformDiff.scores?.[platform]?.[column.key]) || 0,
          }))
          .sort((a, b) => b.score - a.score);
        return [column.key, ranking[0] || { platform: "N/A", score: 0 }];
      })
    );

    const heatData = [];
    const weakMarkerData = [];
    yLabels.forEach((platform, yIndex) => {
      platformColumns.forEach((column, xIndex) => {
        const value = number(reportData.platformDiff.scores?.[platform]?.[column.key]) || 0;
        const topInfo = topByMetric[column.key];
        const isTop = topInfo.platform === platform;
        const isWeak = value < 30;

        heatData.push({
          value: [xIndex, yIndex, value],
          itemStyle: {
            borderColor: isTop ? "rgba(232, 242, 255, 0.98)" : "rgba(255, 255, 255, 0.12)",
            borderWidth: isTop ? 2.2 : 1,
          },
        });

        if (isWeak) {
          weakMarkerData.push([xIndex, yIndex]);
        }
      });
    });

    ensureChart("platformHeatmapChart", {
      tooltip: {
        position: "top",
        formatter: (params) => {
          const [xIndex, yIndex, value] = params.value;
          const column = platformColumns[xIndex];
          const topInfo = topByMetric[column.key];
          const gap = Math.max(Math.round(topInfo.score - value), 0);
          return [
            `平台：${yLabels[yIndex]}`,
            `指标：${xLabels[xIndex]}`,
            `得分：${Math.round(value)} / 100`,
            "",
            `对比头部平台：${topInfo.platform}（${Math.round(topInfo.score)} 分）`,
            gap > 0 ? `【差距】低 ${gap} 分` : "当前为该指标最高平台",
          ].join("<br/>");
        },
      },
      grid: { left: 118, right: 24, top: 36, bottom: 74 },
      xAxis: {
        type: "category",
        data: xLabels,
        splitArea: { show: true },
        axisLabel: {
          color: "#2f4765",
          interval: 0,
          fontSize: 12,
        },
      },
      yAxis: {
        type: "category",
        data: yLabels,
        splitArea: { show: true },
        axisLabel: {
          color: "#2f4765",
          fontWeight: 600,
        },
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: false,
        orient: "horizontal",
        left: "center",
        bottom: 14,
        itemWidth: 26,
        itemHeight: 10,
        text: ["高分", "低分"],
        textStyle: { color: "#5a6c84" },
        pieces: [
          { min: 60, max: 100, color: "#246fc9" },
          { min: 30, max: 59.999, color: "#94c5f4" },
          { min: 0, max: 29.999, color: "#f4b35c" },
        ],
      },
      series: [
        {
          name: "平台表现",
          type: "heatmap",
          data: heatData,
          label: {
            show: true,
            color: "#0f1b2f",
            fontSize: 11,
            formatter: (params) => `${Math.round(params.value[2])}`,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(28, 50, 83, 0.26)",
            },
          },
        },
        {
          name: "明显短板",
          type: "scatter",
          data: weakMarkerData,
          tooltip: { show: false },
          symbol: "circle",
          symbolSize: 12,
          symbolOffset: [14, -10],
          itemStyle: {
            color: "#f44336",
          },
          label: {
            show: true,
            formatter: "!",
            color: "#fff",
            fontSize: 8,
            fontWeight: 700,
          },
          z: 10,
        },
      ],
    });

    const platformStats = platforms.map((platform) => {
      const values = platformColumns.map(
        (column) => number(reportData.platformDiff.scores?.[platform]?.[column.key]) || 0
      );
      const avg = values.reduce((sum, value) => sum + value, 0) / values.length;
      const lowMetricKeys = platformColumns
        .filter((column) => (number(reportData.platformDiff.scores?.[platform]?.[column.key]) || 0) < 30)
        .map((column) => column.key);
      const gapAvg =
        platformColumns.reduce((sum, column) => {
          const current = number(reportData.platformDiff.scores?.[platform]?.[column.key]) || 0;
          return sum + Math.max((topByMetric[column.key]?.score || 0) - current, 0);
        }, 0) / Math.max(platformColumns.length, 1);

      return {
        platform,
        avg,
        lowMetricKeys,
        gapAvg,
        userCoverage: number(coverageMap[platform]) || 0,
      };
    });

    const sortedByAvg = [...platformStats].sort((a, b) => b.avg - a.avg);
    const strongPlatforms =
      ["ChatGPT", "Perplexity", "Gemini"].filter((platform) =>
        platformStats.some((item) => item.platform === platform && item.avg >= 60)
      ) || [];
    const weakPlatforms = platformStats
      .filter((item) => item.lowMetricKeys.length >= 2 || item.avg < 35)
      .sort((a, b) => b.lowMetricKeys.length - a.lowMetricKeys.length || a.avg - b.avg)
      .map((item) => item.platform)
      .slice(0, 2);

    const weakMetricCounter = {};
    platformStats
      .filter((item) => weakPlatforms.includes(item.platform))
      .forEach((item) => {
        item.lowMetricKeys.forEach((key) => {
          weakMetricCounter[key] = (weakMetricCounter[key] || 0) + 1;
        });
      });
    const weakMetrics = Object.entries(weakMetricCounter)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([key]) => reportData.platformDiff.metricLabels?.[key] || key);

    const priorityPlatforms = [...platformStats]
      .map((item) => ({
        ...item,
        priorityScore: item.userCoverage * item.gapAvg,
      }))
      .sort((a, b) => b.priorityScore - a.priorityScore)
      .slice(0, 3)
      .filter((item) => item.priorityScore > 0)
      .map((item) => item.platform);

    const strongLabel =
      strongPlatforms.length > 0
        ? strongPlatforms.join(" / ")
        : sortedByAvg
            .slice(0, 3)
            .map((item) => item.platform)
            .join(" / ");
    const weakLabel =
      weakPlatforms.length > 0
        ? weakPlatforms.join(" / ")
        : sortedByAvg
            .slice(-2)
            .map((item) => item.platform)
            .join(" / ");
    const weakMetricsLabel =
      weakMetrics.length > 0 ? weakMetrics.join(" / ") : "可见度 / 引用率 / 推荐位表现";
    const priorityLabel =
      priorityPlatforms.length > 0
        ? priorityPlatforms.join(" / ")
        : sortedByAvg
            .slice(0, 2)
            .map((item) => item.platform)
            .join(" / ");

    const rankingRows = sortedByAvg
      .map(
        (item, index) => `
          <li>
            <span>#${index + 1} ${item.platform}</span>
            <strong>${Math.round(item.avg)}</strong>
          </li>
        `
      )
      .join("");

    document.getElementById("platformInsight").innerHTML = `
      <h3 class="platform-insight-title">${section.insightTitle}</h3>
      <div class="platform-rank-box">
        <p class="platform-rank-label">平台综合得分排名</p>
        <ul class="platform-rank-list">${rankingRows}</ul>
      </div>
      <ul class="platform-brief-list">
        <li><span>主战场</span>${strongLabel}</li>
        <li><span>短板平台</span>${weakLabel}（${weakMetricsLabel}偏低）</li>
        <li><span>优先投入</span>${priorityLabel}（先补高意图可引用内容）</li>
      </ul>
    `;
  }

  function renderWordCloud(containerId, words, negative) {
    const list = Array.isArray(words) ? words : [];
    const maxWeight = Math.max(...list.map((word) => Number(word.weight) || 0), 1);
    document.getElementById(containerId).innerHTML = list
      .map((word) => {
        const normalizedWeight = Math.max((Number(word.weight) || 0) / maxWeight, 0);
        const size = 13 + normalizedWeight * 16;
        const share = Number.isFinite(Number(word.share))
          ? `${Math.round(Number(word.share))}%`
          : "N/A";
        const exampleScene = word.exampleScene || "N/A";
        const tooltip = `关键词：${word.word}\n出现占比：${share}\n典型场景：${exampleScene}`;
        return `<span class="keyword-pill ${negative ? "negative" : ""}" style="font-size:${size.toFixed(
          1
        )}px" title="${escapeHtml(tooltip)}">${escapeHtml(word.word)}</span>`;
      })
      .join("");
  }

  function renderSentimentAnalysis() {
    const section = reportPrd.sections.sentiment_analysis;
    const container = document.getElementById("sentimentAnalysis");
    const sentiment = reportData.sentiment;
    const distribution = sentiment.sentimentDistribution || {
      positive: sentiment.positive,
      neutral: sentiment.neutral,
      negative: sentiment.negative,
    };
    const sentimentScore = number(sentiment.sentimentScore) || 0;
    const topPositiveKeywords =
      sentiment.topPositiveKeywords ||
      (sentiment.positiveKeywords || [])
        .slice(0, 3)
        .map((item) => item.word)
        .join("、");
    const topNegativeKeywords =
      sentiment.topNegativeKeywords ||
      (sentiment.negativeKeywords || [])
        .slice(0, 3)
        .map((item) => item.word)
        .join("、");
    const negativeHotTopicsNames = (sentiment.negativeHotTopics || [])
      .map((item) => item.topicName)
      .join(" / ");

    container.innerHTML = `
      ${sectionHeader("sentimentAnalysis", section.title, section.description)}
      <div class="sentiment-top-layout">
        <div class="chart-box sentiment-chart-box">
          <h3 class="chart-title">情绪结构环形图</h3>
          <div class="chart-canvas" id="sentimentPieChart"></div>
        </div>
        <div class="chart-box sentiment-chart-box">
          <h3 class="chart-title">情感得分仪表盘（0–100）</h3>
          <div class="chart-canvas" id="sentimentGaugeChart"></div>
        </div>
      </div>
      <div class="keyword-pair sentiment-keyword-pair">
        <div class="keyword-box">
          <h4 class="keyword-title">正面关键词</h4>
          <div id="positiveWordCloud" class="keyword-cloud"></div>
        </div>
        <div class="keyword-box">
          <h4 class="keyword-title">负面关键词</h4>
          <div id="negativeWordCloud" class="keyword-cloud"></div>
        </div>
      </div>
      <div class="insight-box sentiment-insight-box" id="sentimentInsight"></div>
      <div class="sentiment-transition-bar">${section.transitionText}</div>
    `;

    ensureChart("sentimentPieChart", {
      tooltip: { trigger: "item" },
      legend: { bottom: 8 },
      series: [
        {
          type: "pie",
          radius: ["42%", "68%"],
          data: [
            { name: "正面", value: distribution.positive },
            { name: "中性", value: distribution.neutral },
            { name: "负面", value: distribution.negative },
          ],
          color: ["#2a72d5", "#ff9800", "#4caf50"],
          label: {
            formatter: "{b} {d}%",
            color: "#20324a",
          },
        },
      ],
    });

    ensureChart("sentimentGaugeChart", {
      series: [
        {
          type: "gauge",
          startAngle: 210,
          endAngle: -30,
          progress: {
            show: true,
            width: 14,
          },
          pointer: {
            show: true,
            length: "62%",
            width: 4,
          },
          axisLine: {
            lineStyle: {
              width: 14,
              color: [
                [0.4, "#f44336"],
                [0.7, "#efb231"],
                [1, "#4caf50"],
              ],
            },
          },
          detail: {
            valueAnimation: true,
            formatter: "{value}",
            fontSize: 24,
            offsetCenter: [0, "70%"],
          },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            color: "#5d728f",
            distance: 18,
          },
          data: [{ value: Number(sentimentScore.toFixed(1)) }],
          min: 0,
          max: 100,
        },
      ],
    });

    renderWordCloud("positiveWordCloud", sentiment.positiveKeywords, false);
    renderWordCloud("negativeWordCloud", sentiment.negativeKeywords, true);

    const structureText = interpolate(section.insightTemplates.structure, {
      topPositiveKeywords,
      neutral: distribution.neutral,
    });
    const riskText = interpolate(section.insightTemplates.risk, {
      negative: distribution.negative,
      negativeHotTopicsNames:
        negativeHotTopicsNames || sentiment.negativeTopics || "复杂行程预订 / 退款与售后",
    });
    document.getElementById("sentimentInsight").innerHTML = `
      <p class="sentiment-insight-line">${structureText}</p>
      <p class="sentiment-insight-line">${riskText}</p>
    `;
  }

  function renderOpportunitiesSummary() {
    const section = reportPrd.sections.opportunities_summary;
    const container = document.getElementById("opportunitiesSummary");
    const matrix = reportData.opportunities.matrix;
    const matrixItems = (matrix.items || []).slice();
    const maxLoss = Math.max(...matrixItems.map((item) => number(item.estimatedLoss) || 0), 1);
    const cards = (reportData.opportunities.opportunityCards || [])
      .slice()
      .sort((a, b) => (number(b.estimatedLoss) || 0) - (number(a.estimatedLoss) || 0))
      .slice(0, 5)
      .map((item, index) => ({ ...item, rank: index + 1 }));

    const supportCards = reportData.opportunities.generalSuggestions || [];

    container.innerHTML = `
      ${sectionHeader("opportunitiesSummary", section.title, section.description)}
      <div class="opportunity-matrix-layout">
        <div class="chart-box opportunity-matrix-box">
          <h3 class="chart-title">${section.matrixTitle}</h3>
          <div class="chart-canvas" id="opportunityMatrixChart"></div>
          <div class="opportunity-axis-note">
            <p>${section.matrixAxisHint}</p>
            <div class="opportunity-quad-tags">
              <span class="tag must">必做</span>
              <span class="tag mid">中长期重点</span>
              <span class="tag low">次要</span>
            </div>
          </div>
        </div>
      </div>

      <h3 class="opportunity-subtitle">${section.cardsTitle}</h3>
      <div class="opportunity-card-grid" id="opportunityCards"></div>

      <h3 class="opportunity-subtitle">${section.supportTitle}</h3>
      <div class="opportunity-support-grid" id="opportunitySupports"></div>
    `;

    const shortScene = (scene) =>
      scene
        .replace("app for ", "")
        .replace("app to ", "")
        .replace("booking ", "")
        .replace("travel ", "")
        .slice(0, 22);

    const pointData = matrixItems.map((item) => {
      const impact = number(item.impact) || 0;
      const effort = number(item.effort) || 0;
      const loss = Math.round(number(item.estimatedLoss) || 0);
      const mustDo = impact >= 3.5 && effort <= 3;

      return {
        id: item.id,
        name: shortScene(item.scene),
        scene: item.scene,
        value: [impact, effort, loss],
        symbolSize: Math.max(18, Math.min(52, 18 + (loss / maxLoss) * 26 + (mustDo ? 6 : 0))),
        itemStyle: {
          color: mustDo ? "#2f83df" : "#77b2f5",
          borderColor: mustDo ? "#1f5ea8" : "rgba(31, 94, 168, 0.35)",
          borderWidth: mustDo ? 3 : 1.5,
          opacity: mustDo ? 0.95 : 0.85,
        },
      };
    });

    const matrixChart = ensureChart("opportunityMatrixChart", {
      tooltip: {
        formatter: (params) => {
          const [impact, effort, loss] = params.value;
          const raw = matrixItems.find((item) => item.id === params.data.id);
          const scene = raw?.scene || params.name;
          return [
            `场景：${scene}`,
            `影响力：${Number(impact).toFixed(1)} / 5`,
            `实施难度：${Number(effort).toFixed(1)} / 5`,
            `【机会损失】每月约流失 ${Math.round(loss)} 次被推荐机会`,
          ].join("<br/>");
        },
      },
      grid: { left: 56, right: 34, top: 34, bottom: 48 },
      xAxis: {
        min: matrix.axisX.min,
        max: matrix.axisX.max,
        interval: 1,
        name: matrix.axisX.label,
        nameLocation: "middle",
        nameGap: 28,
        splitLine: { show: true },
      },
      yAxis: {
        min: matrix.axisY.min,
        max: matrix.axisY.max,
        interval: 1,
        name: matrix.axisY.label,
        nameLocation: "middle",
        nameGap: 50,
        splitLine: { show: true },
      },
      graphic: [
        {
          type: "text",
          right: "8%",
          bottom: "14%",
          style: {
            text: "必做",
            fill: "#f44336",
            fontSize: 14,
            fontWeight: 800,
          },
        },
        {
          type: "text",
          right: "6%",
          top: "16%",
          style: {
            text: "中长期重点",
            fill: "#395a86",
            fontSize: 12,
            fontWeight: 700,
          },
        },
        {
          type: "text",
          left: "9%",
          top: "48%",
          style: {
            text: "次要",
            fill: "#6e7e93",
            fontSize: 12,
            fontWeight: 700,
          },
        },
      ],
      series: [
        {
          type: "scatter",
          data: pointData,
          label: {
            show: true,
            formatter: "{b}",
            position: "top",
            color: "#1d3556",
            fontSize: 11,
          },
          emphasis: {
            scale: 1.08,
            label: {
              show: true,
              fontWeight: 700,
            },
          },
          markLine: {
            symbol: "none",
            label: { show: false },
            lineStyle: { type: "dashed", color: "#8ea4c0" },
            data: [{ xAxis: 3 }, { yAxis: 3 }],
          },
        },
      ],
    });

    if (matrixChart) {
      matrixChart.off("click");
      matrixChart.on("click", (params) => {
        const id = params?.data?.id;
        if (!id) {
          return;
        }
        const target = document.querySelector(`[data-card-id="${id}"]`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("flash");
          window.setTimeout(() => target.classList.remove("flash"), 900);
        }
      });
    }

    document.getElementById("opportunityCards").innerHTML = cards
      .map((item) => `
        <article class="opportunity-card-panel ${item.rank === 1 ? "is-top1" : ""}" data-card-id="${item.id}">
          <h4 class="opportunity-card-title"><span class="top-tag">【TOP ${item.rank}】</span>${item.scene}</h4>
          <p class="opportunity-card-metrics">你：${Number(item.yourVisibility).toFixed(1)}% ｜ 竞品A：${Number(
            item.competitorAVisibility
          ).toFixed(1)}%</p>
          <p class="opportunity-card-metrics">竞品B：${Number(item.competitorBVisibility).toFixed(1)}%</p>
          <p class="opportunity-card-loss"><span>【机会损失】</span>每月约流失 ${Math.round(
            number(item.estimatedLoss) || 0
          )} 次被推荐机会。</p>
          <p class="opportunity-card-reason">原因：${item.mainReason}</p>
        </article>
      `)
      .join("");

    document.getElementById("opportunitySupports").innerHTML = supportCards
      .map(
        (item, index) => `
          <article class="support-card">
            <span class="support-icon">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h4>${item.title}</h4>
              <p>${item.content}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderSubscriptionCta() {
    const section = reportPrd.sections.subscription_cta;
    const data = reportData.subscriptionCta || {};
    const container = document.getElementById("subscriptionCta");
    if (!container) {
      return;
    }

    container.innerHTML = `
      ${sectionHeader("subscriptionCta", section.title, section.description)}
      <div class="pro-cta-shell">
        <div class="pro-cta-main">
          <p class="pro-cta-eyebrow">${data.eyebrow || "Paid Plan"}</p>
          <h3 class="pro-cta-title">${data.headline || "升级到 Pro 订阅"}</h3>
          <p class="pro-cta-summary">${data.summary || ""}</p>

          <div class="pro-cta-integrations">
            <span class="pro-cta-integrations-label">支持接入</span>
            <div class="pro-cta-integration-chips">
              ${(data.integrations || [])
                .map((item) => `<span class="pro-cta-chip">${item}</span>`)
                .join("")}
            </div>
          </div>

          <div class="pro-cta-cap-grid">
            ${(data.capabilityCards || [])
              .map(
                (card, index) => `
                  <article class="pro-cta-cap-card">
                    <span class="pro-cta-cap-index">${String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>${card.title}</h4>
                      <p>${card.desc}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>

          <div class="pro-cta-actions">
            <button type="button" class="pro-cta-btn primary">${data.ctaPrimary || "预约演示"}</button>
            <button type="button" class="pro-cta-btn secondary">${
              data.ctaSecondary || "查看能力清单"
            }</button>
          </div>
        </div>

        <aside class="pro-cta-visual" aria-hidden="true">
          <p class="pro-cta-visual-title">Agent 自动化执行看板（虚化示意）</p>
          <p class="pro-cta-visual-subtitle">自动执行任务、状态回传与周产出追踪</p>
          <div class="pro-cta-mini-board">
            <div class="pro-cta-mini-head">
              <span>Agent</span>
              <span>Status</span>
              <span>Output</span>
            </div>
            ${(data.workflowRows || [])
              .map(
                (row) => `
                  <div class="pro-cta-mini-row">
                    <span>${row.name}</span>
                    <span class="pro-cta-status-pill is-running">${row.status}</span>
                    <span>${row.output}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </aside>
      </div>
      <p class="pro-cta-footnote">${data.footnote || ""}</p>
    `;
  }

  function applyPanelDelays() {
    const contentPanels = Array.from(document.querySelectorAll(".report-content .panel"));
    contentPanels.forEach((panel, index) => {
      panel.style.setProperty("--delay", `${0.06 + index * 0.06}s`);
    });

    const hero = document.querySelector(".hero");
    const nav = document.querySelector(".report-nav");
    if (hero) {
      hero.style.setProperty("--delay", "0.04s");
    }
    if (nav) {
      nav.style.setProperty("--delay", "0.08s");
    }
  }

  function renderAll() {
    applyGuidelineColors();
    renderHeader();
    renderNav();
    renderBrandOverview();
    renderBrandCompetition();
    renderTopicIntents();
    renderQueryExpansion();
    renderPlatformDiff();
    renderSentimentAnalysis();
    renderOpportunitiesSummary();
    renderSubscriptionCta();
    applyPanelDelays();
    bindSectionNavigation();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    window.addEventListener("resize", () => {
      chartInstances.forEach((chart) => {
        chart.resize();
      });
    });
  });
})();

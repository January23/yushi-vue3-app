import { plainToClass } from 'class-transformer';

export class CityInfo {
  private name: string;
  private id: number;

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }
};

export class CityGroup {
  private name: string;
  private cities: Array<CityInfo>;

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getCities(): Array<CityInfo> {
    return this.cities;
  }

  public setCities(cities: Array<CityInfo>) {
    this.cities = cities;
  }
}

export class AllCity {
  private name: string;
  private items: Array<CityGroup>;

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getItems(): Array<CityGroup> {
    return this.items;
  }

  public setItems(items: Array<CityGroup>) {
    this.items = items;
  }
}

export const AllCityInfo: Array<AllCity> = plainToClass(AllCity, [
  {
    "name": "热门城市",
    "items": plainToClass(CityGroup, [
      {
        "name": "hot",
        "cities": plainToClass(CityInfo, [
          {
            "name": "北京",
            "id": 48
          },
          {
            "name": "成都",
            "id": 10
          },
          {
            "name": "上海",
            "id": 23
          },
          {
            "name": "重庆",
            "id": 22
          },
          {
            "name": "广州",
            "id": 45
          },
          {
            "name": "三亚",
            "id": 1
          },
          {
            "name": "西安",
            "id": 17
          },
          {
            "name": "厦门",
            "id": 33
          },
          {
            "name": "丽江",
            "id": 12
          },
          {
            "name": "杭州",
            "id": 7
          },
          {
            "name": "青岛",
            "id": 8
          },
          {
            "name": "大理州",
            "id": 36
          },
          {
            "name": "武汉",
            "id": 55
          },
          {
            "name": "南京",
            "id": 9
          },
          {
            "name": "深圳",
            "id": 49
          },
          {
            "name": "长沙",
            "id": 63
          },
          {
            "name": "苏州",
            "id": 11
          },
          {
            "name": "天津",
            "id": 66
          },
          {
            "name": "昆明",
            "id": 31
          },
          {
            "name": "北海",
            "id": 251
          }
        ])
      }
    ])
  },
  {
    "name": "ABCD",
    "items": plainToClass(CityGroup, [
      {
        "name": "A",
        "cities": plainToClass(CityInfo, [
          {
            "name": "阿坝",
            "id": 107
          },
          {
            "name": "阿克苏",
            "id": 374
          },
          {
            "name": "阿拉善",
            "id": 267
          },
          {
            "name": "阿勒泰",
            "id": 382
          },
          {
            "name": "澳门",
            "id": 397
          },
          {
            "name": "安康",
            "id": 307
          },
          {
            "name": "安庆",
            "id": 227
          },
          {
            "name": "鞍山",
            "id": 127
          },
          {
            "name": "安顺",
            "id": 120
          },
          {
            "name": "安阳",
            "id": 173
          }
        ])
      },
      {
        "name": "B",
        "cities": plainToClass(CityInfo, [
          {
            "name": "白城",
            "id": 196
          },
          {
            "name": "百色",
            "id": 247
          },
          {
            "name": "白沙",
            "id": 4052
          },
          {
            "name": "白山",
            "id": 194
          },
          {
            "name": "保定",
            "id": 157
          },
          {
            "name": "宝鸡",
            "id": 302
          },
          {
            "name": "保山",
            "id": 360
          },
          {
            "name": "保亭",
            "id": 4054
          },
          {
            "name": "包头",
            "id": 257
          },
          {
            "name": "巴彦淖尔",
            "id": 263
          },
          {
            "name": "巴音郭楞",
            "id": 377
          },
          {
            "name": "巴中",
            "id": 105
          },
          {
            "name": "北海",
            "id": 251
          },
          {
            "name": "北京",
            "id": 48
          },
          {
            "name": "蚌埠",
            "id": 225
          },
          {
            "name": "本溪",
            "id": 134
          },
          {
            "name": "毕节",
            "id": 122
          },
          {
            "name": "滨州",
            "id": 214
          },
          {
            "name": "博尔塔拉",
            "id": 379
          },
          {
            "name": "亳州",
            "id": 236
          }
        ])
      },
      {
        "name": "C",
        "cities": plainToClass(CityInfo, [
          {
            "name": "沧州",
            "id": 159
          },
          {
            "name": "长春",
            "id": 189
          },
          {
            "name": "常德",
            "id": 338
          },
          {
            "name": "昌吉",
            "id": 378
          },
          {
            "name": "昌江",
            "id": 4051
          },
          {
            "name": "长沙",
            "id": 63
          },
          {
            "name": "长治",
            "id": 272
          },
          {
            "name": "常州",
            "id": 21
          },
          {
            "name": "潮州",
            "id": 83
          },
          {
            "name": "承德",
            "id": 158
          },
          {
            "name": "成都",
            "id": 10
          },
          {
            "name": "澄迈",
            "id": 4047
          },
          {
            "name": "郴州",
            "id": 339
          },
          {
            "name": "赤峰",
            "id": 259
          },
          {
            "name": "池州",
            "id": 237
          },
          {
            "name": "重庆",
            "id": 22
          },
          {
            "name": "崇左",
            "id": 254
          },
          {
            "name": "楚雄",
            "id": 365
          },
          {
            "name": "滁州",
            "id": 228
          }
        ])
      },
      {
        "name": "D",
        "cities": plainToClass(CityInfo, [
          {
            "name": "大理州",
            "id": 36
          },
          {
            "name": "大连",
            "id": 18
          },
          {
            "name": "丹东",
            "id": 129
          },
          {
            "name": "儋州",
            "id": 3973
          },
          {
            "name": "大庆",
            "id": 202
          },
          {
            "name": "大同",
            "id": 270
          },
          {
            "name": "大兴安岭",
            "id": 209
          },
          {
            "name": "达州",
            "id": 96
          },
          {
            "name": "德宏",
            "id": 366
          },
          {
            "name": "德阳",
            "id": 91
          },
          {
            "name": "德州",
            "id": 219
          },
          {
            "name": "定安",
            "id": 4049
          },
          {
            "name": "定西",
            "id": 296
          },
          {
            "name": "东方",
            "id": 4062
          },
          {
            "name": "东莞",
            "id": 73
          },
          {
            "name": "东营",
            "id": 211
          },
          {
            "name": "迪庆",
            "id": 368
          }
        ])
      }
    ])
  },
  {
    "name": "EFGH",
    "items": plainToClass(CityGroup, [
      {
        "name": "E",
        "cities": plainToClass(CityInfo, [
          {
            "name": "鄂尔多斯",
            "id": 261
          },
          {
            "name": "恩施",
            "id": 330
          },
          {
            "name": "鄂州",
            "id": 323
          }
        ])
      },
      {
        "name": "F",
        "cities": plainToClass(CityInfo, [
          {
            "name": "防城港",
            "id": 252
          },
          {
            "name": "佛山",
            "id": 68
          },
          {
            "name": "抚顺",
            "id": 128
          },
          {
            "name": "阜阳",
            "id": 229
          },
          {
            "name": "福州",
            "id": 145
          },
          {
            "name": "抚州",
            "id": 355
          }
        ])
      },
      {
        "name": "G",
        "cities": plainToClass(CityInfo, [
          {
            "name": "甘南",
            "id": 299
          },
          {
            "name": "赣州",
            "id": 352
          },
          {
            "name": "甘孜",
            "id": 108
          },
          {
            "name": "高雄",
            "id": 3996
          },
          {
            "name": "广安",
            "id": 102
          },
          {
            "name": "广元",
            "id": 99
          },
          {
            "name": "广州",
            "id": 45
          },
          {
            "name": "贵港",
            "id": 245
          },
          {
            "name": "桂林",
            "id": 32
          },
          {
            "name": "贵阳",
            "id": 117
          },
          {
            "name": "固原",
            "id": 285
          }
        ])
      },
      {
        "name": "H",
        "cities": plainToClass(CityInfo, [
          {
            "name": "哈尔滨",
            "id": 64
          },
          {
            "name": "海北",
            "id": 311
          },
          {
            "name": "海东",
            "id": 310
          },
          {
            "name": "海口",
            "id": 255
          },
          {
            "name": "海南州",
            "id": 313
          },
          {
            "name": "海西",
            "id": 316
          },
          {
            "name": "哈密",
            "id": 372
          },
          {
            "name": "邯郸",
            "id": 155
          },
          {
            "name": "杭州",
            "id": 7
          },
          {
            "name": "汉中",
            "id": 305
          },
          {
            "name": "鹤壁",
            "id": 171
          },
          {
            "name": "河池",
            "id": 248
          },
          {
            "name": "合肥",
            "id": 50
          },
          {
            "name": "黑河",
            "id": 205
          },
          {
            "name": "衡水",
            "id": 161
          },
          {
            "name": "衡阳",
            "id": 335
          },
          {
            "name": "河源",
            "id": 80
          },
          {
            "name": "菏泽",
            "id": 221
          },
          {
            "name": "贺州",
            "id": 253
          },
          {
            "name": "红河州",
            "id": 364
          },
          {
            "name": "淮安",
            "id": 140
          },
          {
            "name": "淮北",
            "id": 234
          },
          {
            "name": "怀化",
            "id": 344
          },
          {
            "name": "淮南",
            "id": 233
          },
          {
            "name": "花莲",
            "id": 3997
          },
          {
            "name": "黄冈",
            "id": 327
          },
          {
            "name": "黄南",
            "id": 312
          },
          {
            "name": "黄山",
            "id": 6
          },
          {
            "name": "黄石",
            "id": 317
          },
          {
            "name": "呼和浩特",
            "id": 256
          },
          {
            "name": "惠州",
            "id": 72
          },
          {
            "name": "葫芦岛",
            "id": 133
          },
          {
            "name": "呼伦贝尔",
            "id": 262
          },
          {
            "name": "湖州",
            "id": 111
          }
        ])
      }
    ])
  },
  {
    "name": "JKLM",
    "items": plainToClass(CityGroup, [
      {
        "name": "J",
        "cities": plainToClass(CityInfo, [
          {
            "name": "佳木斯",
            "id": 204
          },
          {
            "name": "吉安",
            "id": 353
          },
          {
            "name": "江门",
            "id": 70
          },
          {
            "name": "焦作",
            "id": 170
          },
          {
            "name": "嘉兴",
            "id": 110
          },
          {
            "name": "嘉义",
            "id": 4000
          },
          {
            "name": "嘉峪关",
            "id": 300
          },
          {
            "name": "揭阳",
            "id": 84
          },
          {
            "name": "吉林",
            "id": 190
          },
          {
            "name": "基隆",
            "id": 3998
          },
          {
            "name": "济南",
            "id": 19
          },
          {
            "name": "金昌",
            "id": 288
          },
          {
            "name": "晋城",
            "id": 273
          },
          {
            "name": "景德镇",
            "id": 347
          },
          {
            "name": "荆门",
            "id": 322
          },
          {
            "name": "荆州",
            "id": 320
          },
          {
            "name": "金华",
            "id": 113
          },
          {
            "name": "济宁",
            "id": 215
          },
          {
            "name": "金门",
            "id": 4027
          },
          {
            "name": "晋中",
            "id": 275
          },
          {
            "name": "锦州",
            "id": 130
          },
          {
            "name": "九江",
            "id": 349
          },
          {
            "name": "酒泉",
            "id": 294
          },
          {
            "name": "鸡西",
            "id": 199
          },
          {
            "name": "济源",
            "id": 176
          }
        ])
      },
      {
        "name": "K",
        "cities": plainToClass(CityInfo, [
          {
            "name": "开封",
            "id": 177
          },
          {
            "name": "喀什",
            "id": 375
          },
          {
            "name": "克拉玛依",
            "id": 370
          },
          {
            "name": "昆明",
            "id": 31
          }
        ])
      },
      {
        "name": "L",
        "cities": plainToClass(CityInfo, [
          {
            "name": "来宾",
            "id": 249
          },
          {
            "name": "莱芜",
            "id": 213
          },
          {
            "name": "廊坊",
            "id": 160
          },
          {
            "name": "兰州",
            "id": 287
          },
          {
            "name": "拉萨",
            "id": 389
          },
          {
            "name": "乐东",
            "id": 3993
          },
          {
            "name": "乐山",
            "id": 93
          },
          {
            "name": "凉山",
            "id": 97
          },
          {
            "name": "连云港",
            "id": 39
          },
          {
            "name": "聊城",
            "id": 220
          },
          {
            "name": "丽江",
            "id": 12
          },
          {
            "name": "临汾",
            "id": 278
          },
          {
            "name": "临高",
            "id": 4048
          },
          {
            "name": "陵水(三亚)",
            "id": 5
          },
          {
            "name": "临夏",
            "id": 298
          },
          {
            "name": "临沂",
            "id": 218
          },
          {
            "name": "林芝",
            "id": 395
          },
          {
            "name": "丽水",
            "id": 116
          },
          {
            "name": "六安",
            "id": 232
          },
          {
            "name": "六盘水",
            "id": 118
          },
          {
            "name": "柳州",
            "id": 242
          },
          {
            "name": "陇南",
            "id": 297
          },
          {
            "name": "龙岩",
            "id": 151
          },
          {
            "name": "娄底",
            "id": 341
          },
          {
            "name": "漯河",
            "id": 174
          },
          {
            "name": "洛阳",
            "id": 168
          },
          {
            "name": "泸州",
            "id": 90
          },
          {
            "name": "吕梁",
            "id": 279
          }
        ])
      },
      {
        "name": "M",
        "cities": plainToClass(CityInfo, [
          {
            "name": "马鞍山",
            "id": 226
          },
          {
            "name": "茂名",
            "id": 71
          },
          {
            "name": "眉山",
            "id": 103
          },
          {
            "name": "梅州",
            "id": 78
          },
          {
            "name": "绵阳",
            "id": 92
          },
          {
            "name": "苗栗",
            "id": 4001
          },
          {
            "name": "牡丹江",
            "id": 208
          }
        ])
      }
    ])
  },
  {
    "name": "NPQRS",
    "items": plainToClass(CityGroup, [
      {
        "name": "N",
        "cities": plainToClass(CityInfo, [
          {
            "name": "南昌",
            "id": 346
          },
          {
            "name": "南充",
            "id": 94
          },
          {
            "name": "南京",
            "id": 9
          },
          {
            "name": "南宁",
            "id": 250
          },
          {
            "name": "南通",
            "id": 52
          },
          {
            "name": "南投",
            "id": 4002
          },
          {
            "name": "南阳",
            "id": 175
          },
          {
            "name": "内江",
            "id": 101
          },
          {
            "name": "宁波",
            "id": 16
          },
          {
            "name": "宁德",
            "id": 152
          },
          {
            "name": "怒江",
            "id": 367
          }
        ])
      },
      {
        "name": "P",
        "cities": plainToClass(CityInfo, [
          {
            "name": "盘锦",
            "id": 132
          },
          {
            "name": "攀枝花",
            "id": 98
          },
          {
            "name": "澎湖",
            "id": 4003
          },
          {
            "name": "平顶山",
            "id": 169
          },
          {
            "name": "屏东（垦丁）",
            "id": 4004
          },
          {
            "name": "平凉",
            "id": 293
          },
          {
            "name": "萍乡",
            "id": 348
          },
          {
            "name": "普洱",
            "id": 61
          },
          {
            "name": "莆田",
            "id": 146
          },
          {
            "name": "濮阳",
            "id": 178
          }
        ])
      },
      {
        "name": "Q",
        "cities": plainToClass(CityInfo, [
          {
            "name": "黔东南",
            "id": 124
          },
          {
            "name": "黔南",
            "id": 125
          },
          {
            "name": "黔西南",
            "id": 123
          },
          {
            "name": "青岛",
            "id": 8
          },
          {
            "name": "清远",
            "id": 82
          },
          {
            "name": "秦皇岛",
            "id": 65
          },
          {
            "name": "钦州",
            "id": 244
          },
          {
            "name": "琼海",
            "id": 407
          },
          {
            "name": "琼中",
            "id": 4053
          },
          {
            "name": "齐齐哈尔",
            "id": 198
          },
          {
            "name": "泉州",
            "id": 148
          },
          {
            "name": "曲靖",
            "id": 358
          },
          {
            "name": "衢州",
            "id": 114
          }
        ])
      },
      {
        "name": "R",
        "cities": plainToClass(CityInfo, [
          {
            "name": "日喀则",
            "id": 392
          },
          {
            "name": "日照",
            "id": 217
          }
        ])
      },
      {
        "name": "S",
        "cities": plainToClass(CityInfo, [
          {
            "name": "三门峡",
            "id": 180
          },
          {
            "name": "三明",
            "id": 147
          },
          {
            "name": "三亚",
            "id": 1
          },
          {
            "name": "上海",
            "id": 23
          },
          {
            "name": "商洛",
            "id": 308
          },
          {
            "name": "商丘",
            "id": 181
          },
          {
            "name": "上饶",
            "id": 356
          },
          {
            "name": "汕头",
            "id": 69
          },
          {
            "name": "汕尾",
            "id": 79
          },
          {
            "name": "韶关",
            "id": 75
          },
          {
            "name": "绍兴",
            "id": 112
          },
          {
            "name": "邵阳",
            "id": 336
          },
          {
            "name": "神农架",
            "id": 332
          },
          {
            "name": "沈阳",
            "id": 126
          },
          {
            "name": "深圳",
            "id": 49
          },
          {
            "name": "石河子",
            "id": 383
          },
          {
            "name": "石家庄",
            "id": 153
          },
          {
            "name": "十堰",
            "id": 319
          },
          {
            "name": "石嘴山",
            "id": 283
          },
          {
            "name": "双鸭山",
            "id": 201
          },
          {
            "name": "四平",
            "id": 191
          },
          {
            "name": "松原",
            "id": 195
          },
          {
            "name": "遂宁",
            "id": 100
          },
          {
            "name": "随州",
            "id": 329
          },
          {
            "name": "宿迁",
            "id": 142
          },
          {
            "name": "苏州",
            "id": 11
          },
          {
            "name": "宿州",
            "id": 230
          }
        ])
      }
    ])
  },
  {
    "name": "TUWX",
    "items": plainToClass(CityGroup, [
      {
        "name": "T",
        "cities": plainToClass(CityInfo, [
          {
            "name": "泰安",
            "id": 216
          },
          {
            "name": "台北",
            "id": 4005
          },
          {
            "name": "台东",
            "id": 4006
          },
          {
            "name": "台南",
            "id": 4007
          },
          {
            "name": "太原",
            "id": 269
          },
          {
            "name": "台中",
            "id": 4008
          },
          {
            "name": "泰州",
            "id": 141
          },
          {
            "name": "台州",
            "id": 115
          },
          {
            "name": "唐山",
            "id": 154
          },
          {
            "name": "桃园",
            "id": 4009
          },
          {
            "name": "天津",
            "id": 66
          },
          {
            "name": "天水",
            "id": 290
          },
          {
            "name": "铁岭",
            "id": 136
          },
          {
            "name": "通化",
            "id": 193
          },
          {
            "name": "通辽",
            "id": 260
          },
          {
            "name": "铜陵",
            "id": 235
          },
          {
            "name": "铜仁",
            "id": 121
          },
          {
            "name": "吐鲁番",
            "id": 371
          },
          {
            "name": "图木舒克",
            "id": 386
          }
        ])
      },
      {
        "name": "W",
        "cities": plainToClass(CityInfo, [
          {
            "name": "万宁",
            "id": 43
          },
          {
            "name": "潍坊",
            "id": 212
          },
          {
            "name": "威海",
            "id": 30
          },
          {
            "name": "渭南",
            "id": 304
          },
          {
            "name": "文昌",
            "id": 4
          },
          {
            "name": "文山",
            "id": 363
          },
          {
            "name": "温州",
            "id": 109
          },
          {
            "name": "乌海",
            "id": 258
          },
          {
            "name": "武汉",
            "id": 55
          },
          {
            "name": "芜湖",
            "id": 53
          },
          {
            "name": "五家渠",
            "id": 387
          },
          {
            "name": "乌兰察布",
            "id": 264
          },
          {
            "name": "乌鲁木齐",
            "id": 369
          },
          {
            "name": "武威",
            "id": 291
          },
          {
            "name": "无锡",
            "id": 14
          },
          {
            "name": "五指山",
            "id": 3
          },
          {
            "name": "吴忠",
            "id": 284
          },
          {
            "name": "梧州",
            "id": 243
          }
        ])
      },
      {
        "name": "X",
        "cities": plainToClass(CityInfo, [
          {
            "name": "厦门",
            "id": 33
          },
          {
            "name": "西安",
            "id": 17
          },
          {
            "name": "香港",
            "id": 396
          },
          {
            "name": "湘潭",
            "id": 334
          },
          {
            "name": "湘西",
            "id": 345
          },
          {
            "name": "襄阳",
            "id": 4031
          },
          {
            "name": "咸宁",
            "id": 328
          },
          {
            "name": "仙桃",
            "id": 324
          },
          {
            "name": "咸阳",
            "id": 303
          },
          {
            "name": "孝感",
            "id": 326
          },
          {
            "name": "锡林郭勒",
            "id": 266
          },
          {
            "name": "兴安盟",
            "id": 265
          },
          {
            "name": "邢台",
            "id": 156
          },
          {
            "name": "西宁",
            "id": 309
          },
          {
            "name": "新北",
            "id": 4010
          },
          {
            "name": "新乡",
            "id": 172
          },
          {
            "name": "信阳",
            "id": 182
          },
          {
            "name": "新余",
            "id": 350
          },
          {
            "name": "忻州",
            "id": 277
          },
          {
            "name": "新竹",
            "id": 4012
          },
          {
            "name": "西双版纳",
            "id": 58
          },
          {
            "name": "宣城",
            "id": 238
          },
          {
            "name": "许昌",
            "id": 179
          },
          {
            "name": "徐州",
            "id": 139
          }
        ])
      }
    ])
  },
  {
    "name": "YZ",
    "items": plainToClass(CityGroup, [
      {
        "name": "Y",
        "cities": plainToClass(CityInfo, [
          {
            "name": "雅安",
            "id": 104
          },
          {
            "name": "延安",
            "id": 25
          },
          {
            "name": "延边",
            "id": 197
          },
          {
            "name": "盐城",
            "id": 54
          },
          {
            "name": "阳江",
            "id": 81
          },
          {
            "name": "阳泉",
            "id": 271
          },
          {
            "name": "扬州",
            "id": 26
          },
          {
            "name": "烟台",
            "id": 44
          },
          {
            "name": "宜宾",
            "id": 95
          },
          {
            "name": "宜昌",
            "id": 321
          },
          {
            "name": "伊春",
            "id": 203
          },
          {
            "name": "宜春",
            "id": 354
          },
          {
            "name": "宜兰",
            "id": 4013
          },
          {
            "name": "伊犁",
            "id": 380
          },
          {
            "name": "银川",
            "id": 282
          },
          {
            "name": "营口",
            "id": 35
          },
          {
            "name": "鹰潭",
            "id": 351
          },
          {
            "name": "益阳",
            "id": 343
          },
          {
            "name": "永州",
            "id": 340
          },
          {
            "name": "岳阳",
            "id": 337
          },
          {
            "name": "玉林",
            "id": 246
          },
          {
            "name": "榆林",
            "id": 306
          },
          {
            "name": "运城",
            "id": 276
          },
          {
            "name": "云浮",
            "id": 85
          },
          {
            "name": "云林",
            "id": 4014
          },
          {
            "name": "玉树",
            "id": 315
          },
          {
            "name": "玉溪",
            "id": 359
          }
        ])
      },
      {
        "name": "Z",
        "cities": plainToClass(CityInfo, [
          {
            "name": "枣庄",
            "id": 38
          },
          {
            "name": "张家界",
            "id": 342
          },
          {
            "name": "张家口",
            "id": 60
          },
          {
            "name": "张掖",
            "id": 292
          },
          {
            "name": "漳州",
            "id": 149
          },
          {
            "name": "湛江",
            "id": 76
          },
          {
            "name": "肇庆",
            "id": 77
          },
          {
            "name": "昭通",
            "id": 361
          },
          {
            "name": "郑州",
            "id": 167
          },
          {
            "name": "镇江",
            "id": 27
          },
          {
            "name": "中山",
            "id": 74
          },
          {
            "name": "中卫",
            "id": 286
          },
          {
            "name": "周口",
            "id": 183
          },
          {
            "name": "舟山",
            "id": 20
          },
          {
            "name": "珠海",
            "id": 51
          },
          {
            "name": "驻马店",
            "id": 184
          },
          {
            "name": "株洲",
            "id": 333
          },
          {
            "name": "淄博",
            "id": 210
          },
          {
            "name": "自贡",
            "id": 89
          },
          {
            "name": "资阳",
            "id": 106
          },
          {
            "name": "遵义",
            "id": 119
          }
        ])
      }
    ])
  }
]);
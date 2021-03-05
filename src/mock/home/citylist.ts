import { CityInfo } from './citylist';
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

export const CityList: Array<CityGroup> = plainToClass(CityGroup, [
  {
    name: '热门城市',
    cities: plainToClass(CityInfo, [{
      name: '上海',
      id: 1
    },
    {
      name: '北京',
      id: 2
    },
    {
      name: '苏州',
      id: 3
    },
    {
      name: '南京',
      id: 4
    },
    {
      name: '杭州',
      id: 5
    },
    {
      name: '广州',
      id: 6
    },
    {
      name: '深圳',
      id: 7
    },
    {
      name: '石家庄',
      id: 8
    },
    {
      name: '天津',
      id: 9
    },
    {
      name: '重庆',
      id: 10
    }])
  },
  {
    name: 'ABCD',
    cities: plainToClass(CityInfo, [{
      name: '上海1',
      id: 1
    },
    {
      name: '北京',
      id: 2
    },
    {
      name: '苏州',
      id: 3
    },
    {
      name: '南京',
      id: 4
    },
    {
      name: '杭州',
      id: 5
    },
    {
      name: '广州',
      id: 6
    },
    {
      name: '深圳',
      id: 7
    },
    {
      name: '石家庄',
      id: 8
    },
    {
      name: '天津',
      id: 9
    },
    {
      name: '重庆',
      id: 10
    }])
  },
  {
    name: 'EFGH',
    cities: plainToClass(CityInfo, [{
      name: '上海2',
      id: 1
    },
    {
      name: '北京',
      id: 2
    },
    {
      name: '苏州',
      id: 3
    },
    {
      name: '南京',
      id: 4
    },
    {
      name: '杭州',
      id: 5
    },
    {
      name: '广州',
      id: 6
    },
    {
      name: '深圳',
      id: 7
    },
    {
      name: '石家庄',
      id: 8
    },
    {
      name: '天津',
      id: 9
    },
    {
      name: '重庆',
      id: 10
    }])
  },
  {
    name: 'JKLM',
    cities: plainToClass(CityInfo, [{
      name: '上海3',
      id: 1
    },
    {
      name: '北京',
      id: 2
    },
    {
      name: '苏州',
      id: 3
    },
    {
      name: '南京',
      id: 4
    },
    {
      name: '杭州',
      id: 5
    },
    {
      name: '广州',
      id: 6
    },
    {
      name: '深圳',
      id: 7
    },
    {
      name: '石家庄',
      id: 8
    },
    {
      name: '天津',
      id: 9
    },
    {
      name: '重庆',
      id: 10
    }])
  },
  {
    name: 'NPQRS',
    cities: plainToClass(CityInfo, [{
      name: '上海4',
      id: 1
    },
    {
      name: '北京',
      id: 2
    },
    {
      name: '苏州',
      id: 3
    },
    {
      name: '南京',
      id: 4
    },
    {
      name: '杭州',
      id: 5
    },
    {
      name: '广州',
      id: 6
    },
    {
      name: '深圳',
      id: 7
    },
    {
      name: '石家庄',
      id: 8
    },
    {
      name: '天津',
      id: 9
    },
    {
      name: '重庆',
      id: 10
    }])
  },
  {
    name: 'TUWX',
    cities: plainToClass(CityInfo, [{
      name: '上海5',
      id: 1
    },
    {
      name: '北京',
      id: 2
    },
    {
      name: '苏州',
      id: 3
    },
    {
      name: '南京',
      id: 4
    },
    {
      name: '杭州',
      id: 5
    },
    {
      name: '广州',
      id: 6
    },
    {
      name: '深圳',
      id: 7
    },
    {
      name: '石家庄',
      id: 8
    },
    {
      name: '天津',
      id: 9
    },
    {
      name: '重庆',
      id: 10
    }])
  },
  {
    name: 'YZ',
    cities: plainToClass(CityInfo, [{
      name: '上海6',
      id: 1
    },
    {
      name: '北京',
      id: 2
    },
    {
      name: '苏州',
      id: 3
    },
    {
      name: '南京',
      id: 4
    },
    {
      name: '杭州',
      id: 5
    },
    {
      name: '广州',
      id: 6
    },
    {
      name: '深圳',
      id: 7
    },
    {
      name: '石家庄',
      id: 8
    },
    {
      name: '天津',
      id: 9
    },
    {
      name: '重庆',
      id: 10
    }])
  }
]);
type selectRes = {
  left: number;
  right: number;
  top: number;
  width: number;
  height: number;
};

// 获取dom信息 单个
export const querySelect = (selector: string): Promise<selectRes> => {
  return new Promise((resolve) => {
    // @ts-ignore
    let view = uni.createSelectorQuery().select(selector);
    view
      .fields(
        {
          size: true,
          rect: true,
          scrollOffset: true,
        },
        (res: selectRes) => {
          resolve(res);
        }
      )
      .exec();
  });
};
export const querySelectAll = (selector: string): Promise<selectRes[]> => {
  return new Promise((resolve) => {
    // @ts-ignore
    let view = uni.createSelectorQuery().selectAll(selector);
    view
      .fields(
        {
          size: true,
          rect: true,
          scrollOffset: true,
        },
        (res: selectRes[]) => {
          resolve(res);
        }
      )
      .exec();
  });
};

type LifeGameActionType = "set_is_start";

export type LifeGameAction = {
  type: LifeGameActionType;
  isStart: boolean;
};

export const setIsStart = (isStart: boolean): LifeGameAction => ({
  type: "set_is_start",
  isStart,
});

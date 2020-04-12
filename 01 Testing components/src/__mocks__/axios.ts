let catchFn = jest.fn(),
thenFn = jest.fn();

export default {
  get: jest.fn().mockResolvedValue({ data: [] }as any),
};

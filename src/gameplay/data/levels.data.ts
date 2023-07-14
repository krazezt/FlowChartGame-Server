type LevelData = {
  request: string;
  index: number;
  variables: { variableTypeID: number; variableName: string }[];
  functionBlocks: {
    id: number;
    blockTypeID: number;
    text: string;
    connectBlocks: number[];
  }[];
  testCases: {
    testCaseTypeID: number;
    text: string;
    casePairs: { value: number; variableBlockIndex: number }[];
  }[];
  validateURL: string;
};

// ======================================================================================================
const levelsData: LevelData[] = [
  {
    request: "Cho hai số A và B, hãy tìm số lớn nhất trong hai số này và gán giá trị đó cho Max.",
    index: 0,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'Max',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      { id: 6, blockTypeID: 1, text: 'Max = A', connectBlocks: [2, 0] },
      { id: 7, blockTypeID: 1, text: 'Max = B', connectBlocks: [2, 1] },
      { id: 8, blockTypeID: 7, text: 'Xuất Max', connectBlocks: [] },
      { id: 9, blockTypeID: 12, text: 'Kết thúc', connectBlocks: [2, 0, 1] },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 1\nB = 2',
        casePairs: [
          { value: 1, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 5\nB = 2',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/max-ab',
  },
  {
    request: "Cho hai số A và B, hãy tìm ước chung lớn nhất của hai số này và gán giá trị đó cho UCLN.",
    index: 1,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'UCLN',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 2,
        text: 'A = B',
        connectBlocks: [0, 1],
      },
      {
        id: 6,
        blockTypeID: 1,
        text: 'UCLN = A',
        connectBlocks: [2, 0],
      },
      {
        id: 7,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      {
        id: 8,
        blockTypeID: 9,
        text: 'A = A - B',
        connectBlocks: [0, 1, 0],
      },
      {
        id: 9,
        blockTypeID: 9,
        text: 'B = B - A',
        connectBlocks: [1, 0, 1],
      },
      {
        id: 10,
        blockTypeID: 12,
        text: 'Kết thúc',
        connectBlocks: [2, 0, 1],
      },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 4\nB = 6',
        casePairs: [
          {
            value: 4,
            variableBlockIndex: 0,
          },
          {
            value: 6,
            variableBlockIndex: 1,
          },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 12\nB = 15',
        casePairs: [
          {
            value: 12,
            variableBlockIndex: 0,
          },
          {
            value: 15,
            variableBlockIndex: 1,
          },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/ucln-ab',
  },
  {
    request: "Cho hai số A và B, hãy tìm số nhỏ nhất trong hai số này và gán giá trị đó cho Min.",
    index: 2,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'Min',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 5,
        text: 'A < B',
        connectBlocks: [0, 1],
      },
      { id: 6, blockTypeID: 1, text: 'Min = A', connectBlocks: [2, 0] },
      { id: 7, blockTypeID: 1, text: 'Min = B', connectBlocks: [2, 1] },
      { id: 8, blockTypeID: 7, text: 'Xuất Min', connectBlocks: [] },
      { id: 9, blockTypeID: 12, text: 'Kết thúc', connectBlocks: [2, 0, 1] },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 1\nB = 2',
        casePairs: [
          { value: 1, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 5\nB = 2',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/min-ab',
  },
];

export { levelsData, LevelData };
